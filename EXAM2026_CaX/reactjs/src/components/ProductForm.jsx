import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      category,
      price: Number(price),
      inStock,
    };

    onAddProduct(newProduct);

    setName("");
    setCategory("");
    setPrice("");
    setInStock(true);
  };

  return (
    <div className="card h-100">
      <div className="card-header">
        <h5 className="fw-bold">Thêm sản phẩm mới</h5>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>

            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Danh mục</label>

            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">-- Chọn danh mục --</option>

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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Trạng thái</label>

            <select
              className="form-select"
              value={inStock}
              onChange={(e) => setInStock(e.target.value === "true")}
            >
              <option value="true">Còn hàng</option>

              <option value="false">Hết hàng</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Thêm sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
