function shipWithinDays(weights: number[], days: number): number {
    let l = 0;
    let r = 0;

    for (const w of weights) {
        l = Math.max(l, w);
        r += w;
    }

    let ans = 0;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        let localDays = 1;
        let localCapacity = mid;

        for (const w of weights) {
            if (localCapacity < w) {
                localDays++;
                localCapacity = mid;
            }

            localCapacity -= w;
        }

        if (localDays <= days) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return ans;
};