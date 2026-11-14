function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]];
    var triangle: number[][] = [[1],[1,1]];
    if (numRows === 2) return triangle;
    for (var i = 1; i < numRows-1; i++) {
        const newArr: number[] = [1];
        for (var j = 0; j < triangle[i].length-1 ; j++) {
            newArr.push(triangle[i][j] + triangle[i][j+1])
        }
        newArr.push(1);
        triangle.push(newArr);
    }
    return triangle;
};