import React from "react";

interface Property {
	title: string;
	color: string;
	price: number;
	place: number;
	type: string;
}

/**
 * 
SQUARE COMPONENTS


 */

const PropertySquare: React.FC<Property> = ({
	title,
	color,
	price,
	place,
	type,
}) => {
	return (
		<>
			<div className='square'>
				<h1 className='title'>{title}</h1>
				<div className='color'>{color}</div>
				<p className='price'>{price}</p>
			</div>
		</>
	);
};

export default PropertySquare;
