function minimumSum(n: number, k: number): number {
     const arr : number[] = [];
    let i: number = 1;

    while (arr.length < n) {
        let insert : boolean = true;
        for (const a of arr) {
            if (a + i === k) {
                insert = false;
                break;
            } 
        }
        if (insert) {
            arr.push(i);
        }
        i++;
    }
    return arr.reduce((a, c) => a + c);
};