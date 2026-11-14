function numRookCaptures(board: string[][]): number {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'R') {
                let moveTop = i - 1;
                let moveBottom = i + 1;
                let moveLeft = j - 1;
                let moveRight = j + 1;

                const arr = [];
                while (moveTop >= 0){
                    if (board[moveTop][j] !== '.') {
                        arr.push(board[moveTop][j]);
                        break;
                    }
                    moveTop--;
                }
                while (moveBottom < 8){
                    if (board[moveBottom][j] !== '.') {
                        arr.push(board[moveBottom][j])
                        break;
                    }
                    moveBottom++;
                }
                while (moveLeft >= 0){
                    if (board[i][moveLeft] !== '.') {
                        arr.push(board[i][moveLeft]);
                        break;
                    }
                    moveLeft--;
                }
                while (moveRight < 8){
                    if (board[i][moveRight] !== '.') {
                        arr.push(board[i][moveRight])
                        break;
                    }
                    moveRight++;
                }
                console.log(arr);
                
                let count = 0;
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k] === 'p') count++;
                }
                return count;
            }
        }
    }
    return 4;
};