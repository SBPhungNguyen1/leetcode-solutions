function checkSubarraySum(nums: number[], k: number): boolean {
    // Map save: remainder -> first index
    const remainderMap = new Map<number, number>();
    
    // ini remainder 0 at -1:
    // Xử lý trường hợp mảng con hợp lệ bắt đầu ngay từ index 0
    remainderMap.set(0, -1);

    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const remainder = prefixSum % k;

        if (remainderMap.has(remainder)) {
            const prevIndex = remainderMap.get(remainder)!;
            // Yêu cầu độ dài mảng con tối thiểu là 2
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            // Chỉ ghi nhận vị trí xuất hiện ĐẦU TIÊN
            // Không ghi đè để giữ khoảng cách (i - prevIndex) là lớn nhất có thể
            remainderMap.set(remainder, i);
        }
    }

    return false;
}; 