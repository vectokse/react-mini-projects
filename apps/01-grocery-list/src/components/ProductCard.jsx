import styled from "styled-components";
import { theme } from "../theme/theme";
import { FaCheck, FaTrash } from "react-icons/fa6";

export default function ProductCard({ name, isCheck, onToggle, onDelete }) {
  return (
    <StyledProductCard $isCheck={isCheck}>
      <label className="checkbox-wrapper">
        <input
          className="checkbox"
          type="checkbox"
          checked={isCheck}
          onChange={onToggle}
        />
        <span className="custom-checkbox">{isCheck && <FaCheck />}</span>
        <span className="name">{name}</span>
      </label>
      <button className="delete-btn" onClick={onDelete}>
        <FaTrash />
      </button>
    </StyledProductCard>
  );
}

const StyledProductCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 22px;
  background-color: ${(props) =>
    props.$isCheck ? theme.colors.background : theme.colors.surface};
  border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadow.sm};
  font-family: ${theme.font.family.sans};
  color: ${theme.colors.textPrimary};

  .checkbox-wrapper {
    display: flex;
    gap: 20px;
    .checkbox {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    .custom-checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid ${theme.colors.border};
      border-radius: ${theme.radius.sm};
      height: 25px;
      padding: 3px;
      width: 25px;
      font-size: ${theme.font.size.xs};
    }

    .checkbox:checked ~ .custom-checkbox {
      background-color: ${theme.colors.primary};
      color: white;
      border: 2px solid ${theme.colors.primary};
    }

    .checkbox:checked ~ .name {
      color: ${theme.colors.textSecondary};
      text-decoration: line-through;
    }
  }
  .delete-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: unset;
    color: ${theme.colors.textSecondary};
    padding: 3px;
    width: 32px;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.textMuted};
    }
  }
`;
