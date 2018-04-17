import React from 'react';

const NumpadButton = (props) => {
	return (
		<div className="numpad-btn" onClick={() => props.onClick(props.display)}>
			<span className="numpad-text">{props.display}</span>
		</div>
	);
}

export { NumpadButton };