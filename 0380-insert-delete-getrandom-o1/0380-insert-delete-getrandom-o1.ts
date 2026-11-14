class RandomizedSet {
    private nums: number[];
    private valToIndex: Map<number, number>;

    constructor() {
        this.nums = [];
        this.valToIndex = new Map<number, number>();
    }

    insert(val: number): boolean {
        if (this.valToIndex.has(val)) {
            return false;
        }

        this.valToIndex.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.valToIndex.has(val)) {
            return false;
        }

        const indexToRemove = this.valToIndex.get(val)!;
        const lastElement = this.nums[this.nums.length - 1];

        this.nums[indexToRemove] = lastElement;
        this.valToIndex.set(lastElement, indexToRemove);

        this.nums.pop();
        this.valToIndex.delete(val);

        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */