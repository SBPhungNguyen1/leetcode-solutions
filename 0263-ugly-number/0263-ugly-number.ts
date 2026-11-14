function isUgly(n: number): boolean {
    if (n < 1) return false;
    let num = n;
    while (num > 1) {
        if (num%2 === 0) {
            num = Math.floor(num/2)
        }else if (num%3===0) {
            num = Math.floor(num/3)
        }else if (num%5===0) {
            num = Math.floor(num/5)
        }else return false;
    }
    return true;
};