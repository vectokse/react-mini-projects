import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";
import CocktailCard from "../../reusable-ui/CocktailCard";
import useFavorite from "../../../context/FavoritesContext";
import { theme } from "../../../theme/theme";

export default function FavoritesPage() {
  const { favorites, loading, isFavorites, toggleFavorite, errorMsg } =
    useFavorite();

  if (loading) {
    return <StateGrid message="Chargment..." />;
  }

  if (errorMsg) {
    return <StateGrid message={errorMsg} />;
  }

  if (favorites.length === 0) {
    return <StateGrid message="Vous n'avez pas encore de cocktails favoris." />;
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

interface StateGridProps {
  message: string;
}

function StateGrid({ message }: StateGridProps) {
  return (
    <FavoritesPageStyled>
      <h1 className="page-title">Mes Cocktails Favoris 🍸</h1>
      <div className="empty-container">
        <p>{message}</p>
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
    grid-template-columns: repeat(3, minmax(330px, 1fr));
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
