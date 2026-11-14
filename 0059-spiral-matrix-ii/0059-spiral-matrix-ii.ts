function generateMatrix(n: number): number[][] {
    const matrix: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let val = 1;

    while (top <= bottom && left <= right) {
        // Traverse Right
        for (let col = left; col <= right; col++) {
            matrix[top][col] = val++;
        }
        top++;

        // Traverse Down
        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = val++;
        }
        right--;

        // Traverse Left
        for (let col = right; col >= left; col--) {
            matrix[bottom][col] = val++;
        }
        bottom--;

        // Traverse Up
        for (let row = bottom; row >= top; row--) {
            matrix[row][left] = val++;
        }
        left++;
    }

    return matrix;
};