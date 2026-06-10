// import { useState } from "react";

import "./styles/App.css";
import Header from "./components/Header.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container py-4">
      <Header />

      <div className="row g-4">
        {/* <!-- Thêm sản phẩm --> */}
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="fw-bold mb-1">Thêm sản phẩm mới</h5>
              <small className="text-muted">
                Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.
              </small>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Tên sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên sản phẩm"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Danh mục</label>
                <select className="form-select">
                  <option selected>-- Chọn danh mục --</option>
                  <option>Điện thoại</option>
                  <option>Laptop</option>
                  <option>Máy tính bảng</option>
                  <option>Tai nghe</option>
                  <option>Phụ kiện</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Giá</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Nhập giá"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Trạng thái còn hàng</label>
                <select className="form-select">
                  <option>Còn hàng</option>
                  <option>Hết hàng</option>
                </select>
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-primary flex-grow-1">
                  Thêm sản phẩm
                </button>

                <button className="btn btn-outline-secondary">
                  Làm mới form
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Danh sách sản phẩm --> */}
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h5 className="fw-bold mb-1">Danh sách sản phẩm</h5>
              <small className="text-muted">
                Danh sách sản phẩm mẫu được hiển thị từ dữ liệu hệ thống.
              </small>
            </div>

            <div className="card-body p-0">
              <table className="table align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>STT</th>
                    <th>TÊN SẢN PHẨM</th>
                    <th>DANH MỤC</th>
                    <th>GIÁ</th>
                    <th>TRẠNG THÁI</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Điện thoại iPhone 15</td>
                    <td>Điện thoại</td>
                    <td>24.990.000 đ</td>
                    <td>
                      <span className="badge-stock">Còn hàng</span>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Máy tính bảng Samsung Galaxy Tab S9</td>
                    <td>Máy tính bảng</td>
                    <td>18.500.000 đ</td>
                    <td>
                      <span className="badge-stock">Còn hàng</span>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Chuột Logitech MX Master 3S</td>
                    <td>Phụ kiện</td>
                    <td>2.490.000 đ</td>
                    <td>
                      <span className="badge-out">Hết hàng</span>
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>Máy tính xách tay MacBook Air M3</td>
                    <td>Laptop</td>
                    <td>31.990.000 đ</td>
                    <td>
                      <span className="badge-stock">Còn hàng</span>
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>Tai nghe Sony WH-1000XM5</td>
                    <td>Tai nghe</td>
                    <td>7.990.000 đ</td>
                    <td>
                      <span className="badge-stock">Còn hàng</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
