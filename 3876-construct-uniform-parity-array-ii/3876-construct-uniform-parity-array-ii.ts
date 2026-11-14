function uniformArray(nums1: number[]): boolean {
    let min_odd = Infinity;

    for (const num of nums1) {
        if (num % 2 === 1)
            min_odd = Math.min(min_odd, num)
    }

    // all element is even -> true
    if (min_odd === Infinity)
        return true;

    // if exist: even element < smallest odd
    // cannot convert to odd -> false; 
    for (const num of nums1) {
        if (num % 2 === 0 && num < min_odd)
            return false;
    }

    return true;
};