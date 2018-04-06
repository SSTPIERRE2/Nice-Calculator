import React from 'react';

const NumpadButton = (props) => {
	return (
		<div className="numpad-btn" onClick={() => props.onClick(props.display)}>
			{props.display}
		</div>
	);
}

export { NumpadButton };