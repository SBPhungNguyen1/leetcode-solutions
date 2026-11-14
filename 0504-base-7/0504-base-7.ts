function convertToBase7(num: number): string {
    let s = 0;
    const flag = num < 0 ? -1 : 1;
    let curNum = Math.abs(num);
    let times = 1;
    while (curNum > 0) {
        const item = curNum % 7;
        s = s + item * times;
        times *= 10;
        curNum = Math.floor(curNum/7);
    }
    console.log(s*flag);
    return String(s*flag);
};