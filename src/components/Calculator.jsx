import React, { Component } from 'react';
import '../assets/style.css';
import { InputDisplay } from './';
import { renderNumpadButtons, calculateSolution } from '../utils';

/**
 * @class Calculator
 * @description As the main parent class of the app, all state is managed here
 */
class Calculator extends Component {
  state = {
    input: '',
    solution: '',
    error: false,
  };

  /**
   * @method evaluateInput
   * @description  Updates state with solution or error when equals button is clicked
   * @return void
   */
  evaluateInput = () => {
    const solution = calculateSolution(this.state.input);

    this.setState({
      solution,
      error: solution === "Can't divide by zero" || solution === 'Bad expression',
    });
  };

  /**
   * @method  updateDisplay
   * @description  Updates the input display based on a number of contraints for calculators such as Android
   * and OSX
   * @param {string} nextInput the previous input plus one character for the next input
   * @return void
   */
  updateDisplay = (nextInput) => {
    const display = this.state.input;
    let nextDisplay = display;
    const plusMinus = ['+', '-'];
    const timesDivPlus = ['x', '%', '+'];
    const lastChar = display.slice(-1);
    const nextTolastChar = display.slice(-2)[0];

    /**
     * Determine what to do with the next input:
     * If it's a number or display is empty and nextInput is '-' (to allow first negative number), add to display
     * If it's the delete button, remove the last character in display
     * If the last operation is '+' 'x' or '%' and the last character is '-', allow only a number to be next (no stacking operators)
     * Allow any operator after a number, and allow '-' after 'x' or '%' operators
     * Allow a decimal after any operator, but automatically insert a 0 before it for clarity
     * Last case: allow swapping operators '+' and '-', and allow swapping '+' 'x' '%'
     */
    if (!isNaN(nextInput) || (display === '' && nextInput === '-')) {
      nextDisplay = display + nextInput;
    } else if (display !== '') {
      if (nextInput === 'DEL') {
        nextDisplay = nextDisplay.split('').slice(0, nextDisplay.length - 1).join('');
      } else if (display.length > 1 && lastChar === '-' && !timesDivPlus.includes(nextTolastChar)) {
        nextDisplay = `${display.slice(0, display.length - 1)}${nextInput}`;
      } else if (!isNaN(lastChar) && nextInput !== '=') {
        nextDisplay = `${display}${nextInput}`;
      } else if (['x', '%'].includes(lastChar) && nextInput === '-') {
        nextDisplay = `${display}${nextInput}`;
      } else if (['+', '-', 'x', '%'].includes(lastChar) && nextInput === '.') {
        nextDisplay = `${display}0${nextInput}`;
      } else if (
        ((display.length > 1
          && plusMinus.includes(lastChar)
          && plusMinus.includes(nextInput)
          && !timesDivPlus.includes(nextTolastChar))
        || (timesDivPlus.includes(lastChar) && timesDivPlus.includes(nextInput)))) {
        nextDisplay = display.slice(0, display.length - 1) + nextInput;
      }
    }

    this.setState({
      input: nextDisplay,
      solution: this.renderSolution(nextDisplay),
      error: '',
    });
  }

  /**
   * @method  renderSolution
   * @description  Determine what to show in real-time based on solution. This is mainly to give the user
   * a chance to fix input errors before throwing errors on the screen.
   * @param  {string} input
   * @return {string}
   */
  renderSolution = (input) => {
    const solution = calculateSolution(input);

    return solution === "Can't divide by zero" || solution === 'Bad expression'
      ? ''
      : solution;
  }

  render() {
    return (
      <div className="container-fluid calculator-container">

        <InputDisplay
          input={this.state.input}
          solution={this.state.solution}
          error={this.state.error}
        />

        <div className="row">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 num-column">
            {renderNumpadButtons({ display: [7, 4, 1, '.'], onClick: this.updateDisplay })}
          </div>

          <div className="col-3 col-sm-3 col-md-3 col-lg-3 num-column">
            {renderNumpadButtons({ display: [8, 5, 2, 0], onClick: this.updateDisplay })}
          </div>

          <div className="col-3 col-sm-3 col-md-3 col-lg-3 num-column">
            {renderNumpadButtons({
              display: [9, 6, 3, '='],
              onClick: this.updateDisplay,
              evaluate: this.evaluateInput,
            })}
          </div>

          <div id="op-column" className="col-3 col-sm-3 col-md-3 col-lg-3">
            {renderNumpadButtons({
              display: ['DEL', '%', 'x', '-', '+'],
              onClick: this.updateDisplay,
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
