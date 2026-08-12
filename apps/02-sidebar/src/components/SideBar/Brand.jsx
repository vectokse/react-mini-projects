import styled from "styled-components";
import Logo from "./Logo";
import theme from "../../theme/theme";

export default function Brand() {
  return (
    <StyledBrand>
      <div className="logo-wrapper">
        <Logo size={32} />
      </div>
      <h2 className="name">SideBar</h2>
    </StyledBrand>
  );
}

const StyledBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 25px;
  border-bottom: 0.15rem solid ${theme.colors.border};

  .name {
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.font.weight.bold};
    font-family: ${theme.font.family};
  }

  .img-wrapper {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  ${theme.device.isNotShort} {
    padding: 0 0 25px 0;
  }
`;
