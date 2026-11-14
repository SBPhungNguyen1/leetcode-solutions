function totalWaviness(num1: number, num2: number): number {
    let total = 0;
    for (let num = num1; num <= num2; num++) {
        const n: string = num.toString();
        if (n.length < 3) 
            continue;
        
        for (let i = 1; i < n.length - 1; i++) {
            if ((n[i] > n[i - 1] && n[i] > n[i + 1]) || 
                (n[i] < n[i - 1] && n[i] < n[i + 1])) {
                total++;
            }
        }
    }
    return total;
};