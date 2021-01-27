console.log("Hello em")
/* Variable 
-Tạo biến khai báo từ khóa var
-Sử dụng dấu = để gán giá trị 
-Kết thúc câu lệnh phải có dấu chấm phẩy
-Đặt tên biến không bắt đầu bằng số
-Đặt tên biến ko sử dụng dấu gạch ngang
-Tên biến từ 2 chữ trở lên phải viết hoa chữ cái tiếp theo
**Kiểu dữ liệu
-Kiểu chuỗi (String)
-Kiểu số (Number)
-Kiểu Boolean (true/false)
-Kiểu dữ liệu Null: rỗng
-Kiểu undefined: ko xác định
*/
var username = "Phuong Asura";
var kq ="Họ tên là:" + username;
console.log(kq);

var address = "82 Ung Van Khiem";
var kq2 = "Địa chỉ là:" + address;
console.log(kq2);

var numberstudent = 30
console.log(numberstudent);

var islogin = true; //true hoặc false//

var firstName =null 
console.log(firstName);
var lastName;
console.log(lastName);

/* Các loại toán tử + - */
var a = 20;
var b = 10;
var cong = a + b;
//console.log("Tổng là:" + cong)
var thongBao = "Tổng là:" + cong;
console.log(thongBao);

var hieu = a - b;
console.log ("Hiệu là:" + hieu);

var tich = a * b;
console.log("Tích là:" + tich);

// Chia lấy phần thương
var thuong = a / b ;
console.log("Thương là:" + thuong)
//Chia lấy phần dư
var phanDu = a % b;
console.log("phần dư là:" + phanDu);

// ++
var count = 2;
//count = count +1;
//cập nhật lại giá trị vừa khai báo
count++; //count+=
console.log(count);

//++ đứng sau biến thì nó gán giá trị vào newCount trước sau đó mới tăng 1 đơn vị
// ++ đứng trước biến nó tăng 1 đơn vị rồi mới gán vào newCount
var newCount = ++count;
console.log("newCount:" + newCount);

/* Hằng số 
-Khai báo hằng số phải gán giá trị từ lúc tạo
-Ko gán giá trị mới
*/
const PI = 3.14;

