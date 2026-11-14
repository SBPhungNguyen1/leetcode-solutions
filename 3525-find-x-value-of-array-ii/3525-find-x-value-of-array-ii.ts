class Data {
    pre: number[];
    mul: number;
    static k: number;

    constructor(mul: number) {
        this.pre = new Array(Data.k).fill(0);
        this.mul = mul % Data.k;
    }

    static getMergedData(d1: Data | null, d2: Data | null): Data | null {
        if (d1 === null) return d2;
        if (d2 === null) return d1;

        const d = new Data(d1.mul * d2.mul);
        for (let i = 0; i < Data.k; i++) {
            d.pre[i] = d1.pre[i];
        }
        for (let i = 0; i < Data.k; i++) {
            d.pre[(d1.mul * i) % Data.k] += d2.pre[i];
        }
        return d;
    }
}

class SegmentTree {
    private tree: (Data | null)[];
    private arr: number[];
    private len: number;

    constructor(arr: number[], k: number) {
        this.arr = [...arr];
        this.len = arr.length;

        let i = 1;
        while (i < this.len) {
            i <<= 1;
        }

        this.tree = new Array(i * 2 - 1).fill(null);
        this.build(0, 0, this.arr.length - 1, this.arr);
    }

    public getArray(): number[] {
        return this.arr;
    }

    public query(l: number, r: number): Data {
        if (l > r) {
            throw new Error("l is bigger than r");
        }
        if (l < 0 || r >= this.len) {
            throw new Error(`Invalid index values. l: ${l} r: ${r}`);
        }
        return this.queryHelper(0, this.len - 1, 0, l, r)!;
    }

    public setVal(i: number, newVal: number): void {
        if (i < 0 || i >= this.len) {
            throw new Error(`Invalid index. i: ${i}`);
        }
        if (this.arr[i] % Data.k === newVal % Data.k) {
            return;
        }
        this.arr[i] = newVal;
        this.updateHelper(0, this.len - 1, 0, newVal, i);
    }

    private build(i: number, left: number, right: number, arr: number[]): void {
        if (left === right) {
            this.tree[i] = new Data(arr[left]);
            for (let j = 0; j < Data.k; j++) {
                this.tree[i]!.pre[j] = arr[left] % Data.k === j ? 1 : 0;
            }
            return;
        }

        const mid = (left + right) >> 1;
        this.build(2 * i + 1, left, mid, arr);
        this.build(2 * i + 2, mid + 1, right, arr);
        this.tree[i] = Data.getMergedData(this.tree[2 * i + 1], this.tree[2 * i + 2]);
    }

    private queryHelper(l: number, r: number, i: number, lq: number, rq: number): Data | null {
        if (l >= lq && r <= rq) {
            return this.tree[i];
        }
        if (lq > r || rq < l) {
            return null;
        }

        const mid = (l + r) >> 1;
        return Data.getMergedData(
            this.queryHelper(l, mid, 2 * i + 1, lq, rq),
            this.queryHelper(mid + 1, r, 2 * i + 2, lq, rq)
        );
    }

    private updateHelper(l: number, r: number, i: number, newVal: number, indexToUpdate: number): void {
        if (l === r) {
            for (let j = 0; j < Data.k; j++) {
                this.tree[i]!.pre[j] = newVal % Data.k === j ? 1 : 0;
            }
            this.tree[i]!.mul = newVal % Data.k;
            return;
        }

        const mid = (l + r) >> 1;
        if (indexToUpdate <= mid) {
            this.updateHelper(l, mid, 2 * i + 1, newVal, indexToUpdate);
        } else {
            this.updateHelper(mid + 1, r, 2 * i + 2, newVal, indexToUpdate);
        }

        this.tree[i] = Data.getMergedData(this.tree[2 * i + 1], this.tree[2 * i + 2]);
    }
}

function resultArray(nums: number[], k: number, queries: number[][]): number[] {
    Data.k = k;
    const st = new SegmentTree(nums, k);
    const ans: number[] = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        const q = queries[i];
        st.setVal(q[0], q[1]);
        ans[i] = st.query(q[2], nums.length - 1).pre[q[3]];
    }

    return ans;
}