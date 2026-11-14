function maxProduct(n: number): number {
    const str = n.toString().split('');
    str.sort((a, b) => Number(b) - Number(a));
    return Number(str[0]) * Number(str[1]);
};