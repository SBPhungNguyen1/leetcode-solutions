function isPalindrome(s: string): boolean {
    const cleanString: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(cleanString);
    let right = cleanString.length-1;
    let left = 0;
    while (left < right) {
        if (cleanString[left] !== cleanString[right]) return false
        left++;
        right--
    }
    return true
};