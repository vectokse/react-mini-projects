import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";
import CocktailCard from "../../reusable-ui/CocktailCard";
import StateMessage from "../../reusable-ui/StateMessage";
import useFavorite from "../../../context/FavoritesContext";
import { theme } from "../../../theme/theme";
import { useNavigate } from "react-router";

export default function FavoritesPage() {
  const { favorites, loading, isFavorites, toggleFavorite, errorMsg } =
    useFavorite();

  const navigate = useNavigate();

  if (loading) {
    <StateMessage message="Chargement de vos favoris..." />;
  }

  if (errorMsg) {
    <StateMessage
      message={errorMsg}
      actionLabel="Réessayer"
      onActionClick={() => window.location.reload()}
    />;
  }

  if (favorites.length === 0) {
    return (
      <FavoritesPageStyled>
        <h1 className="page-title">Mes Cocktails Favoris 🍸</h1>
        <StateMessage
          message="Vous n'avez pas encore de cocktails favoris."
          actionLabel="Explorer les cocktails"
          onActionClick={() => navigate("/")}
        />
      </FavoritesPageStyled>
    );
  }

  return (
    <FavoritesPageStyled>
      <h1 className="page-title">Mes Cocktails Favoris 🍸</h1>

      <div className="result-grid">
        {favorites.map((cocktail) => (
          <CocktailCard
            key={cocktail.id}
            title={cocktail.title}
            description={cocktail.ingredients.join(", ")}
            to={`/cocktail/${cocktail.id}`}
            imgSrc={cocktail.imgSrc}
            footerText="Voir la fiche &rarr;"
            iconAction={isFavorites(cocktail.id) ? <FaHeart /> : <FaRegHeart />}
            onActionClick={() => toggleFavorite(cocktail)}
          />
        ))}
      </div>
    </FavoritesPageStyled>
  );
}

const FavoritesPageStyled = styled.div`
  padding: 2rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .page-title {
    font-family: "Playfair Display", serif;
    font-size: ${theme.font.size.lg};
    font-weight: ${theme.font.weight.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: 10px;
  }

  .result-grid {
    display: grid;
    min-height: 400px;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 2rem;
  }

  .empty-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    padding: 60px 1.5rem;
    margin: 0 auto;
    text-align: center;
    border-radius: ${theme.radius.md};
    color: ${theme.colors.textSecondary};
    font-size: ${theme.font.size.md};
    font-family: ${theme.font.family.primary};
    max-width: 500px;

    p {
      margin: 0;
      font-weight: ${theme.font.weight.medium};
    }
  }
`;
