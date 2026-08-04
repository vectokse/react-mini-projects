import styled from "styled-components";
import NavMenu from "./NavMenu";
import theme from "../theme/theme";
import Social from "./Social";

export default function SideBar() {
  return (
    <StyledSideBar>
      <div>Brand</div>
      <NavMenu />
      <Social />
    </StyledSideBar>
  );
}

const StyledSideBar = styled.aside`
  display: grid;
  grid-template-rows: 60px 1fr 80px;
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  padding: 20px 20px;
  background-color: ${theme.colors.surface};
`;
