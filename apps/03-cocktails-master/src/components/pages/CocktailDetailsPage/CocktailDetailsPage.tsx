import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import theme from "../../../theme/theme";

import { useCocktailDetail } from "../../../hooks/useCocktailDetail";
import { IngredientsList } from "./IngredientsList";
import { BadgeCocktail } from "./BadgeCocktail";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useFavorite from "../../../context/FavoritesContext";
import { IconBtn } from "../../reusable-ui/IconBtn";
import StateMessage from "../../reusable-ui/StateMessage";
import PrimaryBtn from "../../reusable-ui/PrimaryBtn";

export default function CocktailDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { cocktail, isLoading, error } = useCocktailDetail(id);

  const { toggleFavorite, isFavorites } = useFavorite();
  const navigate = useNavigate();

  if (isLoading) {
    return <StateMessage message="Chargement de la recette..." />;
  }

  if (error) {
    return (
      <StateMessage
        message={error}
        actionLabel="Retour"
        onActionClick={() => navigate(-1)}
      />
    );
  }

  if (!cocktail) {
    return (
      <StateMessage
        message="🍸 Oups ! Ce cocktail est introuvable."
        actionLabel="Retour"
        onActionClick={() => navigate(-1)}
      />
    );
  }

  const isFav = isFavorites(cocktail.id);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <CocktailDetailsStyled>
      <div className="nav-container">
        <PrimaryBtn label="Retour" onClick={handleClick} size="sm" />
      </div>

      <div className="detail-layout">
        <div className="left-column">
          <div className="img-wrapper">
            <img src={cocktail.imgSrc} alt={cocktail.title} />
          </div>
          <BadgeCocktail category={cocktail.category} tags={cocktail.tags} />
        </div>

        <div className="right-column">
          <div className="header-row">
            <h1>{cocktail.title}</h1>
            <IconBtn
              icon={isFav ? <FaHeart /> : <FaRegHeart />}
              variant="surface"
              size="md"
              onClick={() => toggleFavorite(cocktail)}
              aria-label={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
            />
          </div>

          <div className="section">
            <h3>Ingrédients</h3>
            <IngredientsList
              ingredients={cocktail.ingredients}
              measures={cocktail.measures}
            />
          </div>

          {cocktail.instruction && (
            <div className="section">
              <h3>Préparation</h3>
              <p>{cocktail.instruction}</p>
            </div>
          )}

          <div className="glass-info">
            <strong>Verre recommandé :</strong> {cocktail.glass}
          </div>
        </div>
      </div>
    </CocktailDetailsStyled>
  );
}

const CocktailDetailsStyled = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1.5rem;

  .nav-container {
    margin-bottom: 2rem;

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: ${theme.colors.textSecondary};
      font-family: ${theme.font.family.primary};
      font-weight: ${theme.font.weight.medium};
      font-size: ${theme.font.size.sm};
      transition: color 0.2s ease;

      &:hover {
        color: ${theme.colors.accent};
      }
    }
  }

  .detail-layout {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 3rem;

    ${theme.device.tablet} {
      grid-template-columns: 1fr;
      align-items: start;
    }
  }

  .left-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .img-wrapper {
    width: 100%;
    height: 380px;
    border-radius: ${theme.radius.lg};
    overflow: hidden;
    box-shadow: ${theme.shadow.md};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .header-row {
      display: grid;
      grid-template-columns: auto 50px;
      gap: 1rem;

      h1 {
        font-family: ${theme.font.family.heading};
        font-size: 2.5rem;
        color: ${theme.colors.textPrimary};
        margin: 0;
        line-height: 1.1;
      }

      .glass-info {
        font-family: ${theme.font.family.primary};
        font-size: ${theme.font.size.base};
        color: ${theme.colors.textSecondary};

        strong {
          color: ${theme.colors.textPrimary};
          font-weight: ${theme.font.weight.semibold};
        }
      }

      .section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h3 {
          font-family: ${theme.font.family.heading};
          font-size: 1.25rem;
          color: ${theme.colors.accent};
          margin: 0;
        }

        p {
          font-family: ${theme.font.family.primary};
          font-size: ${theme.font.size.base};
          color: ${theme.colors.textSecondary};
          margin: 0;
          line-height: 1.6;
        }
      }
    }
  }
`;
