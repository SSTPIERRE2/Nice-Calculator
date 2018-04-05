import React, { Component } from 'react';
import '../assets/style.css';
import { InputDisplay, NumButton } from './';

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
		        	<div className="col-sm-4 col-md-4 col-lg-4">
		        		<NumButton display="7" onClick={this.updateDisplay} />
		            </div>
		            <div className="col-sm-4 col-md-4 col-lg-4">
		              <NumButton display="8" onClick={this.updateDisplay} />
		            </div>
		            <div className="col-sm-4 col-md-4 col-lg-4">
		              <NumButton display="9" onClick={this.updateDisplay} />
		            </div>
		        </div>
			</div>
		);
	}
	
}

export { Calculator };