import React from 'react';
import { NumpadButton } from '../components';

/**
 * @function filterWhiteSpaces
 * @description removes white spaces from an array
 * @param  {Array} arr
 * @return {Array}
 */
const filterWhiteSpaces = (arr) => {
  return arr.filter((item) => {
    return item !== '';
  });
};

/**
 * @function calculateSolution
 * @description calculates a mathematical solution using order of operations
 * @param  {string} input
 * @return {string}
 */
const calculateSolution = (input) => {
  input = input.replace('x', '*');
  const numbers = filterWhiteSpaces(input.split(/[+\-*%]/));
  const operators = filterWhiteSpaces(input.split(/[0-9]+\.?[0-9]*/));
  let solution;

  if (numbers.length === 1) {
    return '';
  }

  /**
   * @function findHighestPriorityOperator
   * @description finds the highest priority operator within an array of operators, using OOO
   * @param  {Array}
   * @return {Object} the operator and its index in the input array
   */
  const findHighestPriorityOperator = (operators) => {
    const orderOfOperations = {
      '*': 2,
      '%': 2,
      '+': 1,
      '-': 1,
      first: 0,
    };
    let highestPriorityOperator = {
      op: 'first',
      index: 0,
    };

    operators.forEach((op, index) => {
      if (orderOfOperations[op] > orderOfOperations[highestPriorityOperator.op]) {
        highestPriorityOperator = { op, index };
      }
    });

    return highestPriorityOperator;
  };

  /**
   * @function calculateOne
   * @description Calculates the solution to one operation (such as 2+2 or 5*2)
   * @param  {string} op the operator of the operation
   * @param  {number} index the index of the operator in the array of operators left to complete operations for
   * @return {number}
   */
  const calculateOne = ({ op, index }) => {
    const leftHandSide = Number(numbers[index]);
    const rightHandSide = numbers[index + 1] === undefined ? undefined : Number(numbers[index + 1]);
    let solution = 0;

    if (rightHandSide === undefined) {
      solution = leftHandSide;
      numbers.splice(index, 2, solution);
      operators.splice(index, 1);
      return solution;
    }

    solution = op === '*'
      ? leftHandSide * rightHandSide
      : op === '%'
      ? leftHandSide / rightHandSide
      : op === '+'
      ? leftHandSide + rightHandSide
      : op === '-'
      ? leftHandSide - rightHandSide
      : numbers;

    numbers.splice(index, 2, solution);
    operators.splice(index, 1);

    return solution;
  };

  if (operators.length === 0) {
    solution = input;
  }

  // Calculate an operation for each operator input until calculations are complete
  while (operators.length !== 0) {
    solution = calculateOne(findHighestPriorityOperator(operators)).toString();

    if (solution.includes('Infinity')) {
      return "Can't divide by zero";
    }

    if (solution.split('')[solution.split('').length - 1] === '.') {
      return 'Bad expression';
    }
  }

  return solution;
};

/**
 * @function renderNumpadButtons
 * @description renders some NumpadButton components, bro
 * @param {string} [display] the number or symbol each button will represent
 * @param {Function} [onClick] default onClick functionality
 * @param {Function} [evaluate] equals button functionality
 * @return {Array}
 */
const renderNumpadButtons = ({ display, onClick, evaluate }) => {
  let result;

  if (Array.isArray(display)) {
    result = display.map((item) => {
      return (
        <NumpadButton
          key={item}
          display={item}
          onClick={item === '='
            ? evaluate
            : onClick}
        />
      );
    });
  }

  return (
    [result]
  );
};

export { renderNumpadButtons, calculateSolution };
