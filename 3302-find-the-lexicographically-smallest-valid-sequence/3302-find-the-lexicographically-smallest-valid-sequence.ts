function validSequence(word1: string, word2: string): number[] {
    const n = word1.length;
    const m = word2.length;

    // last[j] lưu chỉ số lớn nhất trong word1 có thể khớp khớp với word2[j] (khớp hoàn toàn không sửa đổi từ cuối lên)
    const last = new Array<number>(m).fill(-1);
    
    let j = m - 1;
    for (let i = n - 1; i >= 0 && j >= 0; i--) {
        if (word1[i] === word2[j]) {
            last[j] = i;
            j--;
        }
    }

    const result: number[] = [];
    let changed = false; // Đánh dấu đã sử dụng 1 lần thay đổi ký tự hay chưa
    let i = 0;           // Vị trí con trỏ hiện tại trên word1
    
    j = 0;               // Con trỏ hiện tại trên word2

    while (j < m && i < n) {
        // Trường hợp 1: Ký tự giống nhau
        if (word1[i] === word2[j]) {
            result.push(i);
            i++;
            j++;
        } 
        // Trường hợp 2: Ký tự khác nhau nhưng chưa dùng quyền sửa đổi
        else if (!changed) {
            // Kiểm tra xem đoạn còn lại word2[j+1...m-1] có khớp được với word1 ở sau vị trí i hay không
            // Nếu j === m - 1, nghĩa là đây là ký tự cuối, ta không cần kiểm tra đoạn sau.
            if (j === m - 1 || last[j + 1] > i) {
                result.push(i);
                changed = true; // Đánh dấu đã dùng quyền sửa đổi
                i++;
                j++;
            } else {
                i++; // Thử vị trí tiếp theo trong word1
            }
        } 
        // Trường hợp 3: Khác nhau và đã hết quyền sửa đổi
        else {
            i++; // Tiếp tục tìm vị trí khớp tiếp theo trong word1
        }
    }

    // Nếu tìm đủ m chỉ số thỏa mãn
    return result.length === m ? result : [];
}