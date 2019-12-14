export default interface ICard {
    color: number;
    shape: number;
    count: number;
    fill: number;
}

export interface IComparableCard extends ICard {
    val: number;
    digits: number[];
}
