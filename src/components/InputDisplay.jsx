import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  input: PropTypes.string,
  solution: PropTypes.string,
  error: PropTypes.bool,
};

const defaultProps = {
  input: '',
  solution: '',
  error: false,
};

/**
 * @const InputDisplay 
 * @description Displays user input, output solution, and an error box if necessary.
 */
const InputDisplay = ({ input, solution, error }) => (
  <div className="input-display" style={{ overflow: 'auto' }}>

    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <span id="input-text" style={{ color: (error) ? 'red' : '#fff' }}>{input}</span>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <span id="solution-text" style={{ color: (error) ? 'red' : '#fff' }}>
          {solution}
        </span>
      </div>
    </div>

    <div
      id="error-display"
      style={{ height: (error) ? '100%' : 0 }}
    />
  </div>
);

InputDisplay.PropTypes = propTypes;
InputDisplay.defaultProps = defaultProps;

export default InputDisplay;
