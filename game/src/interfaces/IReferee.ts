import IComparableCard from "./IComparableCard";

export default interface IReferee {
    isASet: (cards: IComparableCard[]) => boolean;
}
