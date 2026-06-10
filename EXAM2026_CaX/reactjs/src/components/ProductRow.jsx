function ProductRow({ index, product }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>

      <td>{product.price.toLocaleString("vi-VN")} đ</td>

      <td>
        <span className={product.inStock ? "badge-stock" : "badge-out"}>
          {product.inStock ? "Còn hàng" : "Hết hàng"}
        </span>
      </td>
    </tr>
  );
}

export default ProductRow;
