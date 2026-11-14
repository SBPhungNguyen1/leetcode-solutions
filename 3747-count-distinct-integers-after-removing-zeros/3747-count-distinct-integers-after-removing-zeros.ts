function countDistinct(n: number): number {
    const str = n.toString();
    const len = str.length;
    const memo = new Map<string, number>();
    
    function dp(pos: number, tight: boolean, started: boolean): number {
        if (pos === len) {
            return started ? 1 : 0;
        }
        
        const key = `${pos},${tight ? 1 : 0},${started ? 1 : 0}`;
        if (memo.has(key)) {
            return memo.get(key)!;
        }
        
        const limit = tight ? parseInt(str[pos]) : 9;
        let result = 0;
        
        for (let digit = 0; digit <= limit; digit++) {
            if (digit === 0) {
                if (!started) {
                    result += dp(pos + 1, tight && (digit === limit), false);
                }
            } else {
                result += dp(pos + 1, tight && (digit === limit), true);
            }
        }
        
        memo.set(key, result);
        return result;
    }
    
    return dp(0, true, false);
}