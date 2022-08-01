import { SanPham } from "../js/sanpham";
import { QuanLyHang } from "../js/quanlyhang";

var tatCaHang = new QuanLyHang();
var hangs: SanPham[] = tatCaHang.getCacSanPham();

// for (let i = 0; i < array.length; i++) {
//   console.log(i);
// }

console.log(tatCaHang.showSanPham());
