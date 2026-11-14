function totalNumbers(digits: number[]): number {
    const count: number[] = new Array(10).fill(0);
    for (const d of digits) {
        count[d]++;
    }

    let ans = 0;

    // even num 100 - 998 (jump 2 each)
    for (let num = 100; num < 1000; num += 2) {
        const d1 = Math.floor(num / 100);
        const d2 = Math.floor((num / 10) % 10);
        const d3 = num % 10;

        // count
        const needed: number[] = new Array(10).fill(0);
        needed[d1]++;
        needed[d2]++;
        needed[d3]++;

        // 3. check digits
        let canForm = true;
        for (let i = 0; i < 10; i++) {
            if (needed[i] > count[i]) {
                canForm = false;
                break;
            }
        }

        if (canForm) {
            ans++;
        }
    }

    return ans;
};