function selfDividingNumbers(left: number, right: number): number[] {
    const arr: number[] = [];
    for (let num = left; num <= right; num++) {
        const numString = String(num);
        console.log(numString);
        if (numString.includes('0'))
            continue;
        let flag = 0;
        for (let i = 0; i < numString.length; i++) {

            if (num % Number(numString[i]) !== 0) {
                flag = 1;
                break;
            }
        }
        if (flag === 1) continue;
        arr.push(num);
    }
    return arr;
};