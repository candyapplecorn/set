import SelfPlayingGame from "../../src/classes/SelfPlayingGame";
import { TOTAL_CARDS_IN_GAME } from "../../src/constants/set";
import { DEFAULT_NUM_ACTIVE_CARDS } from "../../src/constants/board";

describe('Self Playing Game', () => {
    let spg: SelfPlayingGame;

    beforeEach(() => {
        spg = new SelfPlayingGame()
    });

    it('should start with an untouched deck', async () => {
        expect(spg.board.deck.cards).toHaveLength(TOTAL_CARDS_IN_GAME);
    });

    it('should be able to play until the deck runs out', async () => {
        spg.start();
        expect(spg.board.deck.cards).toHaveLength(0);
        expect(spg.board.zone.length).toBeLessThanOrEqual(DEFAULT_NUM_ACTIVE_CARDS);
    });
});
