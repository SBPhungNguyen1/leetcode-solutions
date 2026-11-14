function fib(n: number): number {
    if (n===0) return 0;
    if (n<=2) return 1;
    let num1 = 1;
    let num2 = 1;
    let sum = 0;
    for (let i = 2; i < n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
};