import React from "react";

interface Props {
	id: number;
}
const GoToJailSquare: React.FC<Props> = ({ id }) => {
	return (
		<div>
			<div className='square-name'>GO TO JAIL</div>
		</div>
	);
};

export default GoToJailSquare;
