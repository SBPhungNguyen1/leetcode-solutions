function recoverOrder(order: number[], friends: number[]): number[] {
    const set = new Set<number>(friends);
    const result : number[] = [];
    for (const fr of order) {
        if (set.has(fr)) result.push(fr);
    }
    return result;
};