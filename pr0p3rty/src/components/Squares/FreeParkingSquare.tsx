import React from "react";

interface Props {
	id: number;
}
const FreeParkingSquare: React.FC<Props> = ({ id }) => {
	return (
		<div>
			<div className='square-name'>FREE PARKING</div>
		</div>
	);
};

export default FreeParkingSquare;
