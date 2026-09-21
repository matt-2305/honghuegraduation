#!/bin/bash
# Tạo repo GitHub mới và push local repo honghuegraduation
# Cần thay <YOUR_GITHUB_USERNAME> và cung cấp GITHUB_TOKEN nếu muốn tạo qua API

REPO_NAME="honghuegraduation"
USER="${1:-matt}"

echo "Repo local đã sẵn sàng: $(pwd)"
echo "Branch: $(git branch --show-current)"
echo "Commits: $(git rev-list --count HEAD)"

# Nếu có GITHUB_TOKEN, tạo repo qua API
if [ -n "$GITHUB_TOKEN" ]; then
  curl -s -H "Authorization: token $GITHUB_TOKEN" \
       -H "Accept: application/vnd.github.v3+json" \
       https://api.github.com/user/repos \
       -d "{\"name\":\"$REPO_NAME\",\"private\":false,\"auto_init\":false}" | head -5
  echo "Repo $REPO_NAME đã tạo (hoặc đã tồn tại)."
else
  echo "Không tìm thấy GITHUB_TOKEN. Vui lòng tạo repo bằng tay tại:"
  echo "https://github.com/new -> tên: $REPO_NAME"
fi

# Thêm remote và push (thay URL theo repo thực tế)
echo "Sau khi tạo repo, chạy:"
echo "  git remote add origin https://github.com/$USER/$REPO_NAME.git"
echo "  git branch -M main"
echo "  git push -u origin main"
