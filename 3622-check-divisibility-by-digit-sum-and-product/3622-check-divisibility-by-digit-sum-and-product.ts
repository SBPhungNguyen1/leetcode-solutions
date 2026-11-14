function checkDivisibility(n: number): boolean {
    let sum = 0;
    let product = 1;
    const str = String(n);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
        product *= Number(str[i]);
    }
    return (n % (sum + product)) === 0;
};