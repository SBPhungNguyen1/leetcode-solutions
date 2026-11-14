const isDigitorialPermutation = (n: number): boolean => {
    const MAX_DIGIT = 10;
    
    const factorials: number[] = [1];
    for (let i = 1; i <= MAX_DIGIT; i++) {
        factorials[i] = factorials[i - 1] * i;
    }
    
    let factorialSum = 0;
    const nDigitFrequency = new Array(MAX_DIGIT).fill(0);
    
    for (const digitChar of n.toString()) {
        const digit = +digitChar;
        factorialSum += factorials[digit];
        nDigitFrequency[digit]++;
    }
    
    const sumDigitFrequency = new Array(MAX_DIGIT).fill(0);
    for (const digitChar of factorialSum.toString()) {
        sumDigitFrequency[+digitChar]++;
    }
    
    for (let digit = 0; digit < MAX_DIGIT; digit++) {
        if (nDigitFrequency[digit] !== sumDigitFrequency[digit]) return false;
    }
    
    return true;
};