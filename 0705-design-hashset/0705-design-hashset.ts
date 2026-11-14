class MyHashSet {
    private nums : number[] = []
    constructor() {
        
    }

    add(key: number): void {
        if (!this.contains(key)) {
            this.nums.push(key);
        }
    }

    remove(key: number): void {
        const index = this.nums.indexOf(key);
        if (index !== -1) {
            this.nums.splice(index, 1);
        }
    }

    contains(key: number): boolean {
        return this.nums.indexOf(key) !== -1;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */