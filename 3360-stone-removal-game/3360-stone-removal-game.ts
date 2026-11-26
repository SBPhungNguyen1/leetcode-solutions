function canAliceWin(n: number): boolean {
    let flag = false;
    let curr = 10;
    while (n >= curr) {
        n = n - curr;
        curr--;
        flag = !flag;
    }
    return flag;
};