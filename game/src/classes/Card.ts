import card from "../interfaces/card";

export default class Card implements card {
    color: number;
    shape: number;
    count: number;
    fill: number;

    constructor(card: card) {
        this.color = card.color;
        this.shape = card.shape;
        this.count = card.count;
        this.fill = card.fill;
    }
}
