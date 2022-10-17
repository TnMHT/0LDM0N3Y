import React from "react";
import PropertySquare from "./PropertySquare";

/**
 * 
 BOARD COMPONENTS

 TODO:
- 40 Squares
- Dice Roll

 */
const properties = {
	title: "London",
	color: "red",
	price: 260,
	place: 1,
	type: "property",
};
const Board: React.FC = () => {
	return (
		<>
			<div id='board'>
				<div className='places'>
					<PropertySquare {...properties} />
					{/* {properties.map(
						({
							title: string,
							color: string,
							price: number,
							place: number,
							type: string,
						}) => {
							<PropertySquare
								key={title}
								title={title}
								color={color}
								price={price}
								type={type}
								place={place}
							/>;
						}
					)} */}
				</div>
			</div>
		</>
	);
};

export default Board;
