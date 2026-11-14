/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    const cache: number[] = [];
    arr.forEach((num, index) => {
        if (cache.length) {
            const first = cache.shift();
            arr[index] = first;
            cache.push(num);
        }

        if (num === 0) 
            cache.push(0);

        return;
    })
};