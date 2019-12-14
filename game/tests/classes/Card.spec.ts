import ATTRIBUTES from "../../src/constants/card";
import ICard from "../../src/interfaces/ICard";
import Card from "../../src/classes/Card";

describe("Card", () => {
    let card: ICard;

    beforeEach(() => {
        card = new Card({
            color: ATTRIBUTES.COLORS.RED,
            count: ATTRIBUTES.COUNTS.ONE,
            fill: ATTRIBUTES.FILLS.SOLID,
            shape: ATTRIBUTES.SHAPES.CIRCLE,
        });
    });

    it("should have a color", async () => {
        expect(card.color).toEqual(ATTRIBUTES.COLORS.RED);
    });

    it("should have a shape", async () => {
        expect(card.shape).toEqual(ATTRIBUTES.SHAPES.CIRCLE);
    });

    it("should have a fill", async () => {
        expect(card.fill).toEqual(ATTRIBUTES.FILLS.SOLID);
    });

    it("should have a count", async () => {
        expect(card.count).toEqual(ATTRIBUTES.COUNTS.ONE);
    });
});
