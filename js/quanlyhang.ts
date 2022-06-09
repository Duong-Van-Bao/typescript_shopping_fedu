import { SanPham } from "./sanpham"


export class QuanLyHang {
    private hang = SanPham[] = [];

    constructor(parameters) {

    }

    getCacSanPham(): SanPham[] {
        return []
    }

    getSanPhamById(): SanPham {
        var motsanpham = new SanPham(1, 'sp1', 90000, 'mo ta', true, 'images/1.jpg');
        return motsanpham;
    }

    addSanPham(): void {

    }

    showSanPham(): string {
        return ''
    }
}