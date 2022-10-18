interface Data {
	name: string;
	// REMOVE OPTIONALITY LATER
	ticker?: string;
	buyPrice?: number;
	rent?: number;
	mortgageValue?: number;
	house1?: number;
	house2?: number;
	house3?: number;
	house4?: number;
	hotek?: number;
	houseCost?: number;
	hotelCost?: number;
}

export const PropertyData = new Map<number, Data>();

// NOT BY ID BUT PLACE ON THE BOARD

// COLOR 1
PropertyData.set(2, { name: "Bitcoin" });
PropertyData.set(4, { name: "Ethereum" });
// COLOR 2
PropertyData.set(7, { name: "DogeCoin" });
PropertyData.set(9, { name: "Cardano" });
PropertyData.set(10, { name: "XRP" });
// COLOR 3
PropertyData.set(12, { name: "Tether" });
PropertyData.set(14, { name: "Solana" });
PropertyData.set(15, { name: "Polygon" });
// COLOR 4
PropertyData.set(17, { name: "Polkadot" });
PropertyData.set(19, { name: "USD Coin" });
PropertyData.set(20, { name: "Shiba Inu" });
// COLOR 5
PropertyData.set(22, { name: "Avalanche" });
PropertyData.set(24, { name: "Chainlink" });
PropertyData.set(25, { name: "Bitcoin Cash" });
// COLOR 6
PropertyData.set(27, { name: "Tezos" });
PropertyData.set(28, { name: "Decentraland" });
PropertyData.set(30, { name: "Theta" });
// COLOR 7
PropertyData.set(32, { name: "Binance" });
PropertyData.set(33, { name: "Dai" });
PropertyData.set(35, { name: "Uniswap" });
// COLOR 8
PropertyData.set(38, { name: "Litecoin" });
PropertyData.set(40, { name: "Tron" });
