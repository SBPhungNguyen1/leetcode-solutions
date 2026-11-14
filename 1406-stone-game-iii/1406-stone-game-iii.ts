function stoneGameIII(stoneValue: number[]): string {
    const n = stoneValue.length;
    // dp[i] lưu chênh lệch điểm tối đa (Điểm người chơi hiện tại - Điểm đối thủ) 
    // tính từ vị trí i đến hết mảng.
    const dp: number[] = new Array(n + 1).fill(0);

    // Duyệt ngược từ cuối mảng lên đầu mảng
    for (let i = n - 1; i >= 0; i--) {
        let maxDiff = -Infinity;
        let currentSum = 0;

        // Lựa chọn lấy 1, 2, hoặc 3 hòn đá (nếu còn đủ đá)
        for (let k = 1; k <= 3 && i + k <= n; k++) {
            currentSum += stoneValue[i + k - 1];
            // Điểm thu về = Tổng điểm đá vừa lấy - Chênh lệch điểm tối đa của lượt tiếp theo
            maxDiff = Math.max(maxDiff, currentSum - dp[i + k]);
        }

        dp[i] = maxDiff;
    }

    // Kết quả tại vị trí bắt đầu (i = 0) cho lượt đi đầu tiên của Alice
    if (dp[0] > 0) return "Alice";
    if (dp[0] < 0) return "Bob";
    return "Tie";
}