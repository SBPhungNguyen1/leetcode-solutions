function removeZeros(n: number): number {
    let arr = '';
    const str = String(n);
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '0')
            arr += str[i];
    }
    return Number(arr);
};