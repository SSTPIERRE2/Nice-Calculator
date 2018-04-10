import React, { Component } from 'react';
import { calculateSolution } from '../utils';

const InputDisplay = (props) => {
	return (
		<div className="input-display">

			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12">
					<span id="input-text">{props.input}</span>
				</div>
			</div>

			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12">
					<span id="solution-text">{calculateSolution(props.input)}</span>
				</div>
			</div>

		</div>
	);
}

export { InputDisplay };