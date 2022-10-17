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
			<div id='board'>
				<div className='places'>
					{places.map((space, index) => {
						const id: number = index + 1;
						return <GameSquare id={id} key={id} />;
					})}
					<div className='center'></div>
				</div>
			</div>
		</>
	);
};

export default Board;
