import React, { Component } from 'react';
import '../assets/style.css';
import { InputDisplay, NumpadButton } from './';
import { renderNumpadButtons } from '../utils';

class Calculator extends Component {
	state = {
		input: ''
	};

	updateDisplay = (nextInput) => {
		let display = this.state.input;
		let nextDisplay = display;
		const plusMinus = ['+', '-'];
		const timesDivPlus = ['x', '%', '+'];
		const symbols = ['x', '%', '+', '-'];
		const lastChar = display.slice(-1);
		const nextTolastChar = display.slice(-2)[0];

		if (!isNaN(nextInput)
			|| display === '' && nextInput === '-') {
				nextDisplay = display + nextInput;
		} else if (display !== '') {
			if (nextInput === 'DEL') {
				nextDisplay.split('').reverse().some((item) => {
					nextDisplay = nextDisplay.slice(0, nextDisplay.length - 1);

					return item === ' ';
				});
			} else if (display.length > 1 && lastChar === '-' && !timesDivPlus.includes(nextTolastChar)) {
				nextDisplay = `${display.slice(0, display.length - 1)}${nextInput}`;
			} else if (!isNaN(lastChar)) {
				nextDisplay = `${display}${nextInput}`;
			} else if (['x', '%'].includes(lastChar) && nextInput === '-') {
				nextDisplay = `${display}${nextInput}`;
			} else if (lastChar === '.') {
				nextDisplay = `${display}0${nextInput}`
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
			input: nextDisplay
		});
	}

	render () {
		return (
			<div className="container-fluid calculator-container">

		        <InputDisplay input={this.state.input} />

		        <div className="row">
		        	<div className="col-3 col-sm-3 col-md-3 col-lg-3">
		        		{renderNumpadButtons({ display: [7, 4, 1, '.'], onClick: this.updateDisplay, direction: 'vertical' })}
		        	</div>

		        	<div className="col-3 col-sm-3 col-md-3 col-lg-3">
						{renderNumpadButtons({ display: [8, 5, 2, 0], onClick: this.updateDisplay, direction: 'vertical' })}
					</div>

					<div className="col-3 col-sm-3 col-md-3 col-lg-3">
						{renderNumpadButtons({ display: [9, 6, 3, '='], onClick: this.updateDisplay, direction: 'vertical' })}
					</div>

		        	<div className="col-3 col-sm-3 col-md-3 col-lg-3">
		        		{renderNumpadButtons({
		        			display: ['DEL', '%', 'x', '-', '+'],
		        			onClick: this.updateDisplay,
		        			direction: 'vertical'
		        		})}
		        	</div>
		        </div>
			</div>
		);
	}
	
}

export { Calculator };