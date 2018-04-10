import React from 'react';

const NumpadButton = (props) => {
	return (
		<div className="numpad-btn" onClick={() => props.onClick(props.display)}>
			<p className="numpad-text">{props.display}</p>
		</div>
	);
}

export { NumpadButton };