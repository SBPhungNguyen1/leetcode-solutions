function uniquePaths(m: number, n: number): number {
    let y = m; 
    let x = n; 

    let dp = new Array(y).fill(null).map(el => new Array(x).fill(0)); 
    dp[0][0] = 1; 
 
    for (let currY = 0; currY < y; currY++) {
        for (let currX = 0; currX < x; currX++) {
            if (currY === 0 && currX === 0) continue; 
            let uniquePathsTop = dp[currY - 1]?.[currX] || 0
            let uniquePathsLeft = dp[currY][currX - 1] || 0
            dp[currY][currX] = uniquePathsTop + uniquePathsLeft; 
        }
    }

    return dp[y - 1][x - 1]
};