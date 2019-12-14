import ICard from "./ICard";

export default interface IDeck {
    cards: ICard[];
    hit: (num?: number) => ICard[];
    generateDeck: () => ICard[];
}
