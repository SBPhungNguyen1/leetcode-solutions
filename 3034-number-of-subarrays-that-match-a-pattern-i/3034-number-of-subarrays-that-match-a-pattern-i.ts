function countMatchingSubarrays(nums: number[], pattern: number[]): number {
    const rules = {
        [1]: (i: number, j: number) => j > i,
        [0]: (i: number, j: number) => j == i,
        [-1]: (i: number, j: number) => j < i
    }
    const patterRequiredNumbers = pattern.length + 1
    let res = 0
    for (let i = 0; i < nums.length - patterRequiredNumbers + 1; i++) {
        const sub = nums.slice(i, i + patterRequiredNumbers)
        let fitsPattern = true
        let index = 0
        while (fitsPattern && index < patterRequiredNumbers - 1) {
            if (!rules[pattern[index]](sub[index], sub[index + 1])) {
                fitsPattern = false
            }
            index++
        }
        if (fitsPattern) res++
    }
    return res
};