function longestPalindrome(s: string): string {
  if (!s || s.length < 1) return "";
    
    let start = 0; // Lưu vị trí bắt đầu của chuỗi dài nhất
    let maxLength = 0; // Lưu độ dài của chuỗi dài nhất

    // Hàm trợ giúp mở rộng từ tâm
    function expand(L: number, R: number): number {
        while (L >= 0 && R < s.length && s[L] === s[R]) {
            L--;
            R++;
        }
        return R - L - 1; // Trả về độ dài chuỗi tìm được
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = expand(i, i);     // Tâm lẻ (ví dụ: "aba")
        let len2 = expand(i, i + 1); // Tâm chẵn (ví dụ: "abba")
        let len = Math.max(len1, len2);

        // Nếu tìm thấy chuỗi dài hơn, cập nhật lại start và maxLength
        if (len > maxLength) {
            maxLength = len;
            // Công thức tính lại điểm start từ tâm i và độ dài len
            start = i - Math.floor((len - 1) / 2); 
        }
    }

    // Cắt chuỗi kết quả và trả về string
    return s.substring(start, start + maxLength);
};