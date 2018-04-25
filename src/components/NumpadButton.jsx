import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.function,
  display: PropTypes.string,
  evaluate: PropTypes.function,
};
const defaultProps = {
  onClick: undefined,
  display: '',
  evaluate: undefined,
};

const NumpadButton = props => (
  <div
    className="numpad-btn"
    onClick={() => (props.onClick ? props.onClick(props.display) : props.evaluate())}
  >
    <span className="numpad-text">{props.display}</span>
  </div>
);

NumpadButton.propTypes = propTypes;
NumpadButton.defaultProps = defaultProps;

export default NumpadButton;
