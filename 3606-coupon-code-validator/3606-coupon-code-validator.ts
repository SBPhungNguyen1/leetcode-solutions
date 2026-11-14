function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
    const categoryOrder: Record<string, number> = {
        "electronics": 0,
        "grocery": 1,
        "pharmacy": 2,
        "restaurant": 3
    };

    const validCodeRegex = /^[a-zA-Z0-9_]+$/;

    const validCoupons: { code: string; categoryRank: number }[] = [];

    const n = code.length;
    for (let i = 0; i < n; i++) {
        if (!isActive[i]) continue;

        if (!(businessLine[i] in categoryOrder)) continue;

        if (!validCodeRegex.test(code[i])) continue;

        validCoupons.push({code: code[i], categoryRank: categoryOrder[businessLine[i]]});
    }

    validCoupons.sort((a, b) => {
        if (a.categoryRank !== b.categoryRank) {
            return a.categoryRank - b.categoryRank;
        }
        if (a.code < b.code) return -1;
        if (a.code > b.code) return 1;
        return 0;
    });

    return validCoupons.map(coupon => coupon.code);
};