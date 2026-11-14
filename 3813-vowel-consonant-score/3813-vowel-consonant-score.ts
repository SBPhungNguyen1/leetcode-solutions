function vowelConsonantScore(s: string): number {
    const vowels = 'aiueo';
    const consonants = 'qwrtypsdfghjklzxcvbnm';
    let countV = 0;
    let countC = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i]))
            countV++;
        else if (consonants.includes(s[i]))
            countC++;
    }
    if (countC === 0) return 0;
    return Math.floor(countV / countC);
};