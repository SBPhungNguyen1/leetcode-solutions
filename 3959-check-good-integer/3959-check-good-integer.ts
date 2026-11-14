function checkGoodInteger(n: number): boolean {
    const str = String(n);
    let digitSum = 0;
    let squareSum = 0;
    for (let i = 0; i < str.length; i++) {
        digitSum += Number(str[i]);
        squareSum += Number (str[i]) * Number (str[i]);
    }
    return squareSum - digitSum >= 50 ? true : false
};