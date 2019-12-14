import { BASE } from "../constants/set";
import IComparableCard from "../interfaces/IComparableCard";
import IDeck from "../interfaces/IDeck";
import ComparableCard from "./ComparableCard";

export default class Deck implements IDeck {

    public static shuffle<T = IComparableCard>(list: T[]) {
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

    public cards: IComparableCard[];

    constructor() {
        this.cards = this.generateDeck();
        this.cards = Deck.shuffle(this.cards);
    }

    public generateDeck(): IComparableCard[] {
        const sets: number[][] = [];

        for (let color = 0; color < BASE; color++) {
            for (let count = 0; count < BASE; count++) {
                for (let fill = 0; fill < BASE; fill++) {
                    for (let shape = 0; shape < BASE; shape++) {
                        sets.push([color, count, fill, shape]);
                    }
                }
            }
        }

        return sets.map(([color, shape, count, fill]: number[]) =>
            new ComparableCard({ color, shape, count, fill }),
        );
    }

    public hit(num: number = 1): IComparableCard[] {
        if (this.cards.length === 0) { return []; }
        if (num === 1) { return [this.cards.pop() as IComparableCard]; }
        return [this.cards.pop() as IComparableCard, ...this.hit(num - 1)];
    }
}
