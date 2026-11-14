/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfSubtree(root: TreeNode | null): number {
    let matchCount = 0;

    function dfs(node: TreeNode | null): [number, number] {
        if (!node) {
            return [0, 0];
        }

        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);

        const currentSum = node.val + leftSum + rightSum;
        const currentCount = 1 + leftCount + rightCount;

        if (node.val === Math.floor(currentSum / currentCount)) {
            matchCount++;
        }

        return [currentSum, currentCount];
    }

    dfs(root);
    return matchCount;
}