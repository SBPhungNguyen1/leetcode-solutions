function addToArrayForm(num: number[], k: number): number[] {
    const result: number[] = [];
    let i = num.length - 1;

    while (i >= 0 || k > 0) {
        if (i >= 0) {
            k += num[i];
            i--;
        }
        result.push(k % 10);
        k = Math.floor(k / 10);
    }

    return result.reverse();
}