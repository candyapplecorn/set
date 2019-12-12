import card from "../interfaces/card";
import ATTRIBUTES from "../constants/card";

const c = {
    red: 'red',
    blue: 'blue',
    green: 'green'
}

const red: string = 'red';

// type color = c.red | c.blue | c.green;
// type color = 'RED' | 'BLUE' | 'GREEN';
// type color = ATTRIBUTES.COLORS.RED | 'BLUE' | 'GREEN';

enum dude { a = "a" }
const d: dude = dude.a;
const z: string = d;
const zz: string = dude.a;

const ss: color = 'RED';


export default class Card implements card {
    color: ATTRIBUTES.COLORS;
    shape: ATTRIBUTES.SHAPES;
    count: ATTRIBUTES.COUNTS;
    fill: ATTRIBUTES.FILLS;

    constructor(card: card) {
        this.color = card.color;
        this.shape = card.shape;
        this.count = card.count;
        this.fill = card.fill;
    }
}
