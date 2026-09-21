# Deploy Vercel

Repo: `honghuegraduation`

1. Tạo repo GitHub mới: https://github.com/new → tên `honghuegraduation` (public)
2. Thêm remote và push (từ folder `honghuegraduation`):
   ```bash
   git remote add origin git@github.com:<USER>/honghuegraduation.git
   git branch -M main
   git push -u origin main
   ```
3. Trên Vercel:
   - Import repo từ GitHub
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Website sẽ hoạt động sau build.
