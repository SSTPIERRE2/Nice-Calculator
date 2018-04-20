import React, { Component } from 'react';
import { calculateSolution } from '../utils';

class InputDisplay extends Component {
	state = {
		error: null
	};

	render() {
		const { input, solution, error } = this.props;
		console.log(`hello solution ??? ${solution}`);
		return (
			<div className="input-display">

				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<span id="input-text" style={{ color: (error) ? 'red' : '#000'}}>{input}</span>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<span id="solution-text" style={{ color: (error) ? 'red' : '#000'}}>
							{solution}
						</span>
					</div>
				</div>

				<div 
					id="error-display"
					style={{ height: (error) ? '100%' : 0 }} 
				/>
			</div>
		);
	}
}

export { InputDisplay };