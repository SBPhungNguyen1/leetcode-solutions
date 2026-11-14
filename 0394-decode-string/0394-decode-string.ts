function decodeString(s: string): string {
    let stack: [string, string][] = [];
    let currentNumber: string = "";
    let currentString: string = "";

    for (const character of s) {
        console.log(character);
        if (isNaN(Number(character)) === false) {
            currentNumber += character;
        } else {
            if (character === "[") {
                stack.push([currentNumber, currentString]);
                currentString = "";
                currentNumber = "";
            } else if (character === "]") {
                const [num, prevString] = stack.pop();
                currentString = prevString + currentString.repeat(Number(num));
                currentNumber = "";
            } else {
                currentString += character;
            }
        }
    }

    return currentString;
};