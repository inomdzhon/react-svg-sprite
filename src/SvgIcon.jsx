import React from 'react';

export default function SvgIcon(props) {
  let classNameArr = ['icon'];
  let otherAttr = Object.assign({}, props);

  classNameArr.push('icon_' + props.name.replace(/.*#/, ''));
  classNameArr.push(props.className || '');

  delete otherAttr.name;
  delete otherAttr.className;

  return (
    <svg className={classNameArr.join(' ').trim()} {...otherAttr}>
      <use xlinkHref={props.name} />
    </svg>
  )
}

SvgIcon.propTypes = {
  name: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};
