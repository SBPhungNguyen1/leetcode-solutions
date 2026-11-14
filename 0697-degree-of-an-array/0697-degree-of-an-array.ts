function findShortestSubArray(nums: number[]): number {
    const map = new Map<number, {
        count: number;
        first: number;
        last: number;
    }>();

    let degree = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!map.has(num)) {
            map.set(num, {
                count: 1,
                first: i,
                last: i
            });
        } else {
            const item = map.get(num)!;

            item.count++;
            item.last = i;
        }

        degree = Math.max(degree, map.get(num)!.count);
    }

    let result = nums.length;

    for (const item of map.values()) {
        if (item.count === degree) {
            result = Math.min(
                result,
                item.last - item.first + 1
            );
        }
    }

    return result;
}