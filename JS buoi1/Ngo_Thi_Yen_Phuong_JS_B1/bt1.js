//Tính tiền lương nhân viên
var luongNgay = 100000;
var soNgay = prompt("Nhập số ngày làm việc");
var tienLuong = luongNgay * soNgay;
var currentFormat = new Intl.NumberFormat("vn-VN");
var tienLuongFormat = currentFormat.format(tienLuong);
console.log("Tiền lương là: " + tienLuongFormat + "VND");