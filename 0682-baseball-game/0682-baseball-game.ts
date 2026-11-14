function calPoints(operations: string[]): number {
    const arr :number[] = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'C')
            arr.pop();
        else if (operations[i] === 'D') {
            const new_score = arr[arr.length-1] * 2;
            arr.push(new_score);
        } else if (operations[i] === '+') {
            const new_score = arr[arr.length-1] + arr[arr.length-2];
            arr.push(new_score);
        } else arr.push(Number(operations[i]));
    }
    return arr.reduce((acc, num) => acc + num, 0);
};