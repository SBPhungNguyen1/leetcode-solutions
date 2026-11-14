function countCommas(n: number): number {
    let count: number = 0;
    let mn: number = 1000;

    while (mn <= n) {
        count += n - mn + 1;
        mn *= 1000;
    }
    return count;
};