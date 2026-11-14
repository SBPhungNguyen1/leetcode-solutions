function beautifulIndices(s: string, a: string, b: string, k: number): number[] {
    const firstWordIdxQueue = []
    const output = []
    let left = 0
    while (left <= s.length - a.length) {
        const firstWord = s.slice(left,left + a.length)
        if (firstWord === a) {
            firstWordIdxQueue.push(left)
        }
        left++
    }

    left = 0
    while (left <= s.length - b.length) {
        const secondWord = s.slice(left, left + b.length)
        if (secondWord === b) {
            while (firstWordIdxQueue.length) {
                const firstWordIdx = firstWordIdxQueue.shift()
                if (Math.abs(left - firstWordIdx) <= k) {
                    output.push(firstWordIdx)
                } else if (left < firstWordIdx) {
                    firstWordIdxQueue.unshift(firstWordIdx)
                    break
                }
            }
        }
        left++
    }
    return output
};