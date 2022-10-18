import React from "react";
import { SquareType } from "./SquareType";
import PropertySquare from "./Squares/PropertySquare";
import ChanceSquare from "./Squares/ChanceSquare";
import CommunityChestSquare from "./Squares/CommunityChestSquare";
import FreeParkingSquare from "./Squares/FreeParkingSquare";
import GoSquare from "./Squares/GoSquare";
import JailSquare from "./Squares/JailSquare";
import TaxSquare from "./Squares/TaxSquare";
import UtilitySquare from "./Squares/UtilitySquare";
import { SquareConfigData } from "./SquareData";
import RailroadSquare from "./Squares/RailroadSquare";
import GoToJailSquare from "./Squares/GoToJailSquare";

interface Props {
	id: number;
}

const SquareDetails: React.FC<Props> = ({ id }) => {
	const type: SquareType | undefined = SquareConfigData.get(id)?.type;

	const getSquareDetails = () => {
		if (type === SquareType.Go) {
			return <GoSquare id={id} />;
		}
		if (type === SquareType.Chance) {
			return <ChanceSquare id={id} />;
		}
		if (type === SquareType.CommunityChest) {
			return <CommunityChestSquare id={id} />;
		}
		if (type === SquareType.FreeParking) {
			return <FreeParkingSquare id={id} />;
		}
		if (type === SquareType.Railroad) {
			return <RailroadSquare id={id} />;
		}
		if (type === SquareType.Tax) {
			return <TaxSquare id={id} />;
		}
		if (type === SquareType.Jail) {
			return <JailSquare id={id} />;
		}
		if (type === SquareType.GoToJail) {
			return <GoToJailSquare id={id} />;
		}
		if (type === SquareType.Utility) {
			return <UtilitySquare id={id} />;
		}

		return <PropertySquare id={id} />;
	};

	return getSquareDetails();
};

export default SquareDetails;
