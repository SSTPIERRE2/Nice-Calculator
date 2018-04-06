import React, { Component } from 'react';

const InputDisplay = (props) => {
	return (
		<div className="input-display">
			<span className="input-text">{props.input}</span>
		</div>
	);
}

export { InputDisplay };