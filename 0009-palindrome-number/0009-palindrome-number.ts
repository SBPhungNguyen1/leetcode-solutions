function isPalindrome(x: number): boolean {
    if (x < 0)
        return false;
    const num = String(x);
    let left = 0;
    let right = num.length - 1;
    while (left < right) {
        if (num[left] !== num[right])
            return false;
        left++;
        right--;
    }
    return true;
};