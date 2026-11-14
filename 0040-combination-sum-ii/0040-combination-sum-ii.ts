function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const res: number[][] = [];
    const path: number[] = [];

    function dfs(start: number, sum: number) {
        if (sum === target) {
            res.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            if (sum + candidates[i] > target) break;
            path.push(candidates[i]);
            dfs(i + 1, sum + candidates[i]);
            path.pop();
        }
    }

    dfs(0, 0);
    return res;
};