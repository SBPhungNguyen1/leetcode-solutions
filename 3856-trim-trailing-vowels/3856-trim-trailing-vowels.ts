function trimTrailingVowels(s: string): string {
    let str = s.split('');
    const vowels = "aiueo";
    for (let i = str.length-1; i >= 0; i--) {
        if (vowels.includes(str[i]))
            str.pop();
        else break;
    }
    return str.join('');
};