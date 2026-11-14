function minSumOfLengths(arr: number[], target: number): number {
    const n = arr.length;
    const minLen = new Array<number>(n).fill(Infinity);
    
    let left = 0;
    let currentSum = 0;
    let result = Infinity;

    for (let right = 0; right < n; right++) {
        currentSum += arr[right];

        while (currentSum > target && left <= right) {
        currentSum -= arr[left];
        left++;
        }

        if (currentSum === target) {
        const currentLen = right - left + 1;

        if (left > 0 && minLen[left - 1] !== Infinity) {
            result = Math.min(result, minLen[left - 1] + currentLen);
        }

        const prevBest = right > 0 ? minLen[right - 1] : Infinity;
        minLen[right] = Math.min(prevBest, currentLen);
        } else {
        minLen[right] = right > 0 ? minLen[right - 1] : Infinity;
        }
    }

    return result === Infinity ? -1 : result;
};