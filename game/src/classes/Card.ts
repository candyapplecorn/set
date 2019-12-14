import { BASE, NUM_CHARACTERISTICS } from "../constants/set";
import ICard from "../interfaces/ICard";

function toDigits(n: number, base: number): number[] {
    const digits: number[] = [];
    while (n > 0) {
        digits.unshift(n % base);
        n = Math.floor(n / base);
    }
    return digits;
}

function fromDigits(digits: number[], base: number): number {
    let n = 0;
    digits.forEach((digit) => n = base * n + digit);
    return n;
}

function zeroToLength(digits: number[], length: number = NUM_CHARACTERISTICS): number[] {
    return digits.join("").padStart(length, "0").split("").map(Number);
}

export default class Card implements ICard {

    public static getCardFromInterface({ color, count, fill, shape }: ICard): ICard {
        return { color, count, fill, shape };
    }

    public static getCardFromDigits([color, count, fill, shape]: number[]): ICard {
        return { color, count, fill, shape };
    }

    public static getCardFromNumber(num: number, base: number = BASE): ICard {
        const [color, count, fill, shape]: number[] = zeroToLength(
            toDigits(num, base),
        );

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
            ({ color, count, fill, shape } = Card.getCardFromNumber(card as number));
        } else if (Array.isArray(card)) {
            ({ color, count, fill, shape } = Card.getCardFromDigits(zeroToLength(card) as number[]));
        } else {
            ({ color, count, fill, shape } = Card.getCardFromInterface(card as ICard));
        }

        this.color = color;
        this.count = count;
        this.fill = fill;
        this.shape = shape;
    }
}
