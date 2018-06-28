import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDisplay extends Component {
  static propTypes = {
    input: PropTypes.string,
    solution: PropTypes.string,
    error: PropTypes.boolean,
  };

  static defaultProps = {
    input: '',
    solution: '',
    error: false,
  };

  state = {
    error: false,
  };

  render() {
    const { input, solution, error } = this.props;

    return (
      <div className="input-display">

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
  }
}

export default InputDisplay;
