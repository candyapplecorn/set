import deck from "../interfaces/deck";
import card from "../interfaces/card";
import Card from "./Card";

export default class Deck implements deck {
    cards: card[];

    constructor() {
        this.cards = this.generateDeck();
        this.cards = Deck.shuffle(this.cards);
    }

    generateDeck(): card[] {
        const sets: number[][] = [];

        for (let color = 0; color < 3; color++)
            for (let shape = 0; shape < 3; shape++)
                for (let count = 0; count < 3; count++)
                    for (let fill = 0; fill < 3; fill++)
                        sets.push([color, shape, count, fill]);

        return sets.map(([color, shape, count, fill]: number[]): card =>
            new Card({ color, shape, count, fill })
        );
    }

    hit(num: number = 1): card[] {
        if (this.cards.length === 0) return [];
        if (num === 1) return [this.cards.pop() as card];
        return [this.cards.pop() as card, ...this.hit(num - 1)];
    }

    public static shuffle<T = card>(list: T[]) {
        let currIdx: number = list.length;
        let temp: T;
        let randIdx: number;

        while (currIdx !== 0) {
            randIdx = Math.floor(Math.random() * currIdx);
            currIdx -= 1;

            temp = list[currIdx];
            list[currIdx] = list[randIdx];
            list[randIdx] = temp;
        }

        return list;
    }
}
