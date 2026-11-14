function validPalindrome(s: string): boolean {
    const str = s.split('');
    let left = 0;
    let right = s.length-1;
    while (left < right) {
        if (str[left] !== str[right])
            return isPalindrome(str, left+1, right) || isPalindrome(str, left, right-1)
        left++;
        right--;
    }
    return true;
};

function isPalindrome (str: string[],start: number, end: number): boolean {
    while (start < end) {
        if (str[start]!== str[end])
            return false;
        start++;
        end--;
    }
    return true;
}