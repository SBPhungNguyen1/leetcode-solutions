function minRotations(n: number, s: string): number {
    const cal = (a, b) => {
        const diff = Math.abs(Number(a) - Number(b));
        return Math.min(diff, 10 - diff);
    }

    let total = cal('0', s[0]);

    for (let i = 1; i < n; i++)
        total += cal(s[i-1], s[i]);

    let result = total;

    result = Math.min(result, total - cal('0', s[0])) + cal('0', s[n - 1]);

    for (let i = 1; i < n; i++) {
        const newC = total - cal(s[i - 1], s[i]) + cal(s[i - 1], s[n - 1]);
        result = Math.min(result, newC);
    }

    return result;
};