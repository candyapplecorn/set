import { board } from "../interfaces/board";
import Deck from "./Deck";
import Card from "./Card";

export default class Board implements board {
    deck: Deck;
    zone: Card[];

    constructor(deck: Deck = new Deck()) {
        this.deck = deck;
        this.zone = [];
    }

    ensureXManyCardsInZone(x: number): boolean {
        const amountToAdd: number = x - this.zone.length;
        this.zone.push(...this.deck.hit(amountToAdd));
        return this.zone.length === x;
    }
}
