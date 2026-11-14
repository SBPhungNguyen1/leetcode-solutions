# import os
# import glob
# import json
# import time
# import requests

# # 1. Gom dữ liệu từ tất cả các file .json trong thư mục hiện tại
# all_submissions = {}
# for json_file in glob.glob("*.json"):
#     with open(json_file, "r", encoding="utf-8") as f:
#         data = json.load(f)
#         all_submissions.update(data)

# print(f"📦 Tìm thấy tổng cộng {len(all_submissions)} bài từ các file JSON.")

# # 2. Lấy bảng ánh xạ slug -> (id, title, difficulty) từ API danh sách bài tập công khai của LeetCode
# print("🌐 Đang tải danh sách ID và độ khó các bài tập từ LeetCode...")
# problems_meta = {}
# res = requests.get("https://leetcode.com", headers={
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
# })

# if res.status_code == 200:
#     stat_pairs = res.json().get("stat_status_pairs", [])
#     diff_map = {1: "Easy", 2: "Medium", 3: "Hard"}
#     for item in stat_pairs:
#         stat = item["stat"]
#         slug = stat["question__title_slug"]
#         q_id = str(stat["frontend_question_id"]).zfill(4)
#         title = stat["question__title"]
#         diff = diff_map.get(item["difficulty"]["level"], "Medium")
#         problems_meta[slug] = {"id": q_id, "title": title, "difficulty": diff}
# else:
#     print(f"⚠️ Không lấy được danh sách ID (HTTP {res.status_code}), sẽ dùng tên slug mặc định.")

# # 3. Hàm lấy nội dung đề bài HTML qua GraphQL công khai
# def get_problem_content(slug):
#     query = """
#     query questionContent($titleSlug: String!) {
#       question(titleSlug: $titleSlug) {
#         content
#       }
#     }
#     """
#     try:
#         r = requests.post(
#             "https://leetcode.com",
#             json={"query": query, "variables": {"titleSlug": slug}},
#             headers={"User-Agent": "Mozilla/5.0", "Content-Type": "application/json"},
#             timeout=10
#         )
#         if r.status_code == 200:
#             return r.json().get("data", {}).get("question", {}).get("content") or ""
#     except Exception:
#         pass
#     return ""

# # 4. Tạo thư mục, file code và README.md theo chuẩn LeetHub 3.0
# count = 0
# for slug, info in all_submissions.items():
#     meta = problems_meta.get(slug)
#     if meta:
#         folder_name = f"{meta['id']}-{slug}"
#         title_display = f"{int(meta['id'])}. {meta['title']}"
#         diff_display = meta["difficulty"]
#     else:
#         folder_name = slug
#         title_display = slug
#         diff_display = "Unknown"

#     os.makedirs(folder_name, exist_ok=True)

#     # Lấy đuôi file (.java, .ts, .py, .sql...)
#     ext = info["filename"].split(".")[-1]
#     if ext == "txt" and "-- Write your" in info["code"]:
#         ext = "sql" # Tự động chuyển các bài SQL từ .txt sang .sql chuẩn LeetHub

#     code_filepath = os.path.join(folder_name, f"{folder_name}.{ext}")
#     with open(code_filepath, "w", encoding="utf-8") as cf:
#         cf.write(info["code"])

#     # Tạo file README.md chuẩn LeetHub 3.0
#     readme_filepath = os.path.join(folder_name, "README.md")
#     if not os.path.exists(readme_filepath):
#         html_content = get_problem_content(slug)
#         readme_text = (
#             f"<h2><a href=\"https://leetcode.com{slug}\">{title_display}</a></h2>"
#             f"<h3>{diff_display}</h3><hr><div>{html_content}</div>"
#         )
#         with open(readme_filepath, "w", encoding="utf-8") as rf:
#             rf.write(readme_text)
#         time.sleep(0.3) # Nghỉ nhẹ 0.3s giữa mỗi bài để tải đề bài mượt mà

#     count += 1
#     if count % 20 == 0 or count == len(all_submissions):
#         print(f"⏳ Đã xử lý {count}/{len(all_submissions)} bài...")

# print("✅ Hoàn tất tạo toàn bộ thư mục chuẩn LeetHub 3.0!")


import os
import glob
import json

# 1. Đọc bảng ánh xạ ID và độ khó từ file leetcode_meta.json
with open("leetcode_meta.json", "r", encoding="utf-8") as mf:
    problems_meta = json.load(mf)

# 2. Gom tất cả 736 bài từ các file backup JSON (bỏ qua file leetcode_meta.json)
all_submissions = {}
for json_file in glob.glob("*.json"):
    if json_file == "leetcode_meta.json":
        continue
    with open(json_file, "r", encoding="utf-8") as f:
        data = json.load(f)
        all_submissions.update(data)

print(f"📦 Đang tạo cấu trúc chuẩn LeetHub 3.0 cho {len(all_submissions)} bài...")

# 3. Tạo thư mục, file code và README.md hoàn toàn offline
count = 0
for slug, info in all_submissions.items():
    meta = problems_meta.get(slug)
    if meta:
        folder_name = f"{meta['id']}-{slug}"
        title_display = f"{int(meta['id'])}. {meta['title']}"
        diff_display = meta["difficulty"]
    else:
        folder_name = slug
        title_display = slug
        diff_display = "Medium"

    os.makedirs(folder_name, exist_ok=True)

    # Xác định đuôi file chuẩn LeetHub (.java, .ts, .py, .sql...)
    ext = info["filename"].split(".")[-1]
    if ext == "txt" and "-- Write your" in info["code"]:
        ext = "sql"

    code_filepath = os.path.join(folder_name, f"{folder_name}.{ext}")
    with open(code_filepath, "w", encoding="utf-8") as cf:
        cf.write(info["code"])

    # Tạo file README.md chuẩn LeetHub 3.0 kèm liên kết đề bài
    readme_filepath = os.path.join(folder_name, "README.md")
    readme_text = (
        f"<h2><a href=\"https://leetcode.com{slug}\">{title_display}</a></h2>"
        f"<h3>{diff_display}</h3><hr>"
        f"<p>View full problem description on <a href=\"https://leetcode.com{slug}\">LeetCode</a>.</p>"
    )
    with open(readme_filepath, "w", encoding="utf-8") as rf:
        rf.write(readme_text)

    count += 1

print(f"✅ Hoàn tất! Đã tạo thành công {count} thư mục chuẩn LeetHub 3.0 trong 1 giây!")
