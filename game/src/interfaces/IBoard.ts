import ICard from "./ICard";
import IDeck from "./IDeck";

export interface IBoard {
    zone: ICard[];
    deck: IDeck;
    ensureXManyCardsInZone: (x: number) => boolean;
}
