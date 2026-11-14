function transpose(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0].length;

  // Initialize an n x m matrix
  const transposed: number[][] = Array.from({ length: n }, () =>
    new Array(m)
  );

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      transposed[c][r] = matrix[r][c];
    }
  }

  return transposed;
}