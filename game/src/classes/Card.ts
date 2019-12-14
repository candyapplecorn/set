import { BASE } from "../constants/set";
import ICard from "../interfaces/ICard";
import { toDigits, zeroToLength } from "./Base";

export default class Card implements ICard {

    public static fromICard({ color, count, fill, shape }: ICard): ICard {
        return { color, count, fill, shape };
    }

    public static fromDigits([color, count, fill, shape]: number[]): ICard {
        return { color, count, fill, shape };
    }

    public static fromNumber(num: number, base: number = BASE): ICard {
        const [color, count, fill, shape]: number[] = zeroToLength(toDigits(num, base));
        return { color, count, fill, shape };
    }

    public color: number;
    public count: number;
    public fill: number;
    public shape: number;

    constructor(card: ICard | number | number[]) {
        let color: number;
        let count: number;
        let fill: number;
        let shape: number;

        if (Number.isInteger(card as number) && card >= 0) {
            ({ color, count, fill, shape } = Card.fromNumber(card as number));
        } else if (Array.isArray(card)) {
            ({ color, count, fill, shape } = Card.fromDigits(zeroToLength(card) as number[]));
        } else {
            ({ color, count, fill, shape } = Card.fromICard(card as ICard));
        }

        this.color = color;
        this.count = count;
        this.fill = fill;
        this.shape = shape;
    }
}
