


# Câu trúc

views: page

# Authenticate

Sử dụng giống cơ chế xác thực giống nuxt auth

Để control việc có được phép truy cập vào 1 page nào đó nằm trong view hay không sử dụng property là `auth`

```
auth: false // page có thể truy cập mà không cân authenticate
auth: true // cần authenticate, mặc định auth là true
auth: guest // có thể truy cập mà không cần authenticate nhưng nếu đã authenticate rồi nó sẽ redirect sang home
```

Hàm control cơ chế xác thực nàm ở file auth.utils

# Biến môi trường

Tất cả các biến môi trường phải bắt đầu bằng tiền tố VUE_APP. Đây là cơ chế bảo mật của vue. Ví dụ
VUE_APP_BASE_API_URL=https://api.example.vn

# Alias

@ sẽ được ghi đề thành path.resolve(__dirname, "src") 

# Cơ chế hoạt động của vite

Vite đặt giả thiết developer sẽ dùng trình duyệt mới nhất để code.
Khi đó trình duyệt nó sẽ support js module : file js này có thể import file js kia, và cú pháp js mới nhất.
Vì vậy vite không build tất cả project như webpack nữa. Điểm bắt đầu của nó là file index.html ở root project và nó sẽ import file main từ main import file khác.
Nó sẽ chỉ convert các file vue,js trong project sau cho trình duyệt đọc và hiểu được là xong.
Vì vậy khi dev vite build rất nhanh.

file index.html là file khởi đầu của project từ đó sẽ import js vào và chạy

Nhược điểm: Vì vite thực sự khi dev nó chả build project mà khi deploy mới dùng rollup để build nên thực sự môi trường dev và môi trường production không giống nhau. Nên là phải test production trước khi deploy.  - Đây là mình suy diễn chứ thực tế chưa bị lỗi này
