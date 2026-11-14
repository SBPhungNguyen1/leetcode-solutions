function smallestNumber(num: string, t: number): string {
    let tempT = BigInt(t);
    const count: Record<number, number> = { 2: 0, 3: 0, 5: 0, 7: 0 };
    const primes = [2, 3, 5, 7];
    
    for (const p of primes) {
        while (tempT % BigInt(p) === 0n) {
            count[p]++;
            tempT /= BigInt(p);
        }
    }
    
    if (tempT > 1n) return "-1";

    const digitFactors: Record<number, Record<number, number>> = {
        0: { 2: 0, 3: 0, 5: 0, 7: 0 },
        1: { 2: 0, 3: 0, 5: 0, 7: 0 },
        2: { 2: 1, 3: 0, 5: 0, 7: 0 },
        3: { 2: 0, 3: 1, 5: 0, 7: 0 },
        4: { 2: 2, 3: 0, 5: 0, 7: 0 },
        5: { 2: 0, 3: 0, 5: 1, 7: 0 },
        6: { 2: 1, 3: 1, 5: 0, 7: 0 },
        7: { 2: 0, 3: 0, 5: 0, 7: 1 },
        8: { 2: 3, 3: 0, 5: 0, 7: 0 },
        9: { 2: 0, 3: 2, 5: 0, 7: 0 },
    };

    // Memoization để tìm tập chữ số tạo ra tích thừa số tối ưu và lexicographically nhỏ nhất
    const memo = new Map<string, string>();

    function getBestDigits(c2: number, c3: number, c5: number, c7: number): string {
        c2 = Math.max(0, c2);
        c3 = Math.max(0, c3);
        c5 = Math.max(0, c5);
        c7 = Math.max(0, c7);

        if (c2 === 0 && c3 === 0 && c5 === 0 && c7 === 0) return "";

        const key = `${c2},${c3},${c5},${c7}`;
        if (memo.has(key)) return memo.get(key)!;

        let best = "";

        // Thử các chữ số từ 2 đến 9
        for (let d = 2; d <= 9; d++) {
            const f2 = digitFactors[d][2];
            const f3 = digitFactors[d][3];
            const f5 = digitFactors[d][5];
            const f7 = digitFactors[d][7];

            // Chỉ thử nếu chữ số d đóng góp ít nhất một thừa số nguyên tố còn thiếu
            if (
                (c2 > 0 && f2 > 0) ||
                (c3 > 0 && f3 > 0) ||
                (c5 > 0 && f5 > 0) ||
                (c7 > 0 && f7 > 0)
            ) {
                const sub = getBestDigits(c2 - f2, c3 - f3, c5 - f5, c7 - f7);
                const candidate = d.toString() + sub;

                if (
                    best === "" ||
                    candidate.length < best.length ||
                    (candidate.length === best.length && candidate < best)
                ) {
                    best = candidate;
                }
            }
        }

        memo.set(key, best);
        return best;
    }

    const n = num.length;
    const pref2 = new Array(n + 1).fill(0);
    const pref3 = new Array(n + 1).fill(0);
    const pref5 = new Array(n + 1).fill(0);
    const pref7 = new Array(n + 1).fill(0);

    let firstZero = -1;
    for (let i = 0; i < n; i++) {
        const d = parseInt(num[i]);
        if (d === 0 && firstZero === -1) {
            firstZero = i;
        }
        pref2[i + 1] = pref2[i] + digitFactors[d][2];
        pref3[i + 1] = pref3[i] + digitFactors[d][3];
        pref5[i + 1] = pref5[i] + digitFactors[d][5];
        pref7[i + 1] = pref7[i] + digitFactors[d][7];
    }

    // 1. Kiểm tra chính bản thân `num`
    if (
        firstZero === -1 &&
        pref2[n] >= count[2] &&
        pref3[n] >= count[3] &&
        pref5[n] >= count[5] &&
        pref7[n] >= count[7]
    ) {
        return num;
    }

    // 2. Thử thay thế tại vị trí i cùng độ dài n
    const limit = firstZero !== -1 ? firstZero : n - 1;

    for (let i = limit; i >= 0; i--) {
        const currentDigit = parseInt(num[i]);

        for (let nextDigit = currentDigit + 1; nextDigit <= 9; nextDigit++) {
            const rem2 = count[2] - pref2[i] - digitFactors[nextDigit][2];
            const rem3 = count[3] - pref3[i] - digitFactors[nextDigit][3];
            const rem5 = count[5] - pref5[i] - digitFactors[nextDigit][5];
            const rem7 = count[7] - pref7[i] - digitFactors[nextDigit][7];

            const minDigitsStr = getBestDigits(rem2, rem3, rem5, rem7);
            const spacesLeft = n - 1 - i;

            if (minDigitsStr.length <= spacesLeft) {
                const prefix = num.slice(0, i) + nextDigit.toString();
                const onesNeeded = spacesLeft - minDigitsStr.length;
                const suffix = "1".repeat(onesNeeded) + minDigitsStr.split("").sort().join("");
                return prefix + suffix;
            }
        }
    }

    // 3. Tăng độ dài chuỗi nếu cùng độ dài không thỏa mãn
    const minDigitsStr = getBestDigits(count[2], count[3], count[5], count[7]);
    const targetLen = Math.max(n + 1, minDigitsStr.length);
    const onesNeeded = targetLen - minDigitsStr.length;

    return "1".repeat(onesNeeded) + minDigitsStr.split("").sort().join("");
}