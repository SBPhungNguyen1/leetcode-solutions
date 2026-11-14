function minCuttingCost(n: number, m: number, k: number): number {
    let cost = 0;

    if (n > k) {
        cost += (n - k) * k;
    }

    if (m > k) {
        cost += (m - k) * k;
    }

    return cost;
};