function longestRepeating(s: string, queryCharacters: string, queryIndices: number[]): number[] {
    const n = s.length;
    const k = queryIndices.length;
    const strArr = s.split('');

    // Flat arrays to avoid object overhead and avoid LeetCode's built-in TreeNode conflict
    const maxLen = new Int32Array(4 * n);
    const prefLen = new Int32Array(4 * n);
    const suffLen = new Int32Array(4 * n);
    const leftChar = new Uint8Array(4 * n);
    const rightChar = new Uint8Array(4 * n);

    function pushUp(node: number, lLen: number, rLen: number): void {
        const leftChild = 2 * node;
        const rightChild = 2 * node + 1;

        leftChar[node] = leftChar[leftChild];
        rightChar[node] = rightChar[rightChild];

        let curMax = Math.max(maxLen[leftChild], maxLen[rightChild]);
        let curPref = prefLen[leftChild];
        let curSuff = suffLen[rightChild];

        // Merge middle segments if boundary characters match
        if (rightChar[leftChild] === leftChar[rightChild]) {
            curMax = Math.max(curMax, suffLen[leftChild] + prefLen[rightChild]);

            if (prefLen[leftChild] === lLen) {
                curPref = lLen + prefLen[rightChild];
            }

            if (suffLen[rightChild] === rLen) {
                curSuff = rLen + suffLen[leftChild];
            }
        }

        maxLen[node] = curMax;
        prefLen[node] = curPref;
        suffLen[node] = curSuff;
    }

    function build(node: number, start: number, end: number): void {
        if (start === end) {
            const charCode = strArr[start].charCodeAt(0);
            maxLen[node] = 1;
            prefLen[node] = 1;
            suffLen[node] = 1;
            leftChar[node] = charCode;
            rightChar[node] = charCode;
            return;
        }

        const mid = start + Math.floor((end - start) / 2);
        build(2 * node, start, mid);
        build(2 * node + 1, mid + 1, end);
        pushUp(node, mid - start + 1, end - mid);
    }

    function update(node: number, start: number, end: number, idx: number, charCode: number): void {
        if (start === end) {
            maxLen[node] = 1;
            prefLen[node] = 1;
            suffLen[node] = 1;
            leftChar[node] = charCode;
            rightChar[node] = charCode;
            return;
        }

        const mid = start + Math.floor((end - start) / 2);
        if (idx <= mid) {
            update(2 * node, start, mid, idx, charCode);
        } else {
            update(2 * node + 1, mid + 1, end, idx, charCode);
        }
        pushUp(node, mid - start + 1, end - mid);
    }

    build(1, 0, n - 1);

    const ans: number[] = new Array(k);

    for (let i = 0; i < k; i++) {
        const idx = queryIndices[i];
        const charCode = queryCharacters.charCodeAt(i);
        
        update(1, 0, n - 1, idx, charCode);
        ans[i] = maxLen[1];
    }

    return ans;
}