function dayOfYear(date: string): number {
    const months = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    const arr = date.split("-");
    let result = Number(arr[2]);
    for (let i = 1; i < Number(arr[1]); i++) {
        result += months[i];
    }
    if (Number(arr[1]) > 2 && leapYear(Number(arr[0])))
        result += 1;
    return result;
};

function leapYear(year: number) : boolean {
    if (year % 400 == 0 || (year % 4 === 0 && year % 100 !== 0))
        return true;
    return false;
}