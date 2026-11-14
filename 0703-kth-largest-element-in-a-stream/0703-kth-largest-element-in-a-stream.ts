class KthLargest {
    private nums: number[]
    private k: number

    constructor(k: number, nums: number[]) {
        this.nums = nums.sort((a, b) => b-a).slice(0,k); //max - min & keep the k-th
        this.k = k;
    }

    add(val: number): number {
        let i = 0;
        while (i < this.nums.length && this.nums[i] > val) 
            i++;
        this.nums.splice(i,0,val); // Insert & maintain the order

        if (this.nums.length > this.k) {
            this.nums.pop();
        }

        return this.nums[this.k - 1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */