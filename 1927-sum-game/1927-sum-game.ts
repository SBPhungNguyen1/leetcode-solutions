function sumGame(num: string): boolean {
    const n = num.length;
    const mid  = Math.floor(n/2);

    let s1 = 0, s2 = 0;
    let c1 = 0, c2 = 0;

    for (let i = 0; i < mid; i++) {
        if (num[i] === '?') c1++;
        else s1 = s1 + Number(num[i]);
    }

    for (let i = mid; i < n; i++) {
        if (num[i] === '?') c2++;
        else s2 = s2 + Number(num[i]);
    }

    // if '?' is odd --> Alice can always win
    if ((c1 + c2) % 2 === 1) return true;

    // Bob win when 2 * (s1 - s2) + 9 * (c1 - c2) === 0
    // else A win
    return 2 * (s1 - s2) + 9 * (c1 - c2) !== 0;
};