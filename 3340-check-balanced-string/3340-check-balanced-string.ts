function isBalanced(num: string): boolean {
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < num.length; i++) {
        const item = Number(num[i]);
        
        if (i % 2 === 0)
            sumEven += item;
        else
            sumOdd += item;

    }
    return sumOdd === sumEven;
};