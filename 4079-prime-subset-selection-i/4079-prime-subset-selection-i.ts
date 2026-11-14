function maxPrimes(n: number, s: number): number[] {
    let sum = 0;
    let arr = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
            arr.push(i);
        }
        if (sum > s) {
            arr.pop();
            break;
        }
    }
    return arr;
};

function isPrime (num: number) : boolean {
    if (num < 2) return false;
    for (let i = 2; i * i <=  num; i++)
        if (num % i === 0)
            return false;
    return true;
}