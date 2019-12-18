import { BASE, NUM_CHARACTERISTICS } from "../constants/set";
import ICard from "../interfaces/ICard";
import INumberRepresentation from "../interfaces/INumberRepresentation";

export default class NumberRepresentation implements INumberRepresentation {

    public static numberToDigits(n: number, base: number): number[] {
        const digits: number[] = [];
        while (n > 0) {
            digits.unshift(n % base);
            n = Math.floor(n / base);
        }
        return digits;
    }

    public static numberFromDigits(digits: number[], base: number): number {
        let n = 0;
        digits.forEach((digit) => n = base * n + digit);
        return n;
    }

    public static zeroToLength(digits: number[], length: number = NUM_CHARACTERISTICS): number[] {
        return digits.join("").padStart(length, "0").split("").map(Number);
    }
    public val: number;
    public digits: number[];

    constructor(num: ICard | number | number[], base = BASE) {
        if (Number.isInteger(num as number) && num >= 0) {
            this.val = num as number;
            this.digits = NumberRepresentation.zeroToLength(NumberRepresentation.numberToDigits(num as number, base));
        } else if (Array.isArray(num)) {
            this.val = NumberRepresentation.numberFromDigits(num as number[], base);
            this.digits = NumberRepresentation.zeroToLength(num);
        } else {
            const { color, count, fill, shape } = num as ICard;
            this.digits = [color, count, fill, shape];
            this.val = NumberRepresentation.numberFromDigits(this.digits, base);
        }
    }

    public valueOf() {
        return this.val;
    }
}
