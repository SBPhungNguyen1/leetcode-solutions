function generateKey(num1: number, num2: number, num3: number): number {
    const nums = [num1, num2, num3];
    let res = 0;
    for (let i = 0, { min, floor } = Math; i < 4; i++) {
        res += nums.reduce((a, b) => min(a % 10, b % 10)) * 10 ** i;
        nums.forEach((n, j, arr) => arr[j] = floor(n / 10));
    }
    return res;
};