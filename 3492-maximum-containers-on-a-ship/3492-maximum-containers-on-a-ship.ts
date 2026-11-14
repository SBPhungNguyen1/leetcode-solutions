function maxContainers(n: number, w: number, maxWeight: number): number {
    const maxCell = n * n;
    const weight = Math.floor(maxWeight / w);
    return Math.min(maxCell, weight);
};