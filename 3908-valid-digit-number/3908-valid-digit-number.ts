function validDigit(n: number, x: number): boolean {
    const str = String(n);
    return str[0] !== String(x) && str.includes(String(x));
};