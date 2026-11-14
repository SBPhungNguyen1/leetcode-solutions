function countAndSay(n: number): string {
    let result = "1";
    for (let i = 1; i < n; i++)
        result = action(result);
    return result;
};

function action(s: string): string {
    let result = "";
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1])
            count++;
        else {
            result += count + s[i - 1];
            count = 1;
        }
    }
    result += count + s[s.length - 1];
    return result;
}