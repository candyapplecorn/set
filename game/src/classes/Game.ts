import IBoard from "../interfaces/IBoard";
import IComparableCard from "../interfaces/IComparableCard";
import IGame from "../interfaces/IGame";
import IPlayer from "../interfaces/IPlayer";
import Board from "./Board";
import Player from "./Player";

export default class Game implements IGame {
    public board: IBoard;
    public players: IPlayer[];
    public referee: IPlayer;

    constructor(players: IPlayer[] = [], board: IBoard = new Board(), referee: Player = new Player()) {
        this.board = board;
        this.referee = referee;
        this.players = players;

        this.registerPlayers(this.players);
    }

    public addPlayer(player: Player): void {
        if (!this.players.includes(player)) {
            this.players.push(player);
            this.registerPlayers([player]);
        }
    }

    private registerPlayers(players: IPlayer[] = this.players): void {
        players.forEach((player) => {
            player.attemptToClaimSet = (set: IComparableCard[]): boolean => {
                return this.board.removeSet(set);
            };
        });
    }

    private get gameOver(): boolean {
        const deckIsEmpty = this.board.deck.cards.length === 0;
        const noSetsInZone = true;
        return deckIsEmpty && noSetsInZone; // && this.referee.noSetsInZone(zone)
    }

    private get thereArePlayers(): boolean { return this.players.length > 0; }

    protected get canPlay(): boolean {
        return this.thereArePlayers && !this.gameOver;
    }
}
