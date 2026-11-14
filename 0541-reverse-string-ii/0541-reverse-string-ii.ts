function reverseStr(s: string, k: number): string {
    const chars = s.split('');
    const n = chars.length;

    for (let i = 0; i < n; i = i + 2*k) {
        let left = i;
        let right = Math.min(i + k - 1, n - 1);

        while (left < right) {
            const temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--
        }
    }
    return chars.join('')
};