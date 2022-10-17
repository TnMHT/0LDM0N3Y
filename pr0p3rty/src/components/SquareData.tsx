import { SquareType } from "./SquareType";

interface SquareConfigData {
	readonly type: SquareType;
}

const SquareConfigData = new Map<number, SquareConfigData>();
SquareConfigData.set(1, { type: SquareType.Go });
SquareConfigData.set(2, { type: SquareType.Property });
SquareConfigData.set(3, { type: SquareType.CommunityChest });
SquareConfigData.set(4, { type: SquareType.Property });
SquareConfigData.set(5, { type: SquareType.Tax });
SquareConfigData.set(6, { type: SquareType.Railroad });
SquareConfigData.set(7, { type: SquareType.Property });
SquareConfigData.set(8, { type: SquareType.Chance });
SquareConfigData.set(9, { type: SquareType.Property });
SquareConfigData.set(10, { type: SquareType.Property });
SquareConfigData.set(11, { type: SquareType.Jail });
SquareConfigData.set(12, { type: SquareType.Property });
SquareConfigData.set(13, { type: SquareType.Utility });
SquareConfigData.set(14, { type: SquareType.Property });
SquareConfigData.set(15, { type: SquareType.Property });
SquareConfigData.set(16, { type: SquareType.Railroad });
SquareConfigData.set(17, { type: SquareType.Property });
SquareConfigData.set(18, { type: SquareType.CommunityChest });
SquareConfigData.set(19, { type: SquareType.Property });
SquareConfigData.set(20, { type: SquareType.Property });
SquareConfigData.set(21, { type: SquareType.FreeParking });
SquareConfigData.set(22, { type: SquareType.Property });
SquareConfigData.set(23, { type: SquareType.Chance });
SquareConfigData.set(24, { type: SquareType.Property });
SquareConfigData.set(25, { type: SquareType.Property });
SquareConfigData.set(26, { type: SquareType.Railroad });
SquareConfigData.set(27, { type: SquareType.Property });
SquareConfigData.set(28, { type: SquareType.Property });
SquareConfigData.set(29, { type: SquareType.Utility });
SquareConfigData.set(30, { type: SquareType.Property });
SquareConfigData.set(31, { type: SquareType.GoToJail });
SquareConfigData.set(32, { type: SquareType.Property });
SquareConfigData.set(33, { type: SquareType.Property });
SquareConfigData.set(34, { type: SquareType.CommunityChest });
SquareConfigData.set(35, { type: SquareType.Property });
SquareConfigData.set(36, { type: SquareType.Railroad });
SquareConfigData.set(37, { type: SquareType.Chance });
SquareConfigData.set(38, { type: SquareType.Property });
SquareConfigData.set(39, { type: SquareType.Tax });
SquareConfigData.set(40, { type: SquareType.Property });

export { SquareConfigData };
