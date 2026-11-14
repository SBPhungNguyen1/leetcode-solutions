function distinctSubseqII(s: string): number {
    const MOD = 1_000_000_007;
    const lastAdded = new Array<number>(26).fill(0);
    let totalCount = 0; 

    for (let i = 0; i < s.length; i++) {
        const charIdx = s.charCodeAt(i) - 97;
        
        let newSubs = (totalCount + 1 - lastAdded[charIdx]) % MOD;
        if (newSubs < 0) {
            newSubs += MOD;
        }

        totalCount = (totalCount + newSubs) % MOD;
        lastAdded[charIdx] = (lastAdded[charIdx] + newSubs) % MOD;
    }

    return totalCount;
};