function hasSameDigits(s: string): boolean {
    const str = s.split('').map((item) => Number(item));
    let result = str;
    while (true) {
        if (result.length === 2) {
            if (result[0] === result[1])    return true;
            return false;
        }

        const curStr = result;
        result = [];

        for (let i = 0; i < curStr.length - 1; i++) {
            const item = (curStr[i] + curStr[i+1]) % 10;
            result.push(item);
        }
    } 
};