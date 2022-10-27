import React from "react";

interface Props {
	id: number;
}

const UtilitySquare: React.FC<Props> = ({ id }) => {
	return (
		<div>
			<div className='square-name'>UTILITY</div>
		</div>
	);
};

export default UtilitySquare;
