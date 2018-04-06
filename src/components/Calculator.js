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
			<div className="calculator-container">
				<div className="row">
		        	<div className="col-sm-12 col-md-12 col-lg-12">
		        		<InputDisplay input={this.state.input} />
		        	</div>
		        </div>

	            <div className="row">
		        	{renderNumpadButtons({ display: [7, 8, 9], onClick: this.updateDisplay })}
		        </div>
			</div>
		);
	}
	
}

export { Calculator };