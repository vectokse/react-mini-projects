import { useState } from "react";
import ListSummary from "./components/ListSummary";
import ProductCard from "./components/ProductCard";

function App() {
  const [checked, setChecked] = useState(false);

  const toogleProduct = () => {
    setChecked(!checked);
  };

  const deleteProduct = () => {
    alert("delete Product");
  };

  return (
    <>
      <ListSummary />
      <ProductCard
        name={"chocolat"}
        isCheck={checked}
        onToggle={toogleProduct}
        onDelete={deleteProduct}
      />
    </>
  );
}

export default App;
