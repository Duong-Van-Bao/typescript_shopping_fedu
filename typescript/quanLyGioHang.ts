import { SanPham } from "./sanpham";
import { SanPhamGioHang } from "./sanphamgiohang";

class QuanLyGioHang {
  private CacSanPhamTrongGioHang: SanPhamGioHang[] = [];
  //cấp cho nó bộ nhớ luôn là equal one array

  addSanPhamTrongGioHang(motSanPham: SanPham, soluong: number): void {}
  updateSanPhamTrongGioHang(motsanpham: SanPham, soluong: number): void {}
  kiemTraTrangThaiSanPham(): void {}
  tinhSoLuong(): number {
    return;
  }
  tinhGia(): number {
    return;
  }
  hienThiGioHang(): string {
    return;
  }

  constructor() {
    //code...
  }
}
