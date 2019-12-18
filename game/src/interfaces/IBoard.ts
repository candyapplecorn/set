import IComparableCard from "./IComparableCard";
import IDeck from "./IDeck";

export default interface IBoard {
    zone: IComparableCard[];
    deck: IDeck;
    ensureXManyCardsInZone(x: number): boolean;
    removeSet(set: IComparableCard[]): boolean;
    addXCards(x?: number): boolean;
}
