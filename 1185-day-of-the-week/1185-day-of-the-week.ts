function dayOfTheWeek(day: number, month: number, year: number): string {
    // 1971 - 2100
    const months = [0,31,28,31,30,31,30,31,31,30,31,30,31];

    // as Jan 1 1971 = Friday
    const days = ["Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday"];
    let gap = (year - 1971) * 365 + day;
    for (let i = 1; i < month; i++)
        gap += months[i];

    for (let i = 1971; i < year; i++)
        if (leapYear(i))
            gap++;

    if (leapYear(year) && month > 2)
        gap++;

    const index = gap % 7;
    return days[index];
};

function leapYear (year: number): boolean {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
        return true;
    return false;
}