/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const original = board.map(row => [...row]);

    function getNeighboursInfo(i: number, j: number) {
        let neighbours = 0;

        for (let x = -1; x <= 1; x++) {
            if (i + x < 0 || i + x >= board.length) continue;
            for (let y = -1; y <= 1; y++) {
                if (neighbours > 3) return neighbours;
                if (j + y < 0 || j + y >= original[i + x].length) continue;
                if (x === 0 && y === 0) continue;
                if (original[i + x][j + y] === 1) neighbours++;
            }
        }

        return neighbours;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const neighbours = getNeighboursInfo(i, j);
            
            if (original[i][j] === 1) {
                if (neighbours < 2 || neighbours > 3) {
                    board[i][j] = 0;
                }
            } else {
                if (neighbours === 3) {
                    board[i][j] = 1;
                }
            }
        }
    }
}