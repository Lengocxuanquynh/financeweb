
  # Finance Web Interface

  This is a code bundle for Finance Web Interface. The original project is available at https://www.figma.com/design/5Zi5wmEh0oGI1SOqOfeB3a/Finance-Web-Interface.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  # 1. Cài đặt các thư viện (dependencies)
  npm install

  # 2. Tạo file môi trường (Nếu chưa có)
  # Sau đó hãy mở file .env và điền DATABASE_URL của Neon vào
  cp .env.example .env

  # 3. Đồng bộ Database & Tạo Prisma Client (Dành cho bản v7)
  npx prisma db pull
  npx prisma generate

  # 4. Khởi động dự án ở chế độ phát triển
  npm run dev
