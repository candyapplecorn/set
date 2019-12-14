import { DEFAULT_NUM_ACTIVE_CARDS as twelve } from "../constants/board";
import Board from "./Board";
import Deck from "./Deck";

describe("Set Game Board", () => {
    let gameBoard: Board;

    beforeEach(() => {
        gameBoard = new Board();
    });

    it("should initialize with a deck of cards", async () => {
        expect(gameBoard.deck).toBeTruthy();
        expect(gameBoard.deck.cards).toHaveLength(81);
    });

    it("should accept a deck of cards upon initialization", async () => {
        const aNewDeck = new Deck();
        const aNewGameBoard = new Board(aNewDeck);
        expect(aNewGameBoard.deck).toEqual(aNewDeck);
    });

    it("should have a place for cards to be displayed", async () => {
        expect("zone" in gameBoard).toBeTruthy();
    });

    it("should be able to fill its card zone with twelve cards", async () => {
        gameBoard.zone.push(...gameBoard.deck.hit(twelve));
        expect(gameBoard.zone).toHaveLength(twelve);
    });

    it("should be able to fill its card zone with fifteen cards", async () => {
        gameBoard.zone.push(...gameBoard.deck.hit(15));
        expect(gameBoard.zone).toHaveLength(15);
    });

    describe("Ensure X Many Cards in Zone", () => {
        it("should fill an empty zone up to the amount requested", async () => {
            const beforeLength = gameBoard.deck.cards.length;
            gameBoard.ensureXManyCardsInZone(twelve);
            expect(gameBoard.zone).toHaveLength(twelve);
            expect(gameBoard.deck.cards).toHaveLength(beforeLength - twelve);
        });

        it("should return true when it can fill the zone with the amount requested", async () => {
            expect(gameBoard.ensureXManyCardsInZone(twelve)).toEqual(true);
        });

        it("should return false when unable to fill the zone with the amount requested", async () => {
            gameBoard.deck.hit(77);
            expect(gameBoard.ensureXManyCardsInZone(twelve)).toEqual(false);
            expect(gameBoard.zone).toHaveLength(81 - 77);
        });
    });
});
