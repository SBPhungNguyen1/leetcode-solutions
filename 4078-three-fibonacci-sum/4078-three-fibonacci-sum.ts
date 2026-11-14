function threeFibonacciSum(n: number): boolean {
    if (n < 2)
        return false;
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;
    while (num1 + num2 + num3 <= n) {
        if (num1 + num2 + num3 === n)
            return true;
        const next = num2 + num3;
        num1 = num2;
        num2 = num3;
        num3 = next;
    } 
    return false;
};