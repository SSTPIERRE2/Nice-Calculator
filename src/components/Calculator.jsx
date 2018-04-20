import React, { Component } from 'react';
import '../assets/style.css';
import { InputDisplay } from './';
import { renderNumpadButtons, calculateSolution } from '../utils';

class Calculator extends Component {
	state = {
		input: '',
		solution: '',
		error: false
	};

	evaluateInput = () => {
		const solution = calculateSolution(this.state.input);

		this.setState({ 
			solution, 
			error: solution === "Can't divide by zero" || solution === 'Bad expression'
				? true
				: false
		});
	};

	renderSolution = (input) => {
		const solution = calculateSolution(input);
		console.log(`solution pls ${solution}`);

		return solution === "Can't divide by zero" || solution === 'Bad expression'
			? ''
			: solution 
	}

	updateDisplay = (nextInput) => {
		let display = this.state.input;
		let nextDisplay = display;
		const plusMinus = ['+', '-'];
		const timesDivPlus = ['x', '%', '+'];
		const lastChar = display.slice(-1);
		const nextTolastChar = display.slice(-2)[0];
		console.log(`updating display with nextInput: ${nextInput}`);

		if (!isNaN(nextInput)
			|| (display === '' && nextInput === '-')) {
				nextDisplay = display + nextInput;
		} else if (display !== '') {
			if (nextInput === 'DEL') {
				nextDisplay = nextDisplay.split('').slice(0, nextDisplay.length - 1).join('');
			} else if (display.length > 1 && lastChar === '-' && !timesDivPlus.includes(nextTolastChar)) {
				console.log(`second case?`)
				nextDisplay = `${display.slice(0, display.length - 1)}${nextInput}`;
			} else if (!isNaN(lastChar) && nextInput !== '=') {
				console.log(`third case?`)
				nextDisplay = `${display}${nextInput}`;
			} else if (['x', '%'].includes(lastChar) && nextInput === '-') {
				console.log(`fourth case?`)
				nextDisplay = `${display}${nextInput}`;
			} else if (['+', '-', '*', '%'].includes(lastChar) && nextInput === '.') {
				console.log(`fifth case?`)
				nextDisplay = `${display}0${nextInput}`
				console.log(`lastChar is ${lastChar} so nextDisplay should be ${nextDisplay}`);
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
			input: nextDisplay,
			solution: this.renderSolution(nextDisplay)
		});
	}

	render () {
		return (
			<div className="container-fluid calculator-container">

		        <InputDisplay input={this.state.input} solution={this.state.solution} error={this.state.error} />

		        <div className="row">
		        	<div className="col-3 col-sm-3 col-md-3 col-lg-3 num-column">
		        		{renderNumpadButtons({ display: [7, 4, 1, '.'], onClick: this.updateDisplay })}
		        	</div>

		        	<div className="col-3 col-sm-3 col-md-3 col-lg-3 num-column">
						{renderNumpadButtons({ display: [8, 5, 2, 0], onClick: this.updateDisplay })}
					</div>

					<div className="col-3 col-sm-3 col-md-3 col-lg-3 num-column">
						{renderNumpadButtons({ 
							display: [9, 6, 3, '='], 
							onClick: this.updateDisplay,
							evaluate: this.evaluateInput
						})}
					</div>

		        	<div id="op-column" className="col-3 col-sm-3 col-md-3 col-lg-3">
		        		{renderNumpadButtons({ 
		        			display: ['DEL', '%', 'x', '-', '+'], 
		        			onClick: this.updateDisplay
		        		})}
		        	</div>
		        </div>
			</div>
		);
	}
	
}

export { Calculator };