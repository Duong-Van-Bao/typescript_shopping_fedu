import { SanPham } from "./sanpham";

export class QuanLyHang {
  private hang: SanPham[] = [];
  // dùng để hứng dữ liệu từ API

  constructor() {
    // vì ko có phần PHP nên là mình tạo bằng tay
    var sanpham1 = new SanPham(
      1,
      "Ốp Iphone",
      4000,
      "Ốp đến từ nhật bản",
      true,
      "images/1.jpg"
    );
    var sanpham2 = new SanPham(
      1,
      "Ốp Iphone",
      4000,
      "Ốp đến từ nhật bản",
      false,
      "images/1.jpg"
    );
    var sanpham3 = new SanPham(
      1,
      "Ốp Iphone",
      4000,
      "Ốp đến từ nhật bản",
      true,
      "images/1.jpg"
    );

    this.addSanPham(sanpham1);
  }

  public getSanPhamById(): SanPham {
    var motsanpham = new SanPham(
      1,
      "sp1",
      90000,
      "mo ta",
      true,
      "images/1.jpg"
    );
    return motsanpham;
  }

  public addSanPham(sp: SanPham): void {
    //  dùng để đẩy dữ liệu hứng từ API
    // vào trong phần tử mảng hàng
    // this.hang.push(sp);

    //cách 2
    this.hang[this.hang.length] = sp;
  }

  public getCacSanPham(): SanPham[] {
    return this.hang;
  }

  public showSanPham(): string {
    // lấy sản phẩm in ra dưới dạng HTML và đặt giao diện
    var danhSachSPHTML = "";
    if (this.hang.length != 0) {
      //duyệt mảng hàng
      for (let i = 0; i < this.hang.length; i++) {
        danhSachSPHTML = `
        <div class="col-sm-4">
        <div class="card _1spkhac id-${this.hang[i].id}">
            <img class="img-fluid" src="${this.hang[i].anh}">
            <div class="card-body">
                  <a href="#" class="tdkhac">${this.hang[i].ten}</a>
                  <p class="card-text mota">${this.hang[i].mota}</p>
                  <b>${this.hang[i].gia}</b>`;
        if (this.hang[i].tinhtrang == false) {
          danhSachSPHTML += `<a href="#" class="btn btn-secondary disabled btn-outline-info btn-block">Hết Hàng</a>`;
        } else {
          danhSachSPHTML += `<a href="#" class="btn btn-outline-info btn-block">Mua hàng</a>`;
        }
        danhSachSPHTML += `</div>
          </div>
      </div>
        `;
      }
      return danhSachSPHTML;
    }

    return "sản phẩm được cập nhật ";
  }
}
