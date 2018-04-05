import React from 'react';

const NumButton = (props) => {
	return (
		<div className="numpad-btn" onClick={() => props.onClick(props.display)}>
			{props.display}
		</div>
	);
}

export { NumButton };