function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
  // Bước 1: Xây dựng đồ thị dạng Adjacency List
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of invocations) {
    graph[u].push(v);
  }

  // Bước 2: Tìm tất cả phương thức nghi vấn bằng BFS xuất phát từ k
  const suspicious = new Set<number>();
  const queue: number[] = [k];
  suspicious.add(k);

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    for (const neighbor of graph[curr]) {
      if (!suspicious.has(neighbor)) {
        suspicious.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  // Bước 3: Kiểm tra xem có phương thức ngoài nhóm gọi vào phương thức nghi vấn không
  for (const [u, v] of invocations) {
    if (!suspicious.has(u) && suspicious.has(v)) {
      // Có phương thức không nghi vấn gọi tới phương thức nghi vấn -> Không thể xóa
      return Array.from({ length: n }, (_, i) => i);
    }
  }

  // Bước 4: Trả về danh sách các phương thức an toàn
  const remaining: number[] = [];
  for (let i = 0; i < n; i++) {
    if (!suspicious.has(i)) {
      remaining.push(i);
    }
  }

  return remaining;
}