import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Danh mục</th>
          <th>Giá</th>
          <th>Trạng thái</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product, index) => (
          <ProductRow key={product.id} index={index} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
