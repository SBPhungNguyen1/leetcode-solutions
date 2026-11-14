function stoneGameIX(stones: number[]): boolean {
    const cnt = [0,0,0];

    for (const item of stones)
        cnt[item%3] += 1;
    
    const c0 = cnt[0];
    const c1 = cnt[1];
    const c2 = cnt[2];

    if (c0 % 2 === 0) 
        return c1 >=1 && c2 >=1;
    return Math.abs(c1-c2) > 2;
};