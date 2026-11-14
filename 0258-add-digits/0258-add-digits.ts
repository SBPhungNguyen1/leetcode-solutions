function addDigits(num: number): number {
    let sum = num;
    while (sum > 9) {
        let innerSum = sum;
        let total = 0;
        while (innerSum > 0) {
            total = total + innerSum%10;
            innerSum = Math.floor(innerSum/10);
        }
        sum = total;
    }
    return sum;
};