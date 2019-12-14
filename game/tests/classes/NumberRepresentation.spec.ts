import NumberRepresentation from "../../src/classes/NumberRepresentation";

const toDigitTestCases = [
    [10, 2, [1, 0, 1, 0]],
    [8, 2, [1, 0, 0, 0]],
    [2, 2, [1, 0]],
    [3, 3, [1, 0]],
    [9, 3, [1, 0, 0]],
    [18, 3, [2, 0, 0]],
    [19, 3, [2, 0, 1]],
    [81, 3, [1, 0, 0, 0, 0]],
];

describe("NumberRepresentation", () => {
    describe("Converting a number in a base to its digits", () => {
        it.each(toDigitTestCases)(`should convert %i in base %i to %o`, (...args: any[]) => {
            expect(new NumberRepresentation(args[0] as number, args[1] as number).digits).toEqual(args[2]);
        });
    });

    describe("Converting digits to a number in a base", () => {
        it.each(toDigitTestCases)(`should convert %o in base %i to %i`, (...args: any[]) => {
            expect(new NumberRepresentation(args[2] as number[], args[1] as number).val).toEqual(args[0]);
        });
    });
});
