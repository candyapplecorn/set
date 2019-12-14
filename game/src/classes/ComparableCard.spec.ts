import ComparableCard from "./ComparableCard";

describe("Comparable Card", () => {
    it.each([
        [0, 0],
        [1, 1],
        [3, 3],
        [18, 18],
        [80, 80],
        [[2, 2, 2, 2], 80],
        [[0], 0],
    ])(`should accept the %o as an initializer value and produce %i`, (...args: any[]) => {
        const comparable = new ComparableCard(args[0] as any);
        expect(comparable.val).toEqual(args[1]);
    });

    it("should be castable to a number", async () => {
        const comparable = new ComparableCard([2, 2, 2, 2]);
        expect(+comparable).toEqual(80);
        expect(comparable.digits).toEqual(expect.arrayContaining([2, 2, 2, 2]));
    });
});
