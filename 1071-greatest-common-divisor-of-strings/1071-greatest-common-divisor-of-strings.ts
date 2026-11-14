function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 != str2 + str1) return "";
    const minLength = Math.min(str1.length, str2.length);
    let i = minLength;
    while (i > 0) {
        if (str1.length % i === 0 && str2.length % i === 0)
            return str1.substring(0, i);
        i--;
    }
    return "";
};