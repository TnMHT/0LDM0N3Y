import React from "react";

interface Props {
	id: number;
}

const RailroadSquare: React.FC<Props> = ({ id }) => {
	return (
		<div>
			<div className='square-name'>RAILROAD</div>
		</div>
	);
};

export default RailroadSquare;
