import IComparableCard from "./IComparableCard";

export default interface IDeck {
    cards: IComparableCard[];
    hit: (num?: number) => IComparableCard[];
    generateDeck: () => IComparableCard[];
}
