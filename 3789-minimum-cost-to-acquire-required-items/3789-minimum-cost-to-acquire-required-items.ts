function minimumCost(cost1: number, cost2: number, costBoth: number, need1: number, need2: number): number {
    const minNeed = Math.min(need1, need2);
    const maxNeed = Math.max(need1, need2);

    let sum = 0;
    const total = cost1 + cost2;

    // both
    sum += total < costBoth ? total * minNeed : costBoth * minNeed;

    // rest
    const rest = maxNeed - minNeed;
    if (minNeed === maxNeed)
        return sum;
    
    if (need1 > need2) {
        sum += cost1 < costBoth ? cost1 * rest : costBoth * rest;
    } else {
        sum += cost2 < costBoth ? cost2 * rest : costBoth * rest;
    }
    
    return sum;
};