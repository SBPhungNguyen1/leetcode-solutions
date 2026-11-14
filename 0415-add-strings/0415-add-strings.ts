function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry) {
        const n1 = i >= 0 ? Number(num1[i]) : 0;
        const n2 = j >= 0 ? Number(num2[j]) : 0;

        const sum = n1 + n2 + carry;

        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return result;
}