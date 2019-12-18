import { DEFAULT_NUM_ACTIVE_CARDS } from "../constants/board";
import { BASE } from "../constants/set";
import IBoard from "../interfaces/IBoard";
import IGame from "../interfaces/IGame";
import IPlayer from "../interfaces/IPlayer";
import Board from "./Board";
import Game from "./Game";
import Player from "./Player";

export default class SelfPlayingGame extends Game implements IGame {
    constructor(players: IPlayer[] = [], board: IBoard = new Board(), referee: Player = new Player()) {
        super(players, board, referee);
        if (players.length === 0) {
            this.addPlayer(new Player());
        }
    }

    public start(): void {
        return this.maintain();
    }

    private maintain(): void {
        while (this.canPlay) {
            this.gameLoop();
        }
    }

    private gameLoop(): void {
        const player: IPlayer = this.players[0];
        const board: IBoard = this.board;

        board.ensureXManyCardsInZone(DEFAULT_NUM_ACTIVE_CARDS);

        player.scanZone(board.zone);
        player.lookForSets();

        const wasAbletoClaimASet: boolean = player.claimASet();

        if (!wasAbletoClaimASet) {
            board.addXCards(BASE);
        }
    }
}
