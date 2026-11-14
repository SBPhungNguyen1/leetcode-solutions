function maximumGap(skill: string, station: string): number {
    // if 0-1 worker - no gap
    if (skill.length < 2) return 0;

    // 1. cal most left
    // 2. cal most right
    // 3. maxGap = max(right[i] - left[i-1], maxGap)

    const left = new Array(skill.length);
    const right = new Array(skill.length);

    let curr = 0;
    for (let i = 0; i < skill.length; i++) {
        while (curr < station.length && station[curr] !== skill[i])
            curr++;
        left[i] = curr;
        curr++;
    }

    curr = station.length - 1;
    for (let i = skill.length - 1; i >= 0; i--) {
        while (curr >= 0 && station[curr] !== skill[i])
            curr--;
        right[i] = curr;
        curr--;
    }

    let maxGap = 0;
    for (let i = 1; i < skill.length; i++) {
        const gap = right[i] - left[i-1];
        maxGap = Math.max(maxGap, gap);
    }

    return maxGap;
};