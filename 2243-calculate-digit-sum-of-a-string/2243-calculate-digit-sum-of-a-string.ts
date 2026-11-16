function digitSum(s: string, k: number): string {
    let currentStr = s;

    while (currentStr.length > k) {
        let nextStr = "";

        for (let i = 0; i < currentStr.length; i += k) {
            let group = currentStr.slice(i, i + k);
            let sum = 0;
            
            for (let char of group) {
                sum += Number(char);
            }
            
            nextStr += sum;
        }

        currentStr = nextStr;
    }

    return currentStr;
}