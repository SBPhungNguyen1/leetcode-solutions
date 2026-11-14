(async function exportToJSON() {
  const extMap = {
    python: "py",
    python3: "py",
    cpp: "cpp",
    c: "c",
    java: "java",
    javascript: "js",
    typescript: "ts",
    csharp: "cs",
    golang: "go",
    rust: "rs",
    kotlin: "kt",
  };

  let offset = 0;
  const limit = 20;
  const results = {};
  console.log("🚀 Bắt đầu gom toàn bộ bài Accepted...");

  while (true) {
    const res = await fetch(
      `/api/submissions/?offset=${offset}&limit=${limit}`
    );
    if (!res.ok) {
      console.error(`⚠️ Dừng tại offset ${offset} (Lỗi HTTP ${res.status})`);
      break;
    }
    const data = await res.json();
    const subs = data.submissions_dump || [];
    if (subs.length === 0) break;

    for (const sub of subs) {
      if (sub.status_display === "Accepted" && !results[sub.title_slug]) {
        const ext = extMap[sub.lang] || "txt";
        results[sub.title_slug] = {
          filename: `solution.${ext}`,
          code: sub.code,
        };
        console.log(
          `[${Object.keys(results).length}] Đã lấy: ${sub.title_slug}`
        );
      }
    }

    if (!data.has_next) break;
    offset += limit;
    await new Promise((r) => setTimeout(r, 1500));
  }

  const blob = new Blob([JSON.stringify(results, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "leetcode_backup.json";
  a.click();
  console.log(
    `✅ Xong! Đã tải xuống file leetcode_backup.json chứa ${
      Object.keys(results).length
    } bài.`
  );
})();
