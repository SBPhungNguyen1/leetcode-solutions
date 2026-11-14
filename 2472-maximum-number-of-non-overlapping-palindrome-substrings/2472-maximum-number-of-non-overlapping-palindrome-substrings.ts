function maxPalindromes(s: string, k: number): number {
    const n = s.length;
    let count = 0;
    let lastEnd = -1;

    for (let center = 0; center < 2 * n - 1; center++) {
        let left = Math.floor(center / 2);
        let right = left + (center % 2);

        while (left >= 0 && right < n && s[left] === s[right]) {
            const len = right - left + 1;
            
            if (len >= k) {
                if (left > lastEnd) {
                    count++;
                    lastEnd = right;
                    break; 
                }
            }
            
            if (len > k + 1) {
                break;
            }

            left--;
            right++;
        }
    }

    return count;
}