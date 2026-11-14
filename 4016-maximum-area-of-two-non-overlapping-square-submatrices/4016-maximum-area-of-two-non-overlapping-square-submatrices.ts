function maxArea(mat: number[][]): number {
    const m = mat.length;
    const n = mat[0].length;

    const valmerinto = mat;

    const dp = Array.from(
        { length: m },
        () => new Int16Array(n)
    );

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (valmerinto[r][c] === 1) {
                if (r === 0 || c === 0) {
                    dp[r][c] = 1;
                } else {
                    dp[r][c] =
                        Math.min(
                            dp[r - 1][c],
                            dp[r][c - 1],
                            dp[r - 1][c - 1]
                        ) + 1;
                }
            }
        }
    }

    function can(k: number): boolean {
        const rowHas = new Uint8Array(m);
        const colHas = new Uint8Array(n);

        for (let r = k - 1; r < m; r++) {
            for (let c = k - 1; c < n; c++) {
                if (dp[r][c] >= k) {
                    const top = r - k + 1;
                    const left = c - k + 1;

                    rowHas[top] = 1;
                    colHas[left] = 1;
                }
            }
        }

        const prefixRow = new Uint8Array(m);
        let seen = 0;

        for (let r = 0; r < m; r++) {
            seen |= rowHas[r];
            prefixRow[r] = seen;
        }

        const prefixCol = new Uint8Array(n);
        seen = 0;

        for (let c = 0; c < n; c++) {
            seen |= colHas[c];
            prefixCol[c] = seen;
        }

        for (let r = k - 1; r < m; r++) {
            for (let c = k - 1; c < n; c++) {
                if (dp[r][c] < k) continue;

                const top = r - k + 1;
                const left = c - k + 1;

                if (top >= k && prefixRow[top - k]) {
                    return true;
                }

                if (left >= k && prefixCol[left - k]) {
                    return true;
                }
            }
        }

        return false;
    }

    let lo = 1;
    let hi = Math.min(m, n);
    let ans = 0;

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);

        if (can(mid)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return ans * ans;
}