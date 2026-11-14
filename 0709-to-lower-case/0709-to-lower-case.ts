function toLowerCase(s: string): string {
    let arr : string = '';
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            arr = arr + String.fromCharCode((s.charCodeAt(i) + 32));
            console.log(arr);
        } else {
            arr = arr + s[i];
        }
    }
    return arr;
};