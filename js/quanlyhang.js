"use strict";
exports.__esModule = true;
exports.QuanLyHang = void 0;
var sanpham_1 = require("./sanpham");
var QuanLyHang = /** @class */ (function () {
    function QuanLyHang(parameters) {
        this.hang = sanpham_1.SanPham[] = [];
    }
    QuanLyHang.prototype.getCacSanPham = function () {
        return [];
    };
    QuanLyHang.prototype.getSanPhamById = function () {
        var motsanpham = new sanpham_1.SanPham(1, 'sp1', 90000, 'mo ta', true, 'images/1.jpg');
        return motsanpham;
    };
    QuanLyHang.prototype.addSanPham = function () {
    };
    QuanLyHang.prototype.showSanPham = function () {
        return '';
    };
    return QuanLyHang;
}());
exports.QuanLyHang = QuanLyHang;
