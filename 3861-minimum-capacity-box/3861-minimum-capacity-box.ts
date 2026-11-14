function minimumIndex(capacity: number[], itemSize: number): number {
    const sorted = capacity.toSorted((a, b) => a - b) // min -> max
    for (let i = 0; i < sorted.length; i++) {
        if (itemSize <= sorted[i]) return capacity.indexOf(sorted[i]);
    }
    return -1;
};