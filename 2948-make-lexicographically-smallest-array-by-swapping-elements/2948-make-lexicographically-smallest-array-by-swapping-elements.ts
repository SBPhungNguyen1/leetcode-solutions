function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const n = nums.length;

    const sortedPairs: [number, number][] = nums.map((val, idx) => [val, idx]);
    sortedPairs.sort((a, b) => a[0] - b[0]);

    const result = new Array<number>(n);
    let i = 0;

    while (i < n) {
        let j = i;
        const groupIndices: number[] = [];
        const groupValues: number[] = [];

        while (j < n && (j === i || sortedPairs[j][0] - sortedPairs[j - 1][0] <= limit)) {
            groupValues.push(sortedPairs[j][0]);
            groupIndices.push(sortedPairs[j][1]);
            j++;
        }

        groupIndices.sort((a, b) => a - b);

        for (let k = 0; k < groupIndices.length; k++) {
            result[groupIndices[k]] = groupValues[k];
        }

        i = j;
    }

    return result;
}