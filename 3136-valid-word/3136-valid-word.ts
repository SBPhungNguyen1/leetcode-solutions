function isValid(word: string): boolean {
    const hasVowel = /[aeiou]/i.test(word);
    const hasConsonant = /[bcdfghjklmnpqrstvwxyz]/i.test(word);
    const isAlphanumeric = /^[a-zA-Z0-9]+$/.test(word); 
    return hasVowel && hasConsonant && word.length >= 3 && isAlphanumeric;
};