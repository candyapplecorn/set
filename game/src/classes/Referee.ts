import { BASE } from "../constants/set";
import IComparableCard from "../interfaces/IComparableCard";
import IReferee from "../interfaces/IReferee";
import Matrix from "./Matrix";

export default class Referee implements IReferee {
    public isASet(cards: IComparableCard[]): boolean {
        if (cards.length !== BASE) { return false; }

        const digits: number[][] = cards.map((c) => c.digits);

        const sums: number[] = Matrix.matrixSum(digits);

        return sums.every((sum) => sum % BASE === 0);
    }
}
