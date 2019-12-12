import ATTRIBUTES from '../constants/card';
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
        const sets = [];

        for (let color = 0; color < 3; color++)
            for (let shape = 0; shape < 3; shape++)
                for (let count = 0; count < 3; count++)
                    for (let fill = 0; fill < 3; fill++)
                        sets.push([color, shape, count, fill]);

        return sets.map(([color, shape, count, fill]) => {
            return new Card({
                color: Object.keys(ATTRIBUTES.COLORS)[color],
                shape: Object.keys(ATTRIBUTES.SHAPES)[shape],
                count: Object.keys(ATTRIBUTES.COUNTS)[count],
                fill: Object.keys(ATTRIBUTES.FILLS)[fill],
            })
        });
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
