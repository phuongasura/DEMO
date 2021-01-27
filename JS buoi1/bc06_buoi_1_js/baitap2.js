/**
 * Tính tổng 3 ký số
 * VD: 348 => 3 + 4 + 8 => ?
 * * Đầu vào
 *  number = 348;
 *  hangTram = 0;
 *  hangChuc = 0;
 *  hangDonVi = 0;
 *  ketQua = 0;
 * * Xử lý
 *  - Lấy số hàng trăm => 3
 *      number / 100
 *      + Làm tròn Math.floor(3.48) => 3
 *  - Lấy số hàng chục => 4
 *      number % 100 / 10
 *  - Lấy số hàng đơn vị => 8
 *      number % 10
 * * Đầu ra (output) => xuất kết quả
 */
var number = 348;
var hangTram = 0;
var hangChuc = 0;
var hangDonVi = 0;
var ketQua = 0;

hangTram = Math.floor(number / 100);
hangChuc = Math.floor((number % 100) / 10);
hangDonVi = number % 10;

ketQua = hangTram + hangChuc + hangDonVi;

console.log("Kết quả là: " + ketQua);
