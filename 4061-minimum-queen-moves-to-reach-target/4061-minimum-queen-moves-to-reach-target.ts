function minQueenMoves(source: number[], target: number[]): number {
    const [row, col] = source;
    const [row2, col2] = target;

    if (row === row2 && col === col2)
        return 0;

    if (row + col === col2 + row2 || row - col === row2 - col2)
        return 1;
    if (row === row2)
        return 1;
    if (col === col2)
        return 1;
    return 2;
};