import { BASE } from "../constants/set";
import ICard from "../interfaces/ICard";
import NumberRepresentation from "./NumberRepresentation";

export default class Card implements ICard {

    public static getCardFromInterface({ color, count, fill, shape }: ICard): ICard {
        return { color, count, fill, shape };
    }

    public static getCardFromDigits([color, count, fill, shape]: number[]): ICard {
        return { color, count, fill, shape };
    }

    public static getCardFromNumber(num: number, base: number = BASE): ICard {
        const [color, count, fill, shape]: number[] = NumberRepresentation.zeroToLength(
            NumberRepresentation.numberToDigits(num, base),
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
            ({ color, count, fill, shape } = Card.getCardFromDigits(
                NumberRepresentation.zeroToLength(card) as number[])
            );
        } else {
            ({ color, count, fill, shape } = Card.getCardFromInterface(card as ICard));
        }

        this.color = color;
        this.count = count;
        this.fill = fill;
        this.shape = shape;
    }
}
