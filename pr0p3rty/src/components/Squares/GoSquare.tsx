import React from "react";

interface Props {
	id: number;
}

const GoSquare: React.FC<Props> = ({ id }) => {
	return <div>GO {id}</div>;
};

export default GoSquare;
