"use strict";
exports.__esModule = true;
var sanphamgiohang_1 = require("./sanphamgiohang");
var QuanLyGioHang = /** @class */ (function () {
    function QuanLyGioHang() {
        this.CacSanPhamTrongGioHang = sanphamgiohang_1.SanPhamGioHang[] = [];
        //code...   
    }
    //cấp cho nó bộ nhớ luôn là equal one array
    QuanLyGioHang.prototype.addSanPhamTrongGioHang = function (motSanPham, soluong) {
    };
    QuanLyGioHang.prototype.updateSanPhamTrongGioHang = function (motsanpham, soluong) {
    };
    QuanLyGioHang.prototype.kiemTraTrangThaiSanPham = function () { };
    QuanLyGioHang.prototype.tinhSoLuong = function () { return; };
    ;
    QuanLyGioHang.prototype.tinhGia = function () { return; };
    ;
    QuanLyGioHang.prototype.hienThiGioHang = function () {
        return;
    };
    ;
    return QuanLyGioHang;
}());
