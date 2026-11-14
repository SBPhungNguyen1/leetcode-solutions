function minDeletionSize(strs: string[]): number {
const rows = strs.length;
    const cols = strs[0].length;
    let deletedColumns = 0;

    for (let col = 0; col < cols; col++) {
        for (let row = 1; row < rows; row++) {
            if (strs[row - 1][col] > strs[row][col]) {
                deletedColumns++;
                break;
            }
        }
    }

    return deletedColumns;
};