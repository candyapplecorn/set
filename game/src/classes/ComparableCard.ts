import ICard, { IComparableCard } from "../interfaces/ICard";
import INumberRepresentation from "../interfaces/INumberRepresentation";
import NumberRepresentation from "./NumberRepresentation";

export default class ComparableCard
    extends
        NumberRepresentation
    implements
        ICard, IComparableCard, INumberRepresentation {}
