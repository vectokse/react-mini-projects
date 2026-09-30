import styled from "styled-components";
import Logo from "../../components/reusable-ui/Logo";
import NavbarLink from "./NavbarLink";
import theme from "../../theme/theme";
import useFavorite from "../../context/FavoritesContext";

export default function Header() {
  const { favorites } = useFavorite();
  const favoritesCount = favorites.length;

  return (
    <HeaderStyled>
      <nav className="nav-content" aria-label="Navigation principale">
        <Logo />
        <ul>
          <NavbarLink link="/" label="Accueil" />

          <NavbarLink link="/favorites" label={`Favoris ${favoritesCount}`} />

          <NavbarLink link="/about" label="À propos" />
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
