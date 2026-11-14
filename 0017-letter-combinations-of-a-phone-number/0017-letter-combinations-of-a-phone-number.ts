function letterCombinations(digits: string): string[] {
    const phoneMap: Record<string, string> = {
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz',
    }
    const result: string[] = [];

    function backtrack(index: number, path: string): void {
        if (index === digits.length) {
        result.push(path);
        return;
        }

        const letters = phoneMap[digits[index]];
        for (const letter of letters) {
        backtrack(index + 1, path + letter);
        }
    }

    backtrack(0, '');
    return result;
};