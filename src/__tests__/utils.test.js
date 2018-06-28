import { renderNumpadButtons } from '../utils';

describe('renderNumpadButtons', () => {
	test('it outputs something', () => {
		const expected = [];
		const actual = renderNumpadButtons({ display: [ 7, 8, 9 ], onClick: () => {} });

		expect(Array.isArray(actual)).toBe(true);
		expect(actual.length).toBe(3);
	});
});