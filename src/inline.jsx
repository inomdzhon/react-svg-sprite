require('../styles/app.scss');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import svgIconsArray from './svg-icons';

function generateElement(count, hover) {
  let arr = [];
  let len = count;
  let bookIcon = svgIconsArray[0];

  while(len > 0) {
    arr.push(
      <svg
        key={len}
        className={`icon icon_book${hover ? ' icon_hover' : ''}`}
        width={bookIcon.width}
        height={bookIcon.height}
        viewBox={bookIcon.viewBox}
        dangerouslySetInnerHTML={{__html: bookIcon.source}}
      />
    );
    len = len - 1;
  }

  return arr;
}

const DEFAULT_COUNT = 1000;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: Number(localStorage.getItem('count')) || DEFAULT_COUNT,
      hover: localStorage.getItem('hover') === 'true',
    };
  }

  onMoreBtnClicked() {
    this.setState({
      count: this.state.count + DEFAULT_COUNT,
    }, () => {
      localStorage.setItem('count', this.state.count);
    });
  }

  onResetBtnClicked() {
    this.setState({
      count: DEFAULT_COUNT,
    });
    localStorage.setItem('count', DEFAULT_COUNT)
  }

  onToggleBtnClicked() {
    this.setState({
      hover: !this.state.hover,
    }, () => {
      localStorage.setItem('hover', this.state.hover);
    });
  }

  render() {
    const {hover, count} = this.state;
    return (
        <div className="app">
          <h1>Inline SVG</h1>
          <div className="controls">
            <div className="controls__item">
              <button onClick={this.onMoreBtnClicked.bind(this)}>Добавить ещё 1000</button>
            </div>
            <div className="controls__item">
              <button onClick={this.onResetBtnClicked.bind(this)}>Сбросить</button>
            </div>
            <div className="controls__item">
              <button onClick={this.onToggleBtnClicked.bind(this)}>{hover ? 'Выключить' : 'Включить'} поведение на hover (для вызова repoint'а)</button>
            </div>
            <div className="controls__item">
              <span>Текущее кол-во эл-ов: {count}</span>
            </div>
          </div>
          <div className="demo">
            { generateElement(count, hover) }
          </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
