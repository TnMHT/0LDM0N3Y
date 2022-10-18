import React from "react";
import GameSquare from "./GameSquare";

interface Spaces {
	place: number;
	type: string;
}

const Board: React.FC = () => {
	const places: Array<Spaces> = Array.from(Array(40));
	return (
		<>
			<div id='board' className='board'>
				{places.map((space, index) => {
					const id: number = index + 1;
					return <GameSquare id={id} key={id} />;
				})}
				<div className='center-square square'>
					<div className='center-txt'>
						<a href=''>CENTER</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Board;
