import React, { Component } from 'react';
import { calculateSolution } from '../utils';

class InputDisplay extends Component {
	state = {
		error: ''
	};

	renderDisplay(input) {
		const solution = calculateSolution(input);

		if (solution === 'Cannot divide by zero' || solution === 'Bad expression') {
			console.log(`${solution}`)
			return '';
		}

		return solution;
	}

	render() {
		const { input } = this.props;

		return (
			<div className="input-display">

				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<span id="input-text">{input}</span>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<span id="solution-text">
							{this.renderDisplay(input)}
						</span>
					</div>
				</div>

			</div>
		);
	}
}

export { InputDisplay };