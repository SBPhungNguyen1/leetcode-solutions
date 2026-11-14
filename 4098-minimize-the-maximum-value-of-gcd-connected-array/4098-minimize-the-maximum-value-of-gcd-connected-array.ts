function minimumMaxValue(n: number, index: number, value: number): number {
    function setSPF(num: number) : number {
        if (num < 1) return num;
        for (let i = 2; i * i <= num; i++)
            if (num % i === 0)
                return i;
        return num;
    }

    const spf = setSPF(value);

    if (index > 0) {
        if (spf === value)
            return -1;

        const maxLeft = value % 2 === 0 ? value / 2 - 1 : (value - spf) / 2;
        if (index > maxLeft)
            return -1;
    }

    const rightC = n - index - 1;
    
    if (rightC === 0)
        return value;

    if (value === 1)
        return -1;

    return value + spf + 2 * (rightC - 1);
};