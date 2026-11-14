function minMovesToCaptureTheQueen(a: number, b: number, c: number, d: number, e: number, f: number): number {
    const rookQueenSameRow = a === e
    const rookQueenSameColumn = b === f
    const bishopQueenDiagonal = Math.abs(c - e) === Math.abs(d - f)

    if (bishopQueenDiagonal) {
        const rookDiagonalBishop = Math.abs(a - c) === Math.abs(b - d)
        const rookDiagonalQueen = Math.abs(a - e) === Math.abs(b - f)
        const rookBetween = rookDiagonalBishop && rookDiagonalQueen && ((a > c && a < e) || (a < c && a > e))
        if (!rookBetween) return 1
    }
    if (rookQueenSameRow) {
        const bishopSameRow = c === a
        const bishopBetween = (d > b && d < f) || (d < b && d > f)
        const bishopBlocking = bishopSameRow && bishopBetween
        if (!bishopBlocking) return 1
    }
    if (rookQueenSameColumn) {
        const bishopSameColumn = d === b
        const bishopBetween = (c > a && c < e) || (c < a && c > e)
        const bishopBlocking = bishopSameColumn && bishopBetween
        if (!bishopBlocking) return 1
    }
    return 2
};