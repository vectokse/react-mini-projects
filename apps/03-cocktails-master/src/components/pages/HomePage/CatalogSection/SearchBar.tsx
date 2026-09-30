import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ComponentType;
  onClick?: () => void;
  className?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Rechercher...",
  icon: Icon,
  onClick,
  className,
}: SearchBarProps) {
  return (
    <SearchBarStyled className={className}>
      {Icon && (
        <span className="search-icon">
          <Icon />
        </span>
      )}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={"search-field"}
        placeholder={placeholder}
        onClick={onClick}
      />
    </SearchBarStyled>
  );
}

const SearchBarStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  background-color: ${theme.colors.surface};
  border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadow.sm};
  border: 1px solid ${theme.colors.border};
  padding: 0 1rem;
  transition: all 0.2s ease;

  .search-icon {
    left: 1rem;
    display: flex;
    align-items: center;
    pointer-events: none;
    color: ${theme.colors.textSecondary};
    font-size: ${theme.font.size.md};
  }

  &:focus-within {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadow.sm};
  }

  .search-field {
    width: 100%;
    padding: 0.875rem 0;
    background-color: transparent;
    border: none;
    box-shadow: none;
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.sm};
    color: ${theme.colors.textPrimary};
    outline: none;

    &::placeholder {
      color: ${theme.colors.textSecondary};
    }
  }
`;
