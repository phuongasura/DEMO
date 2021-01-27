/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 *  - canh_1 = 3
 *  - canh_2 = 4
 *  - canhHuyen = 0
 * * Xử lý
 *  - Căn bậc 2 của bình phương 2 cạch góc vuông
 * * Đầu ra (output)
 *  - Xuất ra màn hình kết quả cạnh huyền
 */
var canh_1 = 3;
var canh_2 = 4;
var canhHuyen = 0;

canhHuyen = Math.sqrt(canh_1 * canh_1 + canh_2 * canh_2);

console.log("Cạnh huyền là: " + canhHuyen);
