function getHint(secret: string, guess: string): string {
    let secretArr = secret.split('');
    let guessArr = guess.split('');

    let countMap = new Map<string, number>();

    let A: string[] = [];
    let B: string[] = [];

    for (let i = 0; i < secretArr.length; i++) {
        if (secretArr[i] === guessArr[i]) {
            A.push(secretArr[i]); // bull
        } else {
            countMap.set(secretArr[i], (countMap.get(secretArr[i]) || 0) + 1);
        }
    }

    for (let i = 0; i < guessArr.length; i++) {
        if (secretArr[i] === guessArr[i]) continue;

        const g = guessArr[i];
        if ((countMap.get(g) || 0) > 0) {
            B.push(g);
            countMap.set(g, (countMap.get(g) as number) - 1);
        }
    }

    return A.length + 'A' + B.length + 'B';

};