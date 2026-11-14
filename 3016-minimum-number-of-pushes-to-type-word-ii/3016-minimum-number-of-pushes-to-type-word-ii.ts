function minimumPushes(word: string): number {
  // 1. Đếm tần suất xuất hiện của từng ký tự ('a' - 'z')
  const freq = new Array<number>(26).fill(0);
  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i) - 97; // 'a' có charCode là 97
    freq[charCode]++;
  }

  // 2. Sắp xếp tần suất theo thứ tự giảm dần
  freq.sort((a, b) => b - a);

  // 3. Tính tổng số lần bấm
  let totalPushes = 0;

  for (let i = 0; i < 26; i++) {
    // Nếu tần suất bằng 0 nghĩa là các ký tự còn lại không xuất hiện trong word
    if (freq[i] === 0) break;

    // Công thức xác định số lần bấm cho ký tự thứ i:
    // 8 ký tự đầu (i: 0 -> 7)   => Math.floor(i / 8) + 1 = 1
    // 8 ký tự tiếp (i: 8 -> 15)  => Math.floor(i / 8) + 1 = 2
    // 8 ký tự tiếp (i: 16 -> 23) => Math.floor(i / 8) + 1 = 3
    // 2 ký tự cuối (i: 24 -> 25) => Math.floor(i / 8) + 1 = 4
    const pushCost = Math.floor(i / 8) + 1;

    totalPushes += freq[i] * pushCost;
  }

  return totalPushes;
}