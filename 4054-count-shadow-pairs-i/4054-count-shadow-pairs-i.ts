function shadowPairs(nums: number[]): number {
    let res = 0;
    const s: number[] = [];
    const count = new Map<number, number>();

    for (const a of nums) {
        while (s.length > 0 && s[s.length - 1] > a) {
            const top = s.pop()!;
            count.set(top, (count.get(top) ?? 1) - 1);
        }

        res += s.length - (count.get(a) ?? 0);

        s.push(a);
        count.set(a, (count.get(a) ?? 0) + 1);
    }

    return res;
};