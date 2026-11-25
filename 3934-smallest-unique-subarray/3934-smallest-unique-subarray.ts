function smallestUniqueSubarray(nums: number[]): number {
    const n = nums.length;
    const key = (a: number, b: number): number => a * 2 ** 17 + b;  
    const names: number[][] = [nums]; 
    for (let half = 1; 2 * half <= n; half *= 2) { 
        const ids = new Map<number, number>();  
        const block = names.at(-1)!, whole: number[] = [];
        for (let i = half; i < block.length; i++) {
            const pair = key(block[i - half], block[i]);
            if (!ids.has(pair)) ids.set(pair, ids.size);
            whole.push(ids.get(pair)!);
        }
        names.push(whole);
    }

    const found = (length: number): boolean => {  
        const k = 31 - Math.clz32(length);  
        const block = names[k], shift = length - 2 ** k, count = new Map<number, number>();
        for (let i = shift; i < block.length; i++) {
            const pair = key(block[i - shift], block[i]);
            count.set(pair, (count.get(pair) ?? 0) + 1);
        }
        return [...count.values()].includes(1);
    };

    let lo = 1, hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (found(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}