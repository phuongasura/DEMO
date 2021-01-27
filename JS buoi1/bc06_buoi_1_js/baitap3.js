/**
 * Đầu vào (input)
 *  - tenPhim: ABC
 *  - veNguoiLon: 50000
 *  - soLuongVeNguoiLon: 1000
 *  - veTreEm: 40000
 *  - soLuongVeTreEm: 500
 *  - phanTramTuThien: 10
 *  - doanhThu = 0;
 *  - tienLoi = 0;
 * * Xử lý
 *  - veNguoiLon * soLuongVeNguoiLon => ?
 *  - veTreEm * soLuongVeTreEm => ?
 *  - doanhThu = (veNguoiLon * soLuongVeNguoiLon) + (veTreEm * soLuongVeTreEm)
 *  - doanhThu * phanTramTuThien / 100;
 *  - tienLoi = doanhThu - (doanhThu * phanTramTuThien / 100);
 * * Đầu ra (output)
 *  - Xuất thông báo tienLoi
 */
var tenPhim = "ABC";
var veNguoiLon = 50000;
var soLuongVeNguoiLon = 1000;
var veTreEm = 40000;
var soLuongVeTreEm = 500;
var phanTramTuThien = 10;
var doanhThu = 0;
var tienTuThien = 0;
var tienLoi = 0;

doanhThu = veNguoiLon * soLuongVeNguoiLon + veTreEm * soLuongVeTreEm;
tienTuThien = (doanhThu * phanTramTuThien) / 100;
tienLoi = doanhThu - tienTuThien;

var currentFormat = new Intl.NumberFormat("vn-VN");
var tienFormat = currentFormat.format(tienLoi);
console.log("Lợi nhuận là: " + tienFormat + " vnd");
