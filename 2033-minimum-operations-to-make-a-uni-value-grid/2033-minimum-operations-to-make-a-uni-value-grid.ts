function minOperations(grid: number[][], x: number): number {
    let res: number[] = [];

    for (let row of grid) {
        for (let v of row) res.push(v);
    }
    let mod = res[0] % x;
    for (let v of res) {
        if (v % x !== mod) return -1;
    }
    res.sort((a, b) => a - b);
    let m = res[Math.floor(res.length / 2)];
    let cnt = 0;
    for (let v of res) {
        cnt += Math.abs(v - m) / x;
    }
    return cnt;
};