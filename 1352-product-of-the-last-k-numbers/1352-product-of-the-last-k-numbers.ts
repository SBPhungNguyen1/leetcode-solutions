class ProductOfNumbers {
    private prefProduct = [];

    constructor() {
        this.prefProduct.push(1);
    }

    add(num: number): void {
        if (num === 0) {
            this.prefProduct = [1];
        } else {
            const last = this.prefProduct[this.prefProduct.length - 1];
            this.prefProduct.push(last * num);
        }
    }

    getProduct(k: number): number {
        const n = this.prefProduct.length;
        if (k >= n) {
            return 0;
        }
        return this.prefProduct[n - 1] / this.prefProduct[n - 1 - k];
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */