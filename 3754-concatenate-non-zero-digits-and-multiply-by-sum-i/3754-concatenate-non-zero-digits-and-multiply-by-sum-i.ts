function sumAndMultiply(n: number): number {
    let arr = '';
    let sum = 0;
    const str = n.toString();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '0')
            arr += str[i];
            sum += Number(str[i]);
    }
    if (sum === 0) return 0;
    return Number(arr) * sum;
};