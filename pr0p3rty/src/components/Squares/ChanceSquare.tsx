import React from "react";

interface Props {
	id: number;
}

const ChanceSquare: React.FC<Props> = ({ id }) => {
	return <div>CHANCE {id}</div>;
};

export default ChanceSquare;
