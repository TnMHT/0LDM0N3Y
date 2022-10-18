import React from "react";

interface Props {
	id: number;
}

const PropertySquare: React.FC<Props> = ({ id }) => {
	return (
		<>
			<div className='square'>
				<div className='square-name'>Property{id}</div>
			</div>
		</>
	);
};

export default PropertySquare;
