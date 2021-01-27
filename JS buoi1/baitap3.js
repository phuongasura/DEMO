/**
 * Đầu vào (input)
 * -var tenPhim:ACB
 * -var veNguoilon:
 * -var soLuongVeNguoiLon:
 * -var veTreEm:
 * -var soLuongVeTreEm:
 * -var 
 */

var TP = "Zero to hero at Cybersoft";
console.log("Tên Phim là:" + TP);
var GVL =prompt("Nhập giá vé người lớn");
var SVL =prompt("Số vé người lớn đã bán");
var GVE =prompt("Nhập giá vé trẻ em");
var SVE =prompt("Số vé trẻ em đã bán");
var DT=0;
DT= (GVL*SVL + GVE*SVE);
var TT = 0;
TT = DT / 10;
var LN = DT - TT;
var currentFormat = new Intl.NumberFormat("vn-VN");
var tienFormat = currentFormat.format(LN);
/* vn-VN : bắt buộc đổi sang đồng vnd 
Format tiền */
console.log("LN sau từ thiện là: " + tienFormat + "vnd");

