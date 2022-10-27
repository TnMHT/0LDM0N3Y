import React from "react";
import { PropertyData } from "../BoardData/PropertyData";

interface Props {
	id: number;
}

const PropertySquare: React.FC<Props> = ({ id }) => {
	const name: string | undefined = PropertyData.get(id)?.name;
	const ticker: string | undefined = PropertyData.get(id)?.ticker;
	const color: string | undefined = PropertyData.get(id)?.color;
	const buyPrice: number | undefined = PropertyData.get(id)?.buyPrice;

	const getClassName = () => {
		return "square " + color;
	};

	return (
		<>
			<div className='square mb-2 text-md font-bold tracking-tight text-gray-900'>
				<div className='square-name'>{ticker}</div>
				<div className={getClassName()}></div>
				<div className='price'>₿{buyPrice}</div>
			</div>
		</>
	);
};

export default PropertySquare;
