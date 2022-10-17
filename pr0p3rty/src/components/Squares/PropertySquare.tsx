import React from "react";

// interface Property {
// 	title: string;
// 	color: string;
// 	price: number;
// 	place: number;
// 	type: string;
// }
interface Props {
	id: number;
}

/**
 * 
SQUARE COMPONENTS


 */

const PropertySquare: React.FC<Props> = ({ id }) => {
	return (
		<>
			<div className='square'>
				<div className='title'>Property{id}</div>
			</div>
		</>
	);
};

export default PropertySquare;
