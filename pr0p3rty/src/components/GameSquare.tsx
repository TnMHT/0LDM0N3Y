import React from "react";
import SquareDetails from "./SquareDetails";

interface Square {
	id: number;
}

const GameSquare: React.FC<Square> = ({ id }) => {
	return (
		<>
			<SquareDetails id={id} />
		</>
	);
};

export default GameSquare;
