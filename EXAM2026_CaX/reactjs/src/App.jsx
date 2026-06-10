import { useState } from "react";
import "./styles/App.css";

import productsData from "./data/data.json";

import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

function App() {
  const [products, setProducts] = useState(productsData);

  const addProduct = (newProduct) => {
    setProducts([
      ...products,
      {
        id: Date.now(),
        ...newProduct,
      },
    ]);
  };

  return (
    <div className="container py-4">
      <Header />

      <div className="row g-4">
        <div className="col-lg-4">
          <ProductForm onAddProduct={addProduct} />
        </div>

        <div className="col-lg-8">
          <ProductTable products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
