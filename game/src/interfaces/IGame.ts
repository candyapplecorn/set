import IBoard from "./IBoard";
import IPlayer from "./IPlayer";

export default interface IGame {
    board: IBoard;
    players: IPlayer[];
    referee: IPlayer;
}
