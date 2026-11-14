function licenseKeyFormatting(s: string, k: number): string {
    const newS = s
        .split("")
        .filter(item => item !== "-");

    const arr: string[] = [];

    let i = newS.length - 1;

    while (i >= 0) {
        let count = 0;

        while (i >= 0 && count < k) {
            arr.push(newS[i]);
            i--;
            count++;
        }

        if (i >= 0) {
            arr.push("-");
        }
    }

    return arr.reverse().join("").toUpperCase();
}