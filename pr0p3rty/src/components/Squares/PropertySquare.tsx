import React from "react";
import { PropertyData } from "../BoardData/PropertyData";

interface Props {
	id: number;
}

const PropertySquare: React.FC<Props> = ({ id }) => {
	const name: string | undefined = PropertyData.get(id)?.name;

	return (
		<>
			<div className='square'>
				<div className='square-name'>{name}</div>
			</div>
		</>
	);
};

export default PropertySquare;
