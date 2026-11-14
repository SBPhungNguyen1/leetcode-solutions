function largestEven(s: string): string {
    const str = s.split('');
    for (let i = s.length - 1; i >= 0; i--) {
        if (Number(str[i]) % 2 === 1)
            str.pop();
        else
            break;
    }
    return str.join('');
};