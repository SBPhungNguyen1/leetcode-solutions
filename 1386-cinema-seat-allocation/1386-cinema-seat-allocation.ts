function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    const reserved = new Map<number, number>();

    for (const [row, seat] of reservedSeats) {
        if (seat >= 2 && seat <= 9) {
            const currentMask = reserved.get(row) ?? 0;
            reserved.set(row, currentMask | (1 << seat));
        }
    }

    let ans = (n - reserved.size) * 2;

    const LEFT_MASK = 60;
    const RIGHT_MASK = 960;
    const MID_MASK = 240;

    for (const mask of reserved.values()) {
        const leftAvail = (mask & LEFT_MASK) === 0;
        const rightAvail = (mask & RIGHT_MASK) === 0;
        const midAvail = (mask & MID_MASK) === 0;

        if (leftAvail && rightAvail) {
            ans += 2;
        } else if (leftAvail || rightAvail || midAvail) {
            ans += 1;
        }
    }

    return ans;
};