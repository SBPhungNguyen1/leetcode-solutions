function numSteps(s: string): number {
    let cur = BigInt("0b" + s);
    let step = 0;
    while (cur !== 1n) {
        if (cur % 2n === 0n)
            cur = cur / 2n;
        else
            cur += 1n;
        step++;
    }
    return step;
};