function lemonadeChange(bills: number[]): boolean {
    const billMap = new Map<number, number>();
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5)             // 5
            billMap.set(5, (billMap.get(5) ?? 0) + 1);
        else if (bills[i] === 10) {     // 10
            if ((billMap.get(5) ?? 0) < 1) return false;
            billMap.set(10, (billMap.get(10) ?? 0) + 1);
            billMap.set(5, billMap.get(5) - 1);
        } else {                        // 20
            if ((billMap.get(10) ?? 0) > 0 && (billMap.get(5) ?? 0) > 0) {
                billMap.set(10, (billMap.get(10) ?? 0) - 1);
                billMap.set(5, billMap.get(5) - 1);
            }else if ((billMap.get(5) ?? 0) > 2) {
                billMap.set(5, billMap.get(5) - 3);
            } else {
                return false;
            }
        }
    }
    return true;
};