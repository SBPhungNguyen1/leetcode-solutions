function binaryGap(n: number): number {
    const str = n.toString(2);
    console.log(str);
    let count = 0;
    let countNo = 0;
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count++;
        } else {
            max = Math.max(max, count);
            count=0;
            countNo++;
        }
    }
    return (countNo < 2) ? 0 :  max+1;
};