function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Đảm bảo nums1 luôn là mảng nhỏ hơn để tối ưu thời gian tìm kiếm nhị phân O(log(min(N, M)))
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    const halfLen = Math.floor((m + n + 1) / 2);

    let low = 0;
    let high = m;

    while (low <= high) {
        const i = Math.floor((low + high) / 2); // Điểm chia trên nums1
        const j = halfLen - i;                 // Điểm chia trên nums2

        // Xác định các giá trị biên quanh điểm chia
        const maxLeft1 = (i === 0) ? -Infinity : nums1[i - 1];
        const minRight1 = (i === m) ? Infinity : nums1[i];

        const maxLeft2 = (j === 0) ? -Infinity : nums2[j - 1];
        const minRight2 = (j === n) ? Infinity : nums2[j];

        // Kiểm tra xem điểm chia đã chính xác chưa
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Nếu tổng số phần tử là LẺ
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            }
            // Nếu tổng số phần tử là CHẴN
            return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
        } 
        // Nếu phần nửa trái của nums1 quá lớn, cần dịch chuyển vạch chia sang trái
        else if (maxLeft1 > minRight2) {
            high = i - 1;
        } 
        // Nếu phần nửa trái của nums1 quá nhỏ, cần dịch chuyển vạch chia sang phải
        else {
            low = i + 1;
        }
    }

    return 0;
}