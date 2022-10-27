import React from "react";

interface Props {
	id: number;
}

const ChanceSquare: React.FC<Props> = ({ id }) => {
	return (
		<div className=''>
			<div className='square-name'>CHANCE</div>
		</div>
	);
};

export default ChanceSquare;
