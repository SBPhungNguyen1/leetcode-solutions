function reverse(x: number): number {
    const isMinus = x < 0 ? true : false;
    const num = Math.abs(x);

    const reversedStr = Array.from(String(num)).reverse().join("");

    let result = parseInt(reversedStr, 10);
    if (isMinus) {
        result = -result;
    }

    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    
    if (result < INT_MIN || result > INT_MAX) {
        return 0;
    }

    console.log(result);
    return result;
};