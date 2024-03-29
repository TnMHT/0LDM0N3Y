interface Data {
	name: string;
	color: string;
	place: number;
	// REMOVE OPTIONALITY LATER
	ticker: string;
	buyPrice: number;
	rent: number;
	mortgageValue: number;
	house1: number;
	house2: number;
	house3: number;
	house4: number;
	hotel: number;
	houseCost: number;
	hotelCost: number;
}
export const PropertyData = new Map<number, Data>();

const propertyDetails: Data[] = [
	{
		place: 2,
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
		place: 4,
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
		place: 7,
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
		place: 9,
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
		place: 10,
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
		place: 12,
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
		place: 14,
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
		place: 15,
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
		place: 17,
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
		place: 19,
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
		place: 20,
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
		place: 22,
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
		place: 24,
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
		place: 25,
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
		place: 27,
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
		place: 28,
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
		place: 30,
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
		place: 32,
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
		place: 33,
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
		place: 35,
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
		place: 38,
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
		place: 40,
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

// SETTING PROPERTY DETAILS TO PLACE ON BOARD
for (let i = 0; i < propertyDetails.length; i++) {
	PropertyData.set(propertyDetails[i].place, propertyDetails[i]);
}
