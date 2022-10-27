import React from "react";
import Balances from "./Balances";
import GameSquare from "./GameSquare";
import Transactions from "./Transactions";

interface Spaces {
	place: number;
	type: string;
}

const Board: React.FC = () => {
	const places: Array<Spaces> = Array.from(Array(40));
	return (
		<>
			<div id='board' className='board p-6'>
				{places.map((space, index) => {
					const id: number = index + 1;
					return <GameSquare id={id} key={id} />;
				})}
				<div className='center-board square'>
					<div className='center'>
						<Transactions />
						<Balances />
					</div>
				</div>
			</div>
		</>
	);
};

export default Board;
