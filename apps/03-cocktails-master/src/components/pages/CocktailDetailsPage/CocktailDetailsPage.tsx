import { useParams, Link } from "react-router";
import styled from "styled-components";
import theme from "../../../theme/theme";
import { IoIosArrowBack } from "react-icons/io";
import { useCocktailDetail } from "../../../hooks/useCocktailDetail";
import { IngredientsList } from "./IngredientsList";
import { BadgeCocktail } from "./BadgeCocktail";

export default function CocktailDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { cocktail, isLoading, error } = useCocktailDetail(id);

  if (isLoading) {
    return <LoadingCocktail />;
  }

  if (error || !cocktail) {
    return <ErrorCocktail error={error} />;
  }

  return (
    <CocktailDetailsStyled>
      <div className="nav-container">
        <Link to="/" className="back-btn">
          <IoIosArrowBack /> Retour
        </Link>
      </div>

      <div className="detail-layout">
        <div className="left-column">
          <div className="img-wrapper">
            <img src={cocktail.imgSrc} alt={cocktail.title} />
          </div>
          <BadgeCocktail category={cocktail.category} tags={cocktail.tags} />
        </div>

        <div className="right-column">
          <h1>{cocktail.title}</h1>

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
`;

function LoadingCocktail() {
  return <CenterWrapper>Chargement de la recette...</CenterWrapper>;
}

interface ErrorCocktailProps {
  error?: string | null;
}

function ErrorCocktail({ error }: ErrorCocktailProps) {
  return (
    <CenterWrapper>
      <h2>Oups ! {error || "Ce cocktail n'existe pas 🍸"}</h2>
      <Link to="/" className="back-link">
        Retour à l'accueil
      </Link>
    </CenterWrapper>
  );
}

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  gap: 1rem;
  font-family: ${theme.font.family.primary};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.font.size.md};
  text-align: center;

  h2 {
    font-family: ${theme.font.family.heading};
    color: ${theme.colors.textPrimary};
  }

  .back-link {
    color: ${theme.colors.accent};
    font-weight: ${theme.font.weight.semibold};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
