import { NUM_CHARACTERISTICS } from "../constants/set";

export function toDigits(n: number, base: number): number[] {
    const digits: number[] = [];
    while (n > 0) {
        digits.unshift(n % base);
        n = Math.floor(n / base);
    }
    return digits;
}

export function fromDigits(digits: number[], base: number): number {
    let n = 0;
    digits.forEach((digit) => n = base * n + digit);
    return n;
}

export function zeroToLength(digits: number[], length: number = NUM_CHARACTERISTICS): number[] {
    return digits.join("").padStart(length, "0").split("").map(Number);
}
