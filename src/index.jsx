require('../styles/app.scss');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SvgSprite from './SvgSprite';
import SvgIcon from './SvgIcon';
import svgIconsObject from './svg-icons';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <ul>
            <li className="clickable">
              <SvgIcon name="empty" onClick={function() {alert('SVG is awesome!')}} />
              <p>Кликни<br/>на иконку</p>
            </li>
            <li>
              <SvgIcon name="vip" className="test-hover" />
              <p>Наведи<br/>на иконку</p>
            </li>
            <li>
              <SvgIcon name="book" />
            </li>
            <li style={{color: 'red'}}>
              <SvgIcon name="add" />
            </li>
            <li>
              <SvgIcon style={{fill: 'steelblue'}} name="clock" onClick={function() {alert('SVG is awesome!')}} />
            </li>
          </ul>
          <SvgSprite symbols={svgIconsObject} />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
