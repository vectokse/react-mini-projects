import styled from "styled-components";
import ProductCard from "./ProductCard";
import { theme } from "../theme/theme";
import { FaBasketShopping } from "react-icons/fa6";

export default function ProductList({
  products,
  toggleProduct,
  deleteProduct,
}) {
  if (products.length == 0) {
    return (
      <StyledEmptyProductList>
        <FaBasketShopping className="icon" />
        <h4 className="message">Liste vide</h4>
        <span className="description">Ajoutez un premier produit</span>
      </StyledEmptyProductList>
    );
  }

  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          isCheck={product.checked}
          name={product.name}
          onToggle={() => toggleProduct(product.id)}
          onDelete={() => deleteProduct(product.id)}
        />
      ))}
    </StyledProductList>
  );
}

const StyledProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledEmptyProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-family: ${theme.font.family.sans};
  text-align: center;

  .icon {
    font-size: 28px;
    color: ${theme.colors.textMuted};
    margin-bottom: 8px;
  }

  .message {
    margin: 0;
    font-size: ${theme.font.size.base};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.textPrimary};
  }

  .description {
    font-size: ${theme.font.size.sm};
    color: ${theme.colors.textSecondary};
  }
`;
