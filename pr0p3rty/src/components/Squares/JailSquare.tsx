import React from "react";

interface Props {
	id: number;
}
const JailSquare: React.FC<Props> = ({ id }) => {
	return (
		<div>
			<div className='square-name'>JAIL</div>
		</div>
	);
};

export default JailSquare;
