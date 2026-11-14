function predictTheWinner(nums: number[]): boolean {
    const n = nums.length;
    // Bảng lưu kết quả đã tính để tránh tính lặp
    const memo: (number | null)[][] = Array.from({ length: n }, () => Array(n).fill(null));

    function getMaxDiff(i: number, j: number): number {
        // Trường hợp cơ sở: Chỉ còn 1 phần tử
        if (i === j) {
            return nums[i];
        }

        if (memo[i][j] !== null) {
            return memo[i][j]!;
        }

        // Chọn phần tử đầu (nums[i]) hoặc cuối (nums[j])
        const pickLeft = nums[i] - getMaxDiff(i + 1, j);
        const pickRight = nums[j] - getMaxDiff(i, j - 1);

        memo[i][j] = Math.max(pickLeft, pickRight);
        return memo[i][j]!;
    }

    return getMaxDiff(0, n - 1) >= 0;
}