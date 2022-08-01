"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLyHang = void 0;
var sanpham_1 = require("./sanpham");
var QuanLyHang = /** @class */ (function () {
    // dùng để hứng dữ liệu từ API
    function QuanLyHang() {
        this.hang = [];
        // vì ko có phần PHP nên là mình tạo bằng tay
        var sanpham1 = new sanpham_1.SanPham(1, "Ốp Iphone", 4000, "Ốp đến từ nhật bản", true, "images/1.jpg");
        var sanpham2 = new sanpham_1.SanPham(1, "Ốp Iphone", 4000, "Ốp đến từ nhật bản", false, "images/1.jpg");
        var sanpham3 = new sanpham_1.SanPham(1, "Ốp Iphone", 4000, "Ốp đến từ nhật bản", true, "images/1.jpg");
        this.addSanPham(sanpham1);
    }
    QuanLyHang.prototype.getSanPhamById = function () {
        var motsanpham = new sanpham_1.SanPham(1, "sp1", 90000, "mo ta", true, "images/1.jpg");
        return motsanpham;
    };
    QuanLyHang.prototype.addSanPham = function (sp) {
        //  dùng để đẩy dữ liệu hứng từ API
        // vào trong phần tử mảng hàng
        // this.hang.push(sp);
        //cách 2
        this.hang[this.hang.length] = sp;
    };
    QuanLyHang.prototype.getCacSanPham = function () {
        return this.hang;
    };
    QuanLyHang.prototype.showSanPham = function () {
        // lấy sản phẩm in ra dưới dạng HTML và đặt giao diện
        var danhSachSPHTML = "";
        if (this.hang.length != 0) {
            //duyệt mảng hàng
            for (var i = 0; i < this.hang.length; i++) {
                danhSachSPHTML = "\n        <div class=\"col-sm-4\">\n        <div class=\"card _1spkhac id-".concat(this.hang[i].id, "\">\n            <img class=\"img-fluid\" src=\"").concat(this.hang[i].anh, "\">\n            <div class=\"card-body\">\n                  <a href=\"#\" class=\"tdkhac\">").concat(this.hang[i].ten, "</a>\n                  <p class=\"card-text mota\">").concat(this.hang[i].mota, "</p>\n                  <b>").concat(this.hang[i].gia, "</b>");
                if (this.hang[i].tinhtrang == false) {
                    danhSachSPHTML += "<a href=\"#\" class=\"btn btn-secondary disabled btn-outline-info btn-block\">H\u1EBFt H\u00E0ng</a>";
                }
                else {
                    danhSachSPHTML += "<a href=\"#\" class=\"btn btn-outline-info btn-block\">Mua h\u00E0ng</a>";
                }
                danhSachSPHTML += "</div>\n          </div>\n      </div>\n        ";
            }
            return danhSachSPHTML;
        }
        return "sản phẩm được cập nhật ";
    };
    return QuanLyHang;
}());
exports.QuanLyHang = QuanLyHang;
