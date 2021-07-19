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

