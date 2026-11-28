function minimumAbsDifference(arr: number[]): number[][] {
    const result = [];
    let min = Infinity;
    arr.sort((a, b) => a - b);      //min - max
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        if (diff < min) {
            min = diff;
            result.length = 0;
            result.push([arr[i], arr[i + 1]]);
        } else if (diff === min) {
            result.push([arr[i], arr[i + 1]]);
        }
    }
    return result;
};