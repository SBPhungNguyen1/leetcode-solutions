function winnerSquareGame(n: number): boolean {
  // dp[i] indicates if the player whose turn it is at 'i' stones will win
  const dp: boolean[] = new Array(n + 1).fill(false);

  for (let i = 1; i <= n; i++) {
    // Try all possible non-zero square numbers k * k <= i
    for (let k = 1; k * k <= i; k++) {
      if (!dp[i - k * k]) {
        dp[i] = true;
        break; // Winning move found, no need to check further squares
      }
    }
  }

  return dp[n];
}