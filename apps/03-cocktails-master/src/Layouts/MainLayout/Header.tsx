import styled from "styled-components";
import Logo from "../../components/reusable-ui/Logo";
import NavbarLink from "./NavbarLink";
import theme from "../../theme/theme";

export default function Header() {
  return (
    <HeaderStyled>
      <nav className="nav-content" aria-label="Navigation principale">
        <Logo />
        <ul>
          <NavbarLink label="Accueil" link="/" />
          <NavbarLink label="À propos" link="/about" />
          <NavbarLink label="Favoris" link="/favoris" />
        </ul>
      </nav>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${theme.colors.surface};
  border-bottom: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadow.sm};

  .nav-content {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 50px;

    // Temporary responsive fallback for smaller screens
    // TODO: Replace with mobile burger menu
    flex-wrap: wrap;

    ul {
      display: flex;
      gap: 7px;
      list-style: none;
    }
  }
`;

