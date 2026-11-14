function myAtoi(s: string): number {
    s = s.trim();
    if (s.length === 0) return 0;

    let index = 0;
    let sign = 1;

    if (s[index] === '-') {
        sign = -1;
        index++;
    } else if (s[index] === '+') {
        index++;
    }

    let result = 0;
    const INT_MAX = 2147483647;  // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31

    // 2. Duyệt qua từng ký tự cho đến khi gặp ký tự không phải số
    while (index < s.length) {
        const char = s[index];
        
        // Dừng lại nếu gặp ký tự không phải chữ số (0-9)
        if (char < '0' || char > '9') {
            break;
        }

        const digit = char.charCodeAt(0) - '0'.charCodeAt(0);

        // 3. Xây dựng số nguyên bằng phép toán số học
        result = result * 10 + digit;

        index++;
    }

    // Gán dấu cho kết quả
    result *= sign;

    // 4. Xử lý giới hạn số nguyên 32-bit (Clamping)
    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;

    return result;
}