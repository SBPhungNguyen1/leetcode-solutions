function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b); // min - max
    const res: number[][] = [];
    const path: number[] = [];

    function backtrack(remain: number, start: number) : void {
        if (remain === 0) {
            res.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];

            if (num > remain)
                break;

            path.push(num);

            backtrack(remain - num, i);
            path.pop();
        }
    }

    backtrack(target, 0);
    return res;
};