function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    
    let left = 0;
    let right = m * n - 1;
    
    while (left <= right) {
        
        const mid = Math.floor(left + (right - left) / 2);
        
        // convert 1D -> 2D
        const row = Math.floor(mid / n);
        const col = mid % n;
        const midVal = matrix[row][col];
        
        if (midVal === target) {
            return true;
        } else if (midVal < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};