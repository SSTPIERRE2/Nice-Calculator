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
		const lastChar = display.slice(-1);
		const nextTolastChar = display.slice(-2)[0];

		if (isNaN(nextInput)) {
			nextDisplay = display + nextInput;
		}

		if (display !== '') {
			if (nextInput === 'DEL') {
				nextDisplay = display.slice(0, display.length - 1);
			}

			if (lastChar === nextInput) {
				// do nothing
			}

			if ((plusMinus.includes(lastChar) && plusMinus.includes(nextInput)) 
				|| ((timesDivPlus.includes(lastChar) && !timesDivPlus.includes(nextTolastChar)) 
						&& timesDivPlus.includes(nextInput))) {
					display.slice(0, display.length - 1) + nextInput;
			}

			if (lastChar === '-') {

			}
		}

		


		this.setState({
			input: 
			!isNaN(nextInput)
				? display + nextInput
				: nextInput === 'DEL'
				? display.slice(0, display.length - 1)
				: (lastChar === nextInput)
				? display
				: (plusMinus.includes(lastChar) && plusMinus.includes(nextInput)) 
					|| (timesDivPlus.includes(lastChar) && timesDivPlus.includes(nextInput))
				? display.slice(0, display.length - 1) + nextInput
				: (lastChar === '-' && !timesDivPlus.includes(nextTolastChar) && timesDivPlus.includes(nextInput))
				? display + nextInput
				: display + nextInput
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