function smallestNumber(n: number, t: number): number {

    let start = n;
    while (true) {
        let total = start;
        let sum = 1;
        console.log("start",start)
        while (total > 0) {
            sum = sum * (total%10);
            total = Math.floor(total / 10);
            console.log(sum ,total)
        }
        if (sum  % t === 0)
            return start;
        start ++;
    }
    return 1;
};