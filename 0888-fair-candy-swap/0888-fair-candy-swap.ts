function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    const sumAlice = aliceSizes.reduce((sum, acc) => sum + acc, 0);const sumBob = bobSizes.reduce((sum, acc) => sum + acc, 0);

    console.log(sumAlice, sumBob);

    // alice nhieu keo hon
    if (sumAlice > sumBob) {
        const diff = (sumAlice - sumBob) / 2;
        const set = new Set<number>(bobSizes);
        for (let i = 0; i < aliceSizes.length; i++) {
            if (set.has(aliceSizes[i] - diff))
                return [aliceSizes[i], aliceSizes[i] - diff];
        }
    } else { // bob >= alice
        const diff = (sumBob - sumAlice) / 2;
        const set = new Set<number>(aliceSizes);
        for (let i = 0; i < bobSizes.length; i++) {
            if (set.has(bobSizes[i] - diff))
                return [bobSizes[i] - diff, bobSizes[i]];
        }
    }
};