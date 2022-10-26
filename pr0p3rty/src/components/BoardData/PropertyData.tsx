interface Data {
	name: string;
	color: string;
	place?: number;
	// REMOVE OPTIONALITY LATER
	ticker?: string;
	buyPrice?: number;
	rent?: number;
	mortgageValue?: number;
	house1?: number;
	house2?: number;
	house3?: number;
	house4?: number;
	hotel?: number;
	houseCost?: number;
	hotelCost?: number;
}
export const colorMap = new Map<number, string>([
	[1, "BLUE"],
	[2, "GREEN"],
	[3, "BABY BLUE"],
	[4, "YELLOW"],
	[5, "RED"],
	[6, "BROWN"],
	[7, "ORANGE"],
	[8, "PINK"],
]);

export const PropertyData = new Map<number, Data>();

// NOT BY ID BUT PLACE ON THE BOARD

// COLOR 1
PropertyData.set(2, { name: "Bitcoin", color: 1 });
PropertyData.set(4, { name: "Ethereum", color: 1 });
// COLOR 2
PropertyData.set(7, { name: "DogeCoin", color: 2 });
PropertyData.set(9, { name: "Cardano", color: 2 });
PropertyData.set(10, { name: "XRP", color: 2 });
// COLOR 3
PropertyData.set(12, { name: "Tether", color: 3 });
PropertyData.set(14, { name: "Solana", color: 3 });
PropertyData.set(15, { name: "Polygon", color: 3 });
// COLOR 4
PropertyData.set(17, { name: "Polkadot", color: 4 });
PropertyData.set(19, { name: "USD Coin", color: 4 });
PropertyData.set(20, { name: "Shiba Inu", color: 4 });
// COLOR 5
PropertyData.set(22, { name: "Avalanche", color: 5 });
PropertyData.set(24, { name: "Chainlink", color: 5 });
PropertyData.set(25, { name: "Bitcoin Cash", color: 5 });
// COLOR 6
PropertyData.set(27, { name: "Tezos", color: 6 });
PropertyData.set(28, { name: "Decentraland", color: 6 });
PropertyData.set(30, { name: "Theta", color: 6 });
// COLOR 7
PropertyData.set(32, { name: "Binance", color: 7 });
PropertyData.set(33, { name: "Dai", color: 7 });
PropertyData.set(35, { name: "Uniswap", color: 7 });
// COLOR 8
PropertyData.set(38, { name: "Litecoin", color: 8 });
PropertyData.set(40, { name: "Tron", color: 8 });

const propertyDetails: Data[] = [
	{
		name: "Bitcoin",
		color: "BLUE",
		ticker: "BTC",
		buyPrice: 400,
		rent: 50,
		mortgageValue: 200,
		house1: 200,
		house2: 600,
		house3: 1400,
		house4: 1700,
		hotel: 2000,
		houseCost: 200,
		hotelCost: 200,
	},
	{
		name: "Ethereum",
		color: "BLUE",
		ticker: "BTC",
		buyPrice: 400,
		rent: 35,
		mortgageValue: 175,
		house1: 175,
		house2: 500,
		house3: 1100,
		house4: 1300,
		hotel: 1500,
		houseCost: 200,
		hotelCost: 200,
	},
	{
		name: "Dogecoin",
		color: "GREEN",
		ticker: "BTC",
		buyPrice: 400,
		rent: 26,
		mortgageValue: 150,
		house1: 130,
		house2: 390,
		house3: 900,
		house4: 1100,
		hotel: 1275,
		houseCost: 200,
		hotelCost: 200,
	},
	{
		name: "Cardano",
		color: "GREEN",
		ticker: "BTC",
		buyPrice: 400,
		rent: 26,
		mortgageValue: 150,
		house1: 130,
		house2: 390,
		house3: 900,
		house4: 1100,
		hotel: 1275,
		houseCost: 200,
		hotelCost: 200,
	},
	{
		name: "Ripple",
		color: "GREEN",
		ticker: "XRP",
		buyPrice: 400,
		rent: 28,
		mortgageValue: 160,
		house1: 150,
		house2: 450,
		house3: 1000,
		house4: 1200,
		hotel: 1400,
		houseCost: 200,
		hotelCost: 200,
	},
	{
		name: "Tether",
		color: "BABY BLUE",
		ticker: "BTC",
		buyPrice: 320,
		rent: 6,
		mortgageValue: 50,
		house1: 30,
		house2: 90,
		house3: 270,
		house4: 400,
		hotel: 550,
		houseCost: 50,
		hotelCost: 50,
	},
	{
		name: "Solana",
		color: "BABY BLUE",
		ticker: "SOL",
		buyPrice: 300,
		rent: 8,
		mortgageValue: 60,
		house1: 40,
		house2: 100,
		house3: 300,
		house4: 450,
		hotel: 600,
		houseCost: 50,
		hotelCost: 50,
	},
	{
		name: "Polygon",
		color: "BABY BLUE",
		ticker: "BTC",
		buyPrice: 300,
		rent: 6,
		mortgageValue: 50,
		house1: 30,
		house2: 90,
		house3: 270,
		house4: 400,
		hotel: 550,
		houseCost: 50,
		hotelCost: 50,
	},
	{
		name: "Polkadot",
		color: "YELLOW",
		ticker: "BTC",
		buyPrice: 200,
		rent: 22,
		mortgageValue: 130,
		house1: 110,
		house2: 330,
		house3: 800,
		house4: 975,
		hotel: 1150,
		houseCost: 150,
		hotelCost: 150,
	},
	{
		name: "USD Coin",
		color: "YELLOW",
		ticker: "BTC",
		buyPrice: 180,
		rent: 24,
		mortgageValue: 140,
		house1: 120,
		house2: 360,
		house3: 850,
		house4: 1025,
		hotel: 1200,
		houseCost: 150,
		hotelCost: 150,
	},
	{
		name: "Shiba Inu",
		color: "YELLOW",
		ticker: "BTC",
		buyPrice: 180,
		rent: 22,
		mortgageValue: 130,
		house1: 110,
		house2: 330,
		house3: 800,
		house4: 975,
		hotel: 1150,
		houseCost: 150,
		hotelCost: 150,
	},
	{
		name: "Avalanche",
		color: "RED",
		ticker: "BTC",
		buyPrice: 280,
		rent: 18,
		mortgageValue: 110,
		house1: 90,
		house2: 250,
		house3: 700,
		house4: 875,
		hotel: 1050,
		houseCost: 150,
		hotelCost: 150,
	},
	{
		name: "Chainlink",
		color: "RED",
		ticker: "BTC",
		buyPrice: 260,
		rent: 20,
		mortgageValue: 120,
		house1: 100,
		house2: 300,
		house3: 750,
		house4: 925,
		hotel: 1100,
		houseCost: 150,
		hotelCost: 150,
	},
	{
		name: "Bitcoin Cash",
		color: "RED",
		ticker: "BTC",
		buyPrice: 260,
		rent: 10,
		mortgageValue: 110,
		house1: 90,
		house2: 250,
		house3: 700,
		house4: 875,
		hotel: 1050,
		houseCost: 150,
		hotelCost: 150,
	},
	{
		name: "Tezos",
		color: "BROWN",
		ticker: "BTC",
		buyPrice: 240,
		rent: 10,
		mortgageValue: 70,
		house1: 50,
		house2: 150,
		house3: 450,
		house4: 625,
		hotel: 750,
		houseCost: 100,
		hotelCost: 100,
	},
	{
		name: "Decentraland",
		color: "BROWN",
		ticker: "BTC",
		buyPrice: 220,
		rent: 12,
		mortgageValue: 80,
		house1: 60,
		house2: 180,
		house3: 500,
		house4: 700,
		hotel: 900,
		houseCost: 100,
		hotelCost: 100,
	},
	{
		name: "Theta",
		color: "BROWN",
		ticker: "BTC",
		buyPrice: 220,
		rent: 10,
		mortgageValue: 70,
		house1: 50,
		house2: 150,
		house3: 450,
		house4: 625,
		hotel: 750,
		houseCost: 100,
		hotelCost: 100,
	},
	{
		name: "Binance",
		color: "ORANGE",
		ticker: "BTC",
		buyPrice: 120,
		rent: 16,
		mortgageValue: 100,
		house1: 80,
		house2: 220,
		house3: 600,
		house4: 800,
		hotel: 1000,
		houseCost: 100,
		hotelCost: 100,
	},
	{
		name: "Dai",
		color: "ORANGE",
		ticker: "BTC",
		buyPrice: 100,
		rent: 14,
		mortgageValue: 90,
		house1: 70,
		house2: 200,
		house3: 550,
		house4: 750,
		hotel: 950,
		houseCost: 100,
		hotelCost: 100,
	},
	{
		name: "Uniswap",
		color: "ORANGE",
		ticker: "BTC",
		buyPrice: 100,
		rent: 14,
		mortgageValue: 90,
		house1: 70,
		house2: 200,
		house3: 550,
		house4: 750,
		hotel: 950,
		houseCost: 100,
		hotelCost: 100,
	},
	{
		name: "Litecoin",
		color: "PINK",
		ticker: "BTC",
		buyPrice: 60,
		rent: 2,
		mortgageValue: 30,
		house1: 10,
		house2: 30,
		house3: 90,
		house4: 160,
		hotel: 250,
		houseCost: 50,
		hotelCost: 50,
	},
	{
		name: "Tron",
		color: "PINK",
		ticker: "BTC",
		buyPrice: 60,
		rent: 4,
		mortgageValue: 30,
		house1: 20,
		house2: 60,
		house3: 180,
		house4: 320,
		hotel: 450,
		houseCost: 50,
		hotelCost: 50,
	},
];
