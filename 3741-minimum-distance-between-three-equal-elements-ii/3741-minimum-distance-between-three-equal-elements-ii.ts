function minimumDistance(nums: number[]): number {
    const n = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    const mp = new Map<number, number[]>();

    for (let i = 0; i < n; i++) {
        if (!mp.has(nums[i])) mp.set(nums[i], []);
        mp.get(nums[i])!.push(i);
    }

    for (const [_, list] of mp) {
        if (list.length < 3) continue;

        let id1 = list[0], id2 = list[1], id3 = list[2];
        ans = Math.min(ans, Math.abs(id1 - id2) + Math.abs(id2 - id3) + Math.abs(id3 - id1));

        for (let i = 3; i < list.length; i++) {
            id1 = id2;
            id2 = id3;
            id3 = list[i];
            ans = Math.min(ans, Math.abs(id1 - id2) + Math.abs(id2 - id3) + Math.abs(id3 - id1));
        }
    }

    return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}