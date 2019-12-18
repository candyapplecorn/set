import IComparableCard from "../interfaces/IComparableCard";
import IPlayer from "../interfaces/IPlayer";
import IReferee from "../interfaces/IReferee";
import Matrix from "./Matrix";
import Referee from "./Referee";

export default class Player extends Referee implements IPlayer, IReferee {

    public static twoSetsShareACard(setA: IComparableCard[], setB: IComparableCard[]): boolean {
        const valsA: number[] = setA.map((icc) => icc.val);
        const valsB: number[] = setB.map((icc) => icc.val);
        return Matrix.matrixIntersection(valsA, valsB).length > 0;
    }

    public static twoSetsShareAllCards(setA: IComparableCard[], setB: IComparableCard[]): boolean {
        const valsA = setA.map((c) => c.val);
        const valsB = setB.map((c) => c.val);
        return valsA.every((val) => valsB.includes(val));
    }
    public zone: IComparableCard[] = [];
    public sets: IComparableCard[][] = [];
    public attemptToClaimSet: (set: IComparableCard[]) => boolean;

    constructor(attemptToClaimSet: ((set: IComparableCard[]) => boolean) = (() => false)) {
        super();
        this.attemptToClaimSet = attemptToClaimSet;
    }

    public claimASet(attemptToClaimSet: ((set: IComparableCard[]) => boolean) = this.attemptToClaimSet): boolean {
        if (this.sets.length === 0) { return false; }

        const aSet: IComparableCard[] = this.sets[0];
        const accepted = attemptToClaimSet(aSet);

        if (accepted) {
            this.sets = this.removeIntersectingSets(this.sets, aSet);
        }

        return accepted;
    }

    public lookForSets(cards: IComparableCard[] = this.zone): void {
        for (let i = 0; i < cards.length; i++) {
            for (let j = i + 1; j < cards.length; j++) {
                for (let k = j + 1; k < cards.length; k++) {
                    this.trySet(cards, i, j, k);
                }
            }
        }
    }

    public scanZone(cards: IComparableCard[]): void { this.zone = cards; }

    private trySet(cards: IComparableCard[], i: number, j: number, k: number) {
        const potentialSet: IComparableCard[] = [cards[i], cards[j], cards[k]];
        if (this.isASet(potentialSet) && !this.hasSet(potentialSet, this.sets)) {
            this.sets.push(potentialSet);
        }
    }

    private removeIntersectingSets(sets: IComparableCard[][], setToRemove: IComparableCard[]): IComparableCard[][] {
        return sets.filter((set: IComparableCard[]) => {
            return !Player.twoSetsShareACard(set, setToRemove);
        });
    }

    private hasSet(set: IComparableCard[], sets: IComparableCard[][] = this.sets): boolean {
        return sets.some((recordedSet) => Player.twoSetsShareAllCards(recordedSet, set));
    }
}
