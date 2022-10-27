import React from "react";

interface Props {
	id: number;
}

const TaxSquare: React.FC<Props> = ({ id }) => {
	return (
		<div>
			<div className='square-name'>TAX</div>
		</div>
	);
};

export default TaxSquare;
