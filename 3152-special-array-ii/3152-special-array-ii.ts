function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  let map: Record<number, number> = {};
  let subarray = 1;
  map[0] = subarray;

  let last = nums[0] % 2;
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i] % 2;
    if (last == current) {
      subarray++; 
    }

    map[i] = subarray;

    last = current;
  }

  let result = [];
  for (let query of queries) {
    let [from, to] = query;
    result.push(map[from] === map[to]);
  }
  return result;
}