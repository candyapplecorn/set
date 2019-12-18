import { BASE } from "../constants/set";
import IBoard from "../interfaces/IBoard";
import IComparableCard from "../interfaces/IComparableCard";
import ComparableCard from "./ComparableCard";
import Deck from "./Deck";
import Matrix from "./Matrix";

export default class Board implements IBoard {
    public deck: Deck;
    public zone: IComparableCard[];

    constructor(deck: Deck = new Deck()) {
        this.deck = deck;
        this.zone = [];
    }

    public ensureXManyCardsInZone(x: number): boolean {
        const amountToAdd: number = x - this.zone.length;
        if (amountToAdd > 0) {
            this.zone.push(...this.deck.hit(amountToAdd));
        }
        return this.zone.length >= x;
    }

    public addXCards(x: number = BASE) {
        return this.ensureXManyCardsInZone(this.zone.length + x);
    }

    public removeSet(set: IComparableCard[]): boolean {
        const mapToVals = (cards: IComparableCard[]) => cards.map((c) => c.val);
        const previousLength = this.zone.length;
        this.zone = Matrix
            .matrixSubtraction(mapToVals(this.zone), mapToVals(set))
            .map((num: number) => {
                return new ComparableCard(num);
            });

        return previousLength === this.zone.length + BASE;
    }
}
