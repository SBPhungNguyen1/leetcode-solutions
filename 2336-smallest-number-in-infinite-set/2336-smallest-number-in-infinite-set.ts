class SmallestInfiniteSet {
    currentSmall: number = 1
    addedList: number[] = []

    constructor() {
        
    }

    popSmallest(): number {
        if (this.addedList.length) {
            return this.addedList.shift()
        } else {
            this.currentSmall = this.currentSmall + 1
            return this.currentSmall - 1
        }
    }

    addBack(num: number): void {
        if (num < this.currentSmall) {
            if(!this.addedList.includes(num)) {
                this.addedList.push(num)
                this.addedList = this.addedList.sort((a,b) => a - b)
            }
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */