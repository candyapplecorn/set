import card from '../interfaces/card';
import Card from './Card';
import ATTRIBUTES from '../constants/card';

describe('Card', () => {
    let card: card;

    beforeEach(() => {
        card = new Card({
            color: ATTRIBUTES.COLORS.RED,
            shape: ATTRIBUTES.SHAPES.CIRCLE,
            fill: ATTRIBUTES.FILLS.SOLID,
            count: ATTRIBUTES.COUNTS.ONE
        });
    });

    it('should have a color', async () => {
        expect(card.color).toEqual(ATTRIBUTES.COLORS.RED);
    });

    it('should have a shape', async () => {
        expect(card.shape).toEqual(ATTRIBUTES.SHAPES.CIRCLE);
    });

    it('should have a fill', async () => {
        expect(card.fill).toEqual(ATTRIBUTES.FILLS.SOLID);
    });

    it('should have a count', async () => {
        expect(card.count).toEqual(ATTRIBUTES.COUNTS.ONE);
    });
});
