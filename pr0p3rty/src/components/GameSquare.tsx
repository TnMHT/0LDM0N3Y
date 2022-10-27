import React from "react";
import { SquareConfigData } from "./SquareData";
import SquareDetails from "./SquareDetails";
import { SquareType } from "./SquareType";
import { BoardSection } from "./BoardSection";

interface Square {
	id: number;
}

const GameSquare: React.FC<Square> = ({ id }) => {
	const section: BoardSection = SquareConfigData.get(id)?.section!;
	const squareType: SquareType = SquareConfigData.get(id)?.type!;

	const sectionMap = new Map<BoardSection, string>([
		[BoardSection.Top, "top"],
		[BoardSection.Right, "right"],
		[BoardSection.Left, "left"],
		[BoardSection.Bottom, "bottom"],
	]);

	const squareTypeClass = new Map<SquareType, string>([
		[SquareType.Go, "GO"],
		[SquareType.Property, "PROPERTY"],
		[SquareType.Chance, "CHANCE"],
		[SquareType.Tax, "TAX"],
		[SquareType.Jail, "JAIL"],
		[SquareType.GoToJail, "GO-TO-JAIL"],
		[SquareType.CommunityChest, "COMMUNITY-CHEST"],
		[SquareType.Utility, "UTILITY"],
		[SquareType.Railroad, "RAILROAD"],
		[SquareType.FreeParking, "FREE-PARKING"],
	]);

	const getContainerClassName = () => {
		return "container container-" + sectionMap.get(section);
	};
	const getSquareClassName = () => {
		return "square " + squareTypeClass.get(squareType);
	};

	const getSquareId = () => {
		return "game-square-" + id;
	};

	return (
		<div className='container bg-white border border-gray-200 shadow-md hover:bg-gray-100 rounded-xl p-2'>
			<div className={getSquareClassName()} id={getSquareId()}>
				<div className={getContainerClassName()}>
					<SquareDetails id={id} />
				</div>
			</div>
		</div>
	);
};

export default GameSquare;
