function countPrimeSetBits(left: number, right: number): number {
    let total = 0;
    for (let i = left; i <= right; i++) {
        const toBit = i.toString(2);
        let count = 0;
        for (let j = 0; j < toBit.length; j++) {
            if (toBit[j] === '1') count++;
        }
        if (isPrime(count)) total++;
    }
    return total;
};

function isPrime(num: number): boolean {
    if (num < 2) return false;
    let i = 2;
    while (i*i <= num) {
        if (num % i === 0) return false;
        i++;
    }
    return true;
}