const countInvalidParentheses = (s:string): number => {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') stack.push(s[i]);

        else if(s[i] === ')') {
            // if last item of stack is '(', it's valid parentheses
            // so pop a last element from the stack
            if(stack[stack.length - 1] === '(') stack.pop();
            else stack.push(s[i]);
        }
    }
    return stack.length;
};

function removeInvalidParentheses(s: string): string[] {
    const answer = [];
    const removeCount = countInvalidParentheses(s);
    // check if s has been checked
    const memoize = new Set();

    const dfs = (ns: string, count: number, idx: number) => {
        if(count === 0) {
            // check if ns is valid 
            if(countInvalidParentheses(ns) === 0) answer.push(ns);

        } else {
            for(let i = idx; i < ns.length; i++) {
                // remove only s[i] is parentheses 
                if(ns[i] ==='(' || ns[i] === ')') {
                    const next = ns.slice(0, i) + ns.slice(i+1);
                    
                    // return if count is less than zero
                    if(count - 1 < 0 ) return;

                    // if 'next' has been visited, don't go through dfs again
                    if(memoize.has(next)) continue;
                    memoize.add(next);
                    dfs(next, count-1, i);
                }
            }
        }
    };

    dfs(s, removeCount, 0);    
    return answer;
};