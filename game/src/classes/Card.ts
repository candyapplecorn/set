import ICard from "../interfaces/ICard";

export default class Card implements ICard {
    public color: number;
    public count: number;
    public fill: number;
    public shape: number;

    constructor(card: ICard) {
        this.color = card.color;
        this.count = card.count;
        this.fill = card.fill;
        this.shape = card.shape;
    }
}
