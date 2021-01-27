//Tính tiền lương nhân viên
function tienLuong() {
var luongNgay = 100000;
var soNgay = document.getElementById("soNgay").value;
var tienLuong = luongNgay * soNgay;
var currentFormat = new Intl.NumberFormat("vn-VN");
var tienLuongFormat = currentFormat.format(tienLuong);
// console.log("Tiền lương là: " + tienLuongFormat + "VND");
var thongBao1 = "Tiền lương là: " + tienLuongFormat;
document.getElementById("txtThongBao1").innerHTML = thongBao1;
    //add class
  document.getElementById("txtThongBao1").classList.add("demoText");
  //Hiển thị lại thẻ div#txtThongBao
  document.getElementById("txtThongBao1").style.display = "block";
}
