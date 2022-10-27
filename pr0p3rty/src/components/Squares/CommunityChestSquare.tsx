import React from "react";

interface Props {
	id: number;
}
const CommunityChestSquare: React.FC<Props> = ({ id }) => {
	return (
		<>
			<div className=''>
				<div className='square-name'>COMMUNITY CHEST</div>
			</div>
		</>
	);
};

export default CommunityChestSquare;
