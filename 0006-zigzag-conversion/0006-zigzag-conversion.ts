function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const rows: string[] = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;
        
        // Reverse direction when hitting the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};

// 3
//      0, 4, 8, 12
//      1, 3, 5, 7, 9, 11...
//      2, 6, 10, ...

// 4
//      0, 6, 12, ...
//      1, 5, 7, 11, ...
//      2, 4, 8, 10, ...
//      3, 9, ...