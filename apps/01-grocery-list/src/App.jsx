import { useState } from "react";
import ListSummary from "./components/ListSummary";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Chocolat", checked: false },
    { id: 2, name: "Avocats", checked: false },
  ]);

  const toggleProduct = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product,
    );

    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);

    setProducts(updatedProducts);
  };

  return (
    <>
      <ListSummary />
      <ProductList
        products={products}
        toggleProduct={toggleProduct}
        deleteProduct={deleteProduct}
      />
    </>
  );
}

export default App;
