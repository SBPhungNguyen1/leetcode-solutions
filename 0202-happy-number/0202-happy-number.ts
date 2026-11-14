function isHappy(n: number): boolean {
    let start;
    if (n > 9) start = n;
    else start = n*n;
    var i = 0;
    while (i<100) {
        let arr = Array.from(String(start), Number);
        let sum = 0;
        for (const item of arr) {
            sum = sum + item*item;
        }
        console.log(sum)
        start = sum;
        if (start === 1) return true
        i++;
    }

    return false
};