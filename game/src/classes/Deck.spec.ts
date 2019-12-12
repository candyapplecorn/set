import Deck from "./Deck";
import deck from "../interfaces/deck";

describe('Deck', () => {
    let deck: deck;

    beforeEach(() => {
        deck = new Deck();
    });

    it('should have a list of 81 cards', async () => {
        expect(deck.cards).toHaveLength(Math.pow(3, 4));
    });
});
