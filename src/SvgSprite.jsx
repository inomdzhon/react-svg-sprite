import React from 'react';

export default function SvgSprite(props) {
    const {symbols, style, ...other} = props;

    return (
        <svg {...other} style={style} xmlns="http://www.w3.org/2000/svg">
            {symbols.map(symbol => {
              return (
                <symbol
                    key={symbol.id}
                    id={symbol.id}
                    viewBox={symbol.viewBox}
                    dangerouslySetInnerHTML={{__html: symbol.source}}
                />
              );
            })}
        </svg>
    );
}

SvgSprite.propTypes = {
    symbols: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
    style: React.PropTypes.object,
};

SvgSprite.defaultProps = {
    style: {
      display: 'block',
      width: 0,
      height: 0,
    },
};
