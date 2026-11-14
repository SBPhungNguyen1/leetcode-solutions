const P: [number[], number[]] = [[], []];
let initialized = false;

function initPalindromes(): void {
    if (initialized) return;
    initialized = true;

    for (let v = 1; v < 100000; v++) {
        const s = v.toString();
        let r = '';
        for (let i = s.length - 1; i >= 0; i--) {
            r += s[i];
        }

        const a1 = Number(s.slice(0, -1) + r);
        const a2 = Number(s + r);

        if (a1 <= 2_000_000_000) P[a1 & 1].push(a1);
        if (a2 <= 2_000_000_000) P[a2 & 1].push(a2);
    }

    P[0].sort((a, b) => a - b);
    P[1].sort((a, b) => a - b);
}

function lowerBound(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length;
    while (low < high) {
        const mid = (low + high) >> 1;
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}

function minOperations(nums: number[]): number {
    initPalindromes();

    let res = 0;

    for (const a of nums) {
        const p = P[a & 1];
        const idx = lowerBound(p, a);

        let minDiff = Infinity;

        if (idx < p.length) {
            minDiff = Math.min(minDiff, Math.abs(a - p[idx]));
        }
        if (idx > 0) {
            minDiff = Math.min(minDiff, Math.abs(a - p[idx - 1]));
        }

        res += Math.floor(minDiff / 2);
    }

    return res;
}