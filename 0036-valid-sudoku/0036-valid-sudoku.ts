function isValidSudoku(board: string[][]): boolean {
    const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
    const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
    const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());


    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            if (val === '.') continue;

            const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check duplicated
            if (rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)) {
                return false;
            }

            // Check appeared
            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIdx].add(val);
        }
    }

    return true;
};