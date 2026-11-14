function canThreePartsEqualSum(arr: number[]): boolean {
    const total = arr.reduce((sum, item) => sum + item, 0);
    console.log(total);
    if (total % 3 !== 0) return false;
    
    const target = total / 3;
    let currentSum = 0;
    let partsCount = 0;
    
    for (const num of arr) {
        currentSum += num;
        if (currentSum === target) {
            partsCount++;
            currentSum = 0;
        }
    }
    
    return partsCount >= 3;
};