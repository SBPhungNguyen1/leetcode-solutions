function bitwiseComplement(n: number): number {
    const str = n.toString(2).split('');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i] === '0' ? '1' : '0';
    }
    const newNum = str.join('');
    return parseInt(newNum, 2);
};