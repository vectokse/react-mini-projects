import styled from "styled-components";
import { theme } from "../theme/theme";
import { MdAddShoppingCart } from "react-icons/md";

export default function NewProductForm() {
  return (
    <StyledForm>
      <span className="icon-wrapper">
        <MdAddShoppingCart />
      </span>
      <input
        className="input"
        type="text"
        placeholder="Ajouter un nouveau produit..."
      />
      <button className="add-button">+</button>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${theme.colors.surface};
  padding: 18px 22px;
  border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadow.sm};
  font-size: ${theme.font.size.md};
  font-family: ${theme.font.family};

  .icon-wrapper {
    display: flex;
    align-items: center;
    color: ${theme.colors.textSecondary};
  }

  .input {
    flex-grow: 1;
    border: none;
    font-size: ${theme.font.size.base};

    &::placeholder {
      color: ${theme.colors.textMuted};
    }
  }

  .add-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    height: 32px;
    width: 32px;
    border: none;
    border-radius: ${theme.radius.sm};
    background-color: ${theme.colors.primary};
    color: white;
    font-size: ${theme.font.size.md};
    box-shadow: ${theme.shadow.sm};

    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  }
`;
