import { BASE, NUM_CHARACTERISTICS, TOTAL_CARDS_IN_GAME } from "../../src/constants/set";
import ICard from "../../src/interfaces/ICard";
import IDeck from "../../src/interfaces/IDeck";
import Deck from "../../src/classes/Deck";
import IComparableCard from "../../src/interfaces/IComparableCard";

describe("Deck", () => {
    let deck: IDeck;

    beforeEach(() => {
        deck = new Deck();
    });

    it(`should have a list of ${TOTAL_CARDS_IN_GAME} cards`, async () => {
        expect(deck.cards).toHaveLength(Math.pow(BASE, NUM_CHARACTERISTICS));
    });

    it('should have four digits for every card', async () => {
        expect(deck.cards.every((card: IComparableCard) => card.digits.length === 4)).toBeTruthy();
        const expectedNums = [];
        for (let i = 0; i < 80; i++) {
            expectedNums.push(i);
        }
        const nums = deck.cards.map(c => c.val);
        expect(nums).toEqual(expect.arrayContaining(expectedNums));
    });

    describe("hit", () => {
        describe("When not passing a number to hit", () => {
            it("should hit one card.", async () => {
                const cards: ICard[] = deck.hit();
                expect(cards).toHaveLength(1);
            });
        });
        it("should let the user draw 3 cards", () => {
            const numToHit = 3;
            const cards = deck.hit(numToHit);
            expect(cards.length + deck.cards.length).toEqual(TOTAL_CARDS_IN_GAME);
            expect(cards.length).toEqual(numToHit);
        });
        it("should let the user draw 12 cards", () => {
            const numToHit = 12;
            const cards = deck.hit(numToHit);
            expect(cards.length + deck.cards.length).toEqual(TOTAL_CARDS_IN_GAME);
            expect(cards.length).toEqual(numToHit);
        });
        describe("When the deck is empty", () => {
            it("should not allow the user to draw any cards", async () => {
                deck.hit(deck.cards.length);
                expect(deck.cards).toHaveLength(0);
                expect(deck.hit()).toHaveLength(0);
            });
        });
        describe("When taking more cards than there are left", () => {
            it("should take all the remaining cards", async () => {
                const numToHit = 12;
                deck.hit(deck.cards.length - numToHit / 2);
                expect(deck.cards).toHaveLength(numToHit / 2);
                expect(deck.hit(numToHit)).toHaveLength(numToHit / 2);
            });
        });
    });
});
