import React, { Component } from 'react';
import '../assets/style.css';
import { InputDisplay, NumpadButton } from './';
import { renderNumpadButtons } from '../utils';

class Calculator extends Component {
	state = {
		input: ''
	};

	updateDisplay = (nextInput) => {
		const initialNoOps = ['%', 'x', '+', '='];
		const plusMinus = ['+', '-'];
		const timesDivPlus = ['x', '%', '+'];

		let display = this.state.input;
		const lastChar = display.slice(-1);
		const nextTolastChar = display.slice(-2)[0];

		if (display === '') {
			if (!initialNoOps.includes(nextInput)) {
				display = nextInput === '.'
					? '0.'
					: this.state.input + nextInput;

				this.setState({ input: display });
			}
		} else if (noDupes.includes(nextInput) && display.slice(-1) === nextInput) {
			// Can't input same symbol after itself
		} else {
			this.setState({
				input: 
				!isNaN(nextInput)
					? display + nextInput
					: lastChar === nextInput
					? display
					: (plusMinus.includes(lastChar) && plusMinus.includes(nextInput)) 
						|| (timesDivPlus.includes(lastChar) && timesDivPlus.includes(nextInput))
					? display.slice(0, display.length - 1) + nextInput
					: lastChar === '-' !timesDivPlus.includes(nextTolastChar) && timesDivPlus.includes(nextInput)
					? display + nextInput
					: display



				(display === '')
					? (!initialNoOps.includes(nextInput))
						? (nextInput === '.')
							? '0.'
							: this.state.input + nextInput
					: (noDupes.includes(nextInput) && display.slice(-1) === nextInput)
						? this.state.input
						: this.state.input + nextInput


			});
		}

		
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