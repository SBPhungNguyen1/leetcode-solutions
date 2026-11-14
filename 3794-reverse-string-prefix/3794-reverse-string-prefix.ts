function reversePrefix(s: string, k: number): string {
    const str = s.split('');
    let left = 0;
    let right = k - 1;
    while (left < right) {
        const temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
    return str.join('');
};