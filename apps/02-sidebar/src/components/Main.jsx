import { useLocation } from "react-router";
import styled from "styled-components";
import theme from "../theme/theme";

function Main() {
  const location = useLocation();
  const pageName =
    location.pathname !== "/" ? location.pathname.slice(1) : "home";

  return (
    <StyledMain>
      <h2 className="page-title">{pageName}</h2>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  background-color: ${theme.colors.background};
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.font.family};

  .page-title {
    color: ${theme.colors.accent};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    text-transform: capitalize;
  }
`;
export default Main;
