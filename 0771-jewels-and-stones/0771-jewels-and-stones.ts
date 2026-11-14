function numJewelsInStones(jewels: string, stones: string): number {
    const jewelsSet = new Set<string>(jewels.split(''));
    console.log(jewelsSet);
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewelsSet.has(stones[i])) count++;
    }
    return count;
};