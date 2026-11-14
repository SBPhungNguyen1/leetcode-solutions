function characterReplacement(s: string, k: number): number {
    const count = new Array(26).fill(0);
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const charCode = s.charCodeAt(right) - 65; // A = 65;
        count[charCode] += 1;

        maxCount = Math.max(maxCount, count[charCode]);

        while ((right - left + 1) - maxCount > k) {
            count[s.charCodeAt(left) - 65]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};