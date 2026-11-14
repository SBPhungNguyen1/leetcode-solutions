class MyCalendar {
    private bookings: Array<[number, number]> = [];

    constructor() {}

    public book(start: number, end: number): boolean {
        for (const [s, e] of this.bookings) {
            if (start < e && end > s) {
                return false;
            }
        }
        this.bookings.push([start, end]);
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */