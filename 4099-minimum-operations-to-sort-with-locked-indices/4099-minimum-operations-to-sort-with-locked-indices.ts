function minOperations(nums: number[], locked: number[], k: number): number {
    const n = nums.length;
    
    let prefMax = 0;
    let unlockC = 0;

    for (let i = 0; i < n; i++) {
        prefMax = Math.max(prefMax, nums[i]);
        if (locked[i] === 1)
            if (nums[i] !== i + 1 || prefMax !== i + 1)
                unlockC++;
    }

    if (unlockC > k)
        return -1;

    function countInversion(arr: number[]) : number {
        const temp = new Array(n);
        function mergeSort(left: number, right: number) : number {
            if (left >= right) 
                return 0;

            const mid = Math.floor((left + right) / 2);

            let count = 0;

            count += mergeSort(left, mid);
            count += mergeSort(mid + 1, right);

            let i = left;
            let j = mid + 1;
            let p = left;

            while (i <= mid && j <= right) {
                if (arr[i] <= arr[j])
                    temp[p++] = arr[i++];
                else {
                    temp[p++] = arr[j++];
                    count += mid - i + 1;
                }
            }
            
            while (i <= mid)
                temp[p++] = arr[i++];
            
            while (j <= right)
                temp[p++] = arr[j++];

            for (let x = left; x <= right; x++)
                arr[x] = temp[x];

            return count;
        }

        return mergeSort(0, n - 1);
    }

    const swapC = countInversion([...nums]);
    return unlockC + swapC;
};