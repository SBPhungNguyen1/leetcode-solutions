function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  if (s === goal) {
    const uniqueChars = new Set(s);
    return uniqueChars.size < s.length;
  }

  const diffIndices: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffIndices.push(i);
      if (diffIndices.length > 2) return false;
    }
  }

  if (diffIndices.length !== 2) return false;

  const [first, second] = diffIndices;
  return s[first] === goal[second] && s[second] === goal[first];
}