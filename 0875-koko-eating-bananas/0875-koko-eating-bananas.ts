function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    let ans = right;

    const canFinish = (speed: number): boolean => {
        let totalHours = 0;
        for (const pile of piles) {
            totalHours += Math.ceil(pile/speed);
            if (totalHours > h) return false;
        }
        return totalHours <= h;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canFinish(mid)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};