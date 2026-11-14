function doesSuffixMatchPrefix(word: string, startIndex: number): boolean {
    for (let i = startIndex, j = 0; i < word.length; i++, j++) {
        if (word[i] !== word[j]) {
            return false;
        }
    }
    return true;
}

function minimumTimeToInitialState(word: string, k: number): number {
    let steps = 1;
    let position = k;

    while (position < word.length) {
        if (doesSuffixMatchPrefix(word, position)) {
            break;
        }
        steps++;
        position += k;
    }

    return steps;
}