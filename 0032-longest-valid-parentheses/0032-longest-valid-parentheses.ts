function longestValidParentheses(s: string): number {
    const st: number[] = [];
    let maxLength = 0;

    st.push(-1);

    for (let i = 0; i < s.length; i++) {
      const c = s[i];

      if (c === "(") {
        st.push(i);
      } else {
        st.pop();

        if (st.length === 0) {
          st.push(i);
        } else {
          maxLength = Math.max(maxLength, i - st[st.length - 1]);
        }
      }
    }

    return maxLength;
};