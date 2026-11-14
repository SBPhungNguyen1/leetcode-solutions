function reverseVowels(s: string): string {
    const strSet = new Set<string>(["a","i","u","e","o","A","I","U","E","O"]);
    const str = Array.from(s);
    let left = 0;
    let right = s.length-1;
    while (left < right) {
        while (left < right && !strSet.has(str[left])) {
            left++;
        }

        while (left < right && !strSet.has(str[right])) {
            right--;
        }
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
    console.log(str)
    return str.join("");
};