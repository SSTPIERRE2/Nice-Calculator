import { renderNumpadButtons, calculateSolution } from '../utils';

describe('renderNumpadButtons', () => {
	test('it outputs something', () => {
		const expected = [];
		const actual = renderNumpadButtons({ display: [ 7, 8, 9 ], onClick: () => {} });

		expect(Array.isArray(actual)).toBeDefined();
	});
});

describe('calculateSolution', () => {
	/*test('it doesnt run forever...', () => {
		const expected = 4;
		const actual = calculateSolution('2+2');

		expect(actual.number).toBe(expected);
	});

	test('no divide by zero!', () => {
		expect(() => { 
			calculateSolution('2%0');
		}).toThrow();
	});*/

	test('empty rightHandSide just returns numbers', () => {
		const expected = '1';
		const actual = calculateSolution('1+2-1*4%2+');

		expect(actual).toBe(expected);
	});
});