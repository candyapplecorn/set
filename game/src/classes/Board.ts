import { IBoard } from "../interfaces/IBoard";
import Card from "./Card";
import Deck from "./Deck";

export default class Board implements IBoard {
    public deck: Deck;
    public zone: Card[];

    constructor(deck: Deck = new Deck()) {
        this.deck = deck;
        this.zone = [];
    }

    public ensureXManyCardsInZone(x: number): boolean {
        const amountToAdd: number = x - this.zone.length;
        this.zone.push(...this.deck.hit(amountToAdd));
        return this.zone.length === x;
    }
}
