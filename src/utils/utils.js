import React from 'react';
import { NumpadButton } from '../components';

/**
 * @function renderNumpadButtons
 * @description renders some NumpadButton components, bro
 * @param  {Object} the numbers or symbols each button will represent
 * @return {Object}
 */
const renderNumpadButtons = ({ display, onClick }) => {
	let result;

	if (Array.isArray(display)) {
		result = display.map((item) => {
			console.log(item);
			return(
				<div className={bootstrapColumns(bootstrapEqualColumns(display.length))}>
					<NumpadButton display={item} onClick={() => onClick(item)} />
				</div>
			);
		});
	}

	return result;
};

/**
 * @function bootstrapEqualColumns
 * @description returns the number for even bootstrap columns
 * @param {number} numberOfElements
 * @type {number}
 */
const bootstrapEqualColumns = (numberOfElements) => {
	return 12 / numberOfElements;
};

/**
 * @function bootstrapColumns
 * @description returns class names for the bootstrap columns you want to support
 * @todo : add some way to control scaling of each column size i.e. col-sm-12 col-md-6 col-lg-3
 * @param  {number} columnNumber the column number you want to use for each column size
 * @return {string}
 */
const bootstrapColumns = (columnNumber) => {
	return `col-sm-${columnNumber} col-md-${columnNumber} col-lg-${columnNumber}`
}

export { renderNumpadButtons };