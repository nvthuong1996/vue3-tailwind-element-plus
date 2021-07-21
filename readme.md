# Chạy project

```

yarn // install package
npm run dev // run dev server
npm run build // build project

```

# Câu trúc

views: page
assets: assets

# Authenticate

Luồng authenticate:

* Khi trang được load. App sẽ cố gắng gọi đến api lấy thông tin người dùng chính là phương thức profile trong auth.service
* Nếu lấy được thông tin người dùng nó sẽ lưu thông tin người dùng vào store, nếu không lấy được chứng tỏ là chưa login
* Để kiểm soát quyền truy cập trong page sẽ định nghĩa thêm 1 property là : auth


```
auth: false // page có thể truy cập mà không cân authenticate
auth: true // cần authenticate, mặc định auth là true
auth: guest // có thể truy cập mà không cần authenticate nhưng nếu đã authenticate rồi nó sẽ redirect sang home ( dùng cho trang login hoặc register )
```

Hàm control cơ chế xác thực nàm ở file auth.utils

# Biến môi trường

Biến môi trường được đĩnh nghĩa trong các file biến môi trường
.env.development
.env.staging
.env.production

tuỳ theo giá trị của biến NODE_ENV mà khi dev hoặc build app sẽ đọc file tương ứng. mặc định sẽ dùng .development.env

Muốn build production trước hết phải set NODE=production trước. 
`export NODE_ENV=production && npm run build`

Tất cả các biến môi trường phải bắt đầu bằng tiền tố VUE_APP. Đây là cơ chế bảo mật của vue. Ví dụ
```
VUE_APP_BASE_API_URL=https://api.example.vn
// trong app hãy sử dụng cú pháp process.env.VUE_APP_BASE_API_URL để access đến biến môi trường.
```

Lưu ý project sử dụng cơ chế ghi đè giá trị đối với biến môi trường. Nó sẽ tìm các chuỗi dạng process.env.XXXX và thay thế bằng đoạn string tương ứng.
Điều đó có nghĩa là nếu bạn cố gắng sử dụng process.env như là 1 object thì sẽ không được. mà lúc nào cũng phải viết đủ process.env.XXXX. Tắt source map của trình duyệt sẽ thấy rõ điều này.

# Alias

@ sẽ được ghi đề thành path.resolve(__dirname, "src") 

# Cơ chế hoạt động của vite

Vite đặt giả thiết developer sẽ dùng trình duyệt mới nhất để code.

Khi đó trình duyệt nó sẽ support js module : file js này có thể import file js kia, và cú pháp js mới nhất.

Vì vậy vite không build tất cả project như webpack nữa. Điểm bắt đầu của nó là file index.html ở root project và nó sẽ import file main từ main import file khác.

Nó sẽ chỉ convert các file vue,js trong project sau cho trình duyệt đọc và hiểu được là xong.
Vì vậy khi dev vite build rất nhanh.

file index.html là file khởi đầu của project từ đó sẽ import js vào và chạy

Nhược điểm: Vì vite thực sự khi dev nó chả build project mà khi deploy mới dùng esbuild để build nên thực sự môi trường dev và môi trường production không giống nhau. Nên là phải test production trước khi deploy.  - Đây là mình suy diễn chứ thực tế chưa bị lỗi này

# Utils

lodash: Không nên dùng lodash bằng cách import lodash trực tiếp mà hãy dùng thông qua utils lodash. sử dụng lodash.util giúp kích thước ứng dụng đước tối ưu và kích hoạt tính năng auto import

axios: Khởi tạo 1 instance axios và dùng để gọi api.

array: array.util rất hữu ích đẻ làm việc với mảng

storage: sử dụng cookie storage để lưu trữ những giá trị.

auth: auth.util control luồng authentice của app. lấy ý tưởng từ nuxt auth