function firstMatchingIndex(s: string): number {
    const n = s.length;
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        if (s[left] === s[right]) return left;
        left ++;
        right --;
    }
    return -1;
};