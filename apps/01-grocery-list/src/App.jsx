import { useState } from "react";
import ListSummary from "./components/ListSummary";
import ProductList from "./components/ProductList";
import styled from "styled-components";

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
    <StyledApp>
      <ListSummary />
      <ProductList
        products={products}
        toggleProduct={toggleProduct}
        deleteProduct={deleteProduct}
      />
    </StyledApp>
  );
}
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 700px;
  padding: 20px;
  padding-top: 15vh;
  gap: 28px;
`;

export default App;
