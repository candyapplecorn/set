import card from "./card";
import deck from "./deck";

export interface board {
    zone: card[];
    deck: deck;
    ensureXManyCardsInZone: (x: number) => boolean
}
