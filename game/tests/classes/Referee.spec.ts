import IReferee from "../../src/interfaces/IReferee";
import IBoard from "../../src/interfaces/IBoard";
import Referee from "../../src/classes/Referee";
import Board from "../../src/classes/Board";
import ComparableCard from "../../src/classes/ComparableCard";

describe('Referee', () => {
    let referee: IReferee;
    let board: IBoard;

    beforeEach(() => {
        board = new Board();
        referee = new Referee();
    });

    it.each([
        [true, [[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2]]],
        [true, [[0, 1, 2, 0], [2, 1, 1, 2], [1, 1, 0, 1]]],
        [false, [[0, 1, 2, 0], [2, 2, 0, 2], [1, 1, 0, 1]]],
    ])('should know that it is %s that %o is a set', async (...args: any[]) => {
        const expected: boolean = args[0];
        const lists: number[][] = args[1];

        expect(
            referee.isASet(
                lists.map(l => new ComparableCard(l))
            )
        ).toBe(expected);
    });
});
