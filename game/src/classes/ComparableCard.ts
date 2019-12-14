import { BASE } from "../constants/set";
import ICard, { IComparableCard } from "../interfaces/ICard";
import { fromDigits } from "./Base";
import Card from "./Card";

export class ComparableCard extends Card implements ICard, IComparableCard {
    public val: number;
    public digits: number[];

    constructor(card: ICard | number | number[], base: number = BASE) {
        super(card as any);
        this.digits = [this.color, this.count, this.fill, this.shape];
        this.val = fromDigits(this.digits, base);
    }

    public valueOf() {
        return this.val;
    }
}
