//Quy đổi tiền
var tienUSD = prompt("Nhập vào số tiền cần đổi");
var quyDoi = 23500;
var tienVND = tienUSD*quyDoi;
var currentFormat = new Intl.NumberFormat("vn-VN");
var tienFormat = currentFormat.format(tienVND);
console.log("Tiền VND là: " + tienFormat + "VND");
