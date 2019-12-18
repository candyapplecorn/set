import { BASE } from "../constants/set";
import ICard from "../interfaces/ICard";
import IComparableCard from "../interfaces/IComparableCard";
import Card from "./Card";
import NumberRepresentation from "./NumberRepresentation";

export default class ComparableCard extends Card implements IComparableCard {

    public val: number;
    public digits: number[];

    constructor(num: ICard | number | number[], base = BASE) {
        super(num);
        const numberRepresentation = new NumberRepresentation(num, base);
        this.digits = numberRepresentation.digits;
        this.val = numberRepresentation.val;
    }

    public valueOf() { return this.val; }
}
