function scoreOfParentheses(s: string): number {
    let par: number = 0
    let idx: number = 0
    let score: number = 0

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] == "(") {
            if (par == 0) idx = i
            par++
        } else {
            par--
            if (par == 0) {
                (i - idx == 1)
                    ? score++
                    : score += 2 * scoreOfParentheses(s.slice(idx + 1, i))
            }
        }
    }

    return score
};