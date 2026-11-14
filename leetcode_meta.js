(async function downloadProblemsMeta() {
  console.log("🌐 Đang tải bảng ID và độ khó toàn bộ bài tập...");
  const res = await fetch("/api/problems/all/");
  if (!res.ok) {
    console.error("❌ Lỗi tải danh sách:", res.status);
    return;
  }
  const data = await res.json();
  const diffMap = { 1: "Easy", 2: "Medium", 3: "Hard" };
  const meta = {};
  for (const item of data.stat_status_pairs) {
    const stat = item.stat;
    meta[stat.question__title_slug] = {
      id: String(stat.frontend_question_id).padStart(4, "0"),
      title: stat.question__title,
      difficulty: diffMap[item.difficulty.level] || "Medium",
    };
  }
  const blob = new Blob([JSON.stringify(meta, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "leetcode_meta.json";
  a.click();
  console.log(
    `✅ Xong! Đã tải file leetcode_meta.json (${Object.keys(meta).length} bài).`
  );
})();
