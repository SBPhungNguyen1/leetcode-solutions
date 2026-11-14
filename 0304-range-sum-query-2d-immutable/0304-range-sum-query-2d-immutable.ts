class NumMatrix {
    matrix: number[][];
    prefixMatrix: number[][];

    constructor(matrix: number[][]) {
        this.matrix = matrix;
        
        let prefixMatrix: number[][] = Array.from({length: matrix.length}, () => new Array(matrix[0].length).fill(0));

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                let left = i === 0 ? 0 : prefixMatrix[i - 1][j];
                let top = j === 0 ? 0 : prefixMatrix[i][j - 1];
                let corner = i === 0 || j === 0 ? 0 : prefixMatrix[i - 1][j - 1];

                prefixMatrix[i][j] = (matrix[i][j] + left + top) - corner;
            }
        }

        this.prefixMatrix = prefixMatrix;
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let left = row1 === 0 ? 0 : this.prefixMatrix[row1 - 1][col2];
        let top = col1 === 0 ? 0 : this.prefixMatrix[row2][col1 - 1];
        let corner = row1 === 0 || col1 === 0 ? 0 : this.prefixMatrix[row1 - 1][col1 - 1];

        return this.prefixMatrix[row2][col2] - left - top + corner;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */