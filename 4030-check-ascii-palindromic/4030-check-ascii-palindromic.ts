function isPalindromic(s: string): boolean {
    const binary = s
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join('');
    
    let left = 0;
    let right = binary.length - 1;
    
    while (left < right) {
        if (binary[left] !== binary[right]) return false;
        left++;
        right--;
    }
    return true;
};