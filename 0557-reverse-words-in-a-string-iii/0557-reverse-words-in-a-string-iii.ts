function reverseWords(s: string): string {
    const letters = s.split(' ');
    const arr = [];
    for (const item of letters) {
        const reverse = item.split('').reverse();
        arr.push(reverse.join(''));
    }
    return arr.join(' ');
};