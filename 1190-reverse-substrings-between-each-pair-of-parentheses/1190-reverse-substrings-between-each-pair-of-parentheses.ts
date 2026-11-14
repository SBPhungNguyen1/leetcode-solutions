function reverseParentheses(s: string): string {
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {

        // if current element of s is ")"
        if (s[i] === ")") {

            let tempArr: string[] = [];

            // run while loop until last element of stack is not equal t0 "("
            while (stack.at(-1) !== "(") {
                tempArr.push(stack.pop());
            }

            stack.pop();

            // push all element of tempARr in stack
            stack.push(...tempArr);

        } else {

            // else push every element in stack
            stack.push(s[i]);
        }
    }

    return stack.join("");
};