import React from 'react';
import renderer from 'react-test-renderer';
import { renderNumpadButtons, calculateSolution } from '../utils';

describe('renderNumpadButtons', () => {
	test('it renders one child per item in display', () => {
		const expected = [];
		const actual = renderer.create(renderNumpadButtons({ display: [ 7, 8, 9 ], onClick: () => {} })).toJSON();;

		expect(actual.length).toBe(3);
	});
});

describe('calculateSolution', () => {
	test('it solves simple addition', () => {
		const expected = '4';
		const actual = calculateSolution('2+2');

		expect(actual).toBe(expected);
	});

	test('no divide by zero!', () => {
    const expected = "Can't divide by zero";
    const actual = calculateSolution('2%0');

    expect(actual).toBe(expected);
	});

	test('empty rightHandSide just returns numbers', () => {
		const expected = '1';
		const actual = calculateSolution('1+2-1*4%2+');

		expect(actual).toBe(expected);
	});
});