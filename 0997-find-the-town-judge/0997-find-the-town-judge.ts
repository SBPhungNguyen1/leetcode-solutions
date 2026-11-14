function findJudge(n: number, trust: number[][]): number {    
    const score = new Array(n+1).fill(0);

    for (const [a,b] of trust) {
        score[a]--; // a believe -> minus
        score[b]++; // b is believed -> plus
    }

    for (let i = 1; i <= n; i++) {
        // THEY is believed to be trusted by every1
        // AND trust no-one
        if (score[i] === n - 1) {
            return i;
        }
    }

    return -1;
};