import React from 'react';
import { NumpadButton } from '../components';

const filterWhiteSpaces = (arr) => {
  return arr.filter((item) => {
    return item !== '';
  });
};

/* const reduceEquation = ({ numbers, operators, index, solution }) => {
  numbers.splice(index, 2, solution);
  operators.splice(index, 1);

  return {
    numbers,
    operators
  };
}; */

const calculateSolution = (input) => {
  input = input.replace('x', '*');
  const numbers = filterWhiteSpaces(input.split(/[+\-*%]/));
  const operators = filterWhiteSpaces(input.split(/[0-9]+\.?[0-9]*/));
  let solution;

  console.log(`calculating solution on ${input}`);

  if (numbers.length === 1) {
    return '';
  }

  const findHighestPriorityOperator = (operators) => {
    console.log(`finding highest priority operator of ${operators}`);
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
      console.log(`comparing operators: ${op} ${orderOfOperations[op]} vs highestPriorityOperator ${orderOfOperations[highestPriorityOperator.op]}`);
      if (orderOfOperations[op] > orderOfOperations[highestPriorityOperator.op]) {
        highestPriorityOperator = { op, index };
      }
    });

    console.log(`highest priority operator is: ${JSON.stringify(highestPriorityOperator)}`);
    return highestPriorityOperator;
  };

  const calculateOne = ({ op, index }) => {
    const leftHandSide = Number(numbers[index]);
    console.log(`hang on, is rightHandSide empty ? ${numbers[index + 1]} ${numbers[index + 1] === undefined}`);
    const rightHandSide = numbers[index + 1] === undefined ? undefined : Number(numbers[index + 1]);
    let solution = 0;
    console.log(`calculating one operation for ${op}, index ${index} on ${numbers}`);

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

    console.log(`calculation step complete for op: ${leftHandSide} ${op} ${rightHandSide} = ${solution}, operators: ${operators} numbers: ${numbers}`);
    return solution;
  };

  if (operators.length === 0) {
    solution = input;
  }

  while (operators.length !== 0) {
    solution = calculateOne(findHighestPriorityOperator(operators)).toString();

    if (solution.includes('Infinity')) {
      return "Can't divide by zero";
    }

    if (solution.split('')[solution.split('').length - 1] === '.') {
      return 'Bad expression';
    }
  }
  console.log(`solution is: ${solution}`);

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

/**
 * @function bootstrapEqualColumns
 * @description returns the number for even bootstrap columns
 * @param {number} numberOfElements
 * @type {number}
 */
/* const bootstrapEqualColumns = (numberOfElements) => {
  return 12 / numberOfElements;
}; */

/**
 * @function bootstrapColumns
 * @description returns class names for the bootstrap columns you want to support
 * @todo : add some way to control scaling of each column size i.e. col-sm-12 col-md-6 col-lg-3
 * @param  {number} columnNumber the column number you want to use for each column size
 * @return {string}
 */
/* const bootstrapColumns = (columnNumber) => {
  return `col-${columnNumber} col-sm-${columnNumber} col-md-${columnNumber} col-lg-${columnNumber}`
}; */

export { renderNumpadButtons, calculateSolution };
