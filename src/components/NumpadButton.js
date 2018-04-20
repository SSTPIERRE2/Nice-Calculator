import React from 'react';

const NumpadButton = (props) => {
	return (
		<div 
			className="numpad-btn" 
			onClick={() => props.onClick ? props.onClick(props.display) : props.evaluate()}
		>
			<span className="numpad-text">{props.display}</span>
		</div>
	);
}

export { NumpadButton };