//TỔNG 2 KÝ SỐ
var number = 54;
var hangChuc = 0;
var hangTram = 0;
var ketQua = 0;
hangChuc = Math.floor((number % 100) / 10);
hangDonVi = number % 10;
ketQua = hangChuc + hangDonVi;
console.log("Tổng 2 ký số là: " + ketQua);