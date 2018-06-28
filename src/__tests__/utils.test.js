import React from 'react';
import { renderNumpadButtons } from '../utils';
import renderer from 'react-test-renderer';

describe('renderNumpadButtons', () => {
	test('it outputs something', () => {
		const expected = [];
		const actual = renderer.create(
      renderNumpadButtons({ display: [ 7, 8, 9 ], onClick: () => {}, direction: 'vertical' })
    ).toJSON();

		expect(actual.children.length).toBe(3);
	});
});