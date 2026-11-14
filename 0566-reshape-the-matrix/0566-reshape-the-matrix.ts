function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const numArr: number[] = mat.flat();
    console.log(numArr);
    if (numArr.length !== r*c) return mat;

    let results : number[][] =[[]];
    let column = 0;
    let row = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (column === c) {
            row++;
            column = 0;
            results.push([]);
        }
        results[row].push(numArr[i]);
        column++;
    }
    return results;
};