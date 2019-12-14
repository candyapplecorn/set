import card from "./card";

export default interface deck {
    cards: card[]
    hit: (num?: number) => card[]
    generateDeck: () => card[]
}
