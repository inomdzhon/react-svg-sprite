require('../styles/app.scss');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SvgIcon from './SvgIcon';
import iconEmpty from './icons/empty.svg';
import iconVip from './icons/vip.svg';
import iconBook from './icons/book.svg';
import iconAdd from './icons/add.svg';
import iconClock from './icons/clock.svg';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>Библиотека <a target="_blank" href="https://github.com/Karify/external-svg-sprite-loader">external-svg-sprite-loader </a></h2>
          <ul>
            <li className="clickable">
              <SvgIcon name={iconEmpty.symbol} onClick={function() {alert('SVG is awesome!')}} />
              <p>Кликни<br/>на иконку</p>
            </li>
            <li>
              <SvgIcon name={iconVip.symbol} className="test-hover" />
              <p>Наведи<br/>на иконку</p>
            </li>
            <li>
              <SvgIcon name={iconBook.symbol} />
            </li>
            <li style={{color: 'red'}}>
              <SvgIcon name={iconAdd.symbol} />
            </li>
            <li>
              <SvgIcon style={{fill: 'steelblue'}} name={iconClock.symbol} onClick={function() {alert('SVG is awesome!')}} />
            </li>
          </ul>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
