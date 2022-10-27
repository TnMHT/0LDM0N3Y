import React from "react";

interface Props {
	id: number;
}

const GoSquare: React.FC<Props> = ({ id }) => {
	return (
		<div>
			<div className='square-name'>GO</div>
		</div>
	);
};

export default GoSquare;
