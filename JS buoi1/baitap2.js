/**
 * Tính tổng 3 ký(chữ) số
 * đầu vào
 * number =348;
 * hàng trăm = 0;
 * hàng chục = 0;
 * hàng đơn vị = 0;
 * kết quả = 0;
 * Xử lý
 * -Lấy số hàng trăm n/100
 * -Lấy số hàng chục n % 100 / 10
 * -Lấy số hàng đơn vị n % 10
 */
 var n=prompt("Nhập số");
//  prompt: câu lệnh 
 var unit=0;
 var ten=0;
 var hundred=0;
 hundred = parseInt(n/100);
 ten = parseInt(n % 100 / 10);
//  parseInt   / floor: lấy phần nguyên 
 unit = (n % 10);
 sum = hundred + ten + unit;
 console.log("Tổng 3 ký số là:" + sum); 
