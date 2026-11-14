function reverseWords(s: string): string {
    s = s.trim().replace(/\s+/g, " ");;
    console.log(s);
    const splits = s.split(' ');
    let left = 0;
    let right = splits.length - 1;
    while (left < right) {
        const temp = splits[left];
        splits[left] = splits[right];
        splits[right] = temp;
        left++;
        right--;
    }
    return splits.join(' ');
};