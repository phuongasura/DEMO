console.log("Hello Nguyen");

/**
 * Variable
 * - Tạo biến phải khai báo từ khóa var
 * - Sử dụng dấu = để gán giá trị
 * - Kết thúc câu lệnh phải có dấu chấm phẩy
 * - Đặt tên biến k bắt đầu từ số
 * - Đặt tên biến k sd dấu gạch ngang
 * - Tên biến từ 2 chữ trở lên phải viết hoa chữ cái tiếp theo
 * * Kiểu dữ dữ liệu
 *  - Kiểu chuỗi (string)
 *  - Kiểu số (number)
 *  - Kiểu Boolean (true/false)
 *  - Kiểu dữ liệu null
 *  - Kiểu undefined
 */
var username = "Dinh Phuc Nguyen";
var kq = "Họ tên là: " + username;
console.log(kq);

var address = "82 Ung Van Khiem";
var kq2 = "Địa chỉ là: " + address;
console.log(kq2);

var numberStudent = 30;

var isLogin = true; //true hoặc false

var firtName = null;
console.log(firtName);

var lastName;
console.log(lastName);

/**
 * Các loại toán tử
 * + - * /
 */
var number_1 = 20;
var number_2 = 10;

var cong = number_1 + number_2;
console.log("Tổng là: " + cong);

var hieu = number_1 - number_2;
console.log("Hiệu là: " + hieu);

var tich = number_1 * number_2;
console.log("Tích là: " + tich);

//Chia lấy phần thương
var thuong = number_1 / number_2;
console.log("Thương là: " + thuong);

//Chia lấy phần dư
var phanDu = number_1 % number_2;
console.log("Phần dư là: " + phanDu);

// ++ --
var count = 0;
// count = count + 1;
// count--;
count += 1; //count = count + 1
console.log(count);

//++ đứng sau biến thì nó gán giá trị vào newCount trước sau đó mới tăng 1 đơn vị
//++ đứng trước biến thì tăng 1 đơn vị sau đó mới gán vào newCount
var newCount = ++count;
console.log("newCount: " + newCount);

/**
 * Hằng số
 * - Khai báo hằng số phải gán giá trị từ lúc tạo
 * - Không gán giá trị mới được
 */
const PI = 3.14;
