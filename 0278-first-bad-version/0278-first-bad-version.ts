/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        if (n===1) return 1;
        if (isBadVersion(1) === true) return 1
        let left = 1; //1
        let right = n; //4
        while (true) {
            let mid = Math.floor((left+right)/2); //3
            let curMidStatus = isBadVersion(mid);
            let nextMidStatus = isBadVersion(mid+1);
            if (curMidStatus === false && nextMidStatus === true) return mid+1;
            else if (curMidStatus === false) {
                left = mid+1;
            }else {
                right = mid;
            }
        }
    };
};