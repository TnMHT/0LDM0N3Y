import { BoardSection } from "./BoardSection";
import { SquareType } from "./SquareType";

interface SquareConfigData {
	readonly type: SquareType;
	readonly section: BoardSection;
}

const SquareConfigData = new Map<number, SquareConfigData>();

SquareConfigData.set(1, {
	type: SquareType.Go,
	section: BoardSection.Bottom,
});
SquareConfigData.set(2, {
	type: SquareType.Property,
	section: BoardSection.Bottom,
});
SquareConfigData.set(3, {
	type: SquareType.CommunityChest,
	section: BoardSection.Bottom,
});
SquareConfigData.set(4, {
	type: SquareType.Property,
	section: BoardSection.Bottom,
});
SquareConfigData.set(5, {
	type: SquareType.Tax,
	section: BoardSection.Bottom,
});
SquareConfigData.set(6, {
	type: SquareType.Railroad,
	section: BoardSection.Bottom,
});
SquareConfigData.set(7, {
	type: SquareType.Property,
	section: BoardSection.Bottom,
});
SquareConfigData.set(8, {
	type: SquareType.Chance,
	section: BoardSection.Bottom,
});
SquareConfigData.set(9, {
	type: SquareType.Property,
	section: BoardSection.Bottom,
});
SquareConfigData.set(10, {
	type: SquareType.Property,
	section: BoardSection.Bottom,
});
SquareConfigData.set(11, {
	type: SquareType.Jail,
	section: BoardSection.Bottom,
});
SquareConfigData.set(12, {
	type: SquareType.Property,
	section: BoardSection.Left,
});
SquareConfigData.set(13, {
	type: SquareType.Utility,
	section: BoardSection.Left,
});
SquareConfigData.set(14, {
	type: SquareType.Property,
	section: BoardSection.Left,
});
SquareConfigData.set(15, {
	type: SquareType.Property,
	section: BoardSection.Left,
});
SquareConfigData.set(16, {
	type: SquareType.Railroad,
	section: BoardSection.Left,
});
SquareConfigData.set(17, {
	type: SquareType.Property,
	section: BoardSection.Left,
});
SquareConfigData.set(18, {
	type: SquareType.CommunityChest,
	section: BoardSection.Left,
});
SquareConfigData.set(19, {
	type: SquareType.Property,
	section: BoardSection.Left,
});
SquareConfigData.set(20, {
	type: SquareType.Property,
	section: BoardSection.Left,
});
SquareConfigData.set(21, {
	type: SquareType.FreeParking,
	section: BoardSection.Top,
});
SquareConfigData.set(22, {
	type: SquareType.Property,
	section: BoardSection.Top,
});
SquareConfigData.set(23, {
	type: SquareType.Chance,
	section: BoardSection.Top,
});
SquareConfigData.set(24, {
	type: SquareType.Property,
	section: BoardSection.Top,
});
SquareConfigData.set(25, {
	type: SquareType.Property,
	section: BoardSection.Top,
});
SquareConfigData.set(26, {
	type: SquareType.Railroad,
	section: BoardSection.Top,
});
SquareConfigData.set(27, {
	type: SquareType.Property,
	section: BoardSection.Top,
});
SquareConfigData.set(28, {
	type: SquareType.Property,
	section: BoardSection.Top,
});
SquareConfigData.set(29, {
	type: SquareType.Utility,
	section: BoardSection.Top,
});
SquareConfigData.set(30, {
	type: SquareType.Property,
	section: BoardSection.Top,
});
SquareConfigData.set(31, {
	type: SquareType.GoToJail,
	section: BoardSection.Top,
});
SquareConfigData.set(32, {
	type: SquareType.Property,
	section: BoardSection.Right,
});
SquareConfigData.set(33, {
	type: SquareType.Property,
	section: BoardSection.Right,
});
SquareConfigData.set(34, {
	type: SquareType.CommunityChest,
	section: BoardSection.Right,
});
SquareConfigData.set(35, {
	type: SquareType.Property,
	section: BoardSection.Right,
});
SquareConfigData.set(36, {
	type: SquareType.Railroad,
	section: BoardSection.Right,
});
SquareConfigData.set(37, {
	type: SquareType.Chance,
	section: BoardSection.Right,
});
SquareConfigData.set(38, {
	type: SquareType.Property,
	section: BoardSection.Right,
});
SquareConfigData.set(39, {
	type: SquareType.Tax,
	section: BoardSection.Right,
});
SquareConfigData.set(40, {
	type: SquareType.Property,
	section: BoardSection.Right,
});

export { SquareConfigData };
