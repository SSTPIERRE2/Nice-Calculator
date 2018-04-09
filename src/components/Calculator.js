import React, { Component } from 'react';
import '../assets/style.css';
import { InputDisplay, NumpadButton } from './';
import { renderNumpadButtons } from '../utils';

class Calculator extends Component {
	state = {
		input: ''
	};

	updateDisplay = (nextInput) => {
		this.setState({ input: this.state.input + nextInput });
	}

	render () {
		return (
			<div className="container-fluid calculator-container">
				<div className="row">
		        	<div className="col-sm-12 col-md-12 col-lg-12">
		        		<InputDisplay input={this.state.input} />
		        	</div>
		        </div>

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
		        			display: ['DEL', '%', 'x', '-'], 
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