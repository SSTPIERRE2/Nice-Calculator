import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func,
  display: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  evaluate: PropTypes.func,
};
const defaultProps = {
  onClick: () => {},
  display: '',
  evaluate: () => {},
};

/**
 * @const NumpadButton
 * @description A single button on the calculator. 
 *   It could be a number or operator and run a given onClick function.
 */
const NumpadButton = ({ onClick, display, evaluate }) => (
  <div
    className="numpad-btn"
    onClick={() => (onClick ? onClick(display) : evaluate())}
  >
    <span className="numpad-text">{display}</span>
  </div>
);

NumpadButton.propTypes = propTypes;
NumpadButton.defaultProps = defaultProps;

export default NumpadButton;
