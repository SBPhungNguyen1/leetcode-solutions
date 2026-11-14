function getRow(rowIndex: number): number[] {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1,1];
    let arr = [1,1];
    var newArr : number[] = [];
    for (var i = 2; i < rowIndex+1; i++) {
        newArr = [];
        newArr.push(1);
        for (var j = 1; j < arr.length; j++) {
            newArr[j] = arr[j-1] + arr[j];
        }
        newArr.push(1);
        console.log(newArr);
        arr = newArr;
    }
    return newArr;
};