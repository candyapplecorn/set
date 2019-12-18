import IComparableCard from "./IComparableCard";
import IReferee from "./IReferee";

export default interface IPlayer extends IReferee {
    zone: IComparableCard[];
    sets: IComparableCard[][];
    attemptToClaimSet: (set: IComparableCard[]) => boolean;
    scanZone: (cards: IComparableCard[]) => void;
    lookForSets: (cards?: IComparableCard[]) => void;
    claimASet: (attemptToClaimSet?: (set: IComparableCard[]) => boolean) => boolean;
}
