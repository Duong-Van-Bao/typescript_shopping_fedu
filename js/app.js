"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quanlyhang_1 = require("../js/quanlyhang");
var tatCaHang = new quanlyhang_1.QuanLyHang();
var hangs = tatCaHang.getCacSanPham();
// for (let i = 0; i < array.length; i++) {
//   console.log(i);
// }
console.log(tatCaHang.showSanPham());
