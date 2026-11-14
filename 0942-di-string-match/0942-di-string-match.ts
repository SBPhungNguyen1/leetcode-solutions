function diStringMatch(s: string): number[] {
    let left = 0;
    let right = s.length;
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            arr.push(left);
            left++;
        }else {
            arr.push(right);
            right--
        }
    }
    arr.push(left);
    return arr;
};