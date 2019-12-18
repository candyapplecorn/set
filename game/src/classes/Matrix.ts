export default class Matrix {
    public static matrixAddition(matrixA: number[], matrixB: number[]): number[] {
        return matrixA.map((digit: number, index: number): number => {
            return digit + matrixB[index];
        });
    }

    public static matrixIntersection(matrixA: number[], matrixB: number[]): number[] {
        return matrixA.filter((num) => matrixB.includes(num));
    }

    public static matrixSum(matrices: number[][]): number[] {
        return matrices.reduce(Matrix.matrixAddition, [0, 0, 0, 0]);
    }

    public static matrixSubtraction(matrixA: number[], matrixB: number[]): number[] {
        const intersection: number[] = Matrix.matrixIntersection(matrixA, matrixB);
        return matrixA.filter((d) => !intersection.includes(d));
    }
}
