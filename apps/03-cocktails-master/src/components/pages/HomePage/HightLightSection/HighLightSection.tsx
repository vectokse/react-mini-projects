import styled from "styled-components";
import theme from "../../../../theme/theme";
import RandomCard from "./RandomCard";
import DailyCard from "./DailyCard";
import { useRandomCocktail } from "../../../../hooks/useRandomCocktail";
import { useDailyCocktail } from "../../../../hooks/useDailyCocktail";
import CardSkeleton from "../../../reusable-ui/CardSkeleton";

export default function HighLightSection() {
  const {
    dailyCocktail,
    isLoading: isDailyLoading,
    error: dailyError,
  } = useDailyCocktail();

  const {
    randomCocktail,
    isLoading: isRandomLoading,
    getRandomCocktail,
    error: randomError,
  } = useRandomCocktail();

  return (
    <HighLightStyled className="HighLight-section">
      {isDailyLoading && <CardSkeleton />}

      {dailyError && (
        <div className="error-message">
          Impossible de charger le cocktail du jour.
        </div>
      )}
      {!isDailyLoading && !dailyError && dailyCocktail && (
        <DailyCard
          title={dailyCocktail.title}
          description={dailyCocktail.ingredients.join(",")}
          textAction="Découvrir la recette →"
          to={`/cocktail/${dailyCocktail.id}`}
          imgSrc={dailyCocktail.imgSrc}
          textBadge="🌟 Cocktail du jour"
        />
      )}

      {isRandomLoading && <CardSkeleton />}

      {randomError && (
        <div className="error-message">
          Impossible de charger la découverte aléatoire.
        </div>
      )}

      {!isRandomLoading && !randomError && randomCocktail && (
        <RandomCard
          title={randomCocktail.title}
          description={randomCocktail.ingredients.join(", ")}
          to={`/cocktail/${randomCocktail.id}`}
          onClickAction={getRandomCocktail}
          textAction="Changer de cocktail"
          imgSrc={randomCocktail.imgSrc}
          textBadge="🎲 Découverte Aléatoire"
          color="#923bdf"
        />
      )}
    </HighLightStyled>
  );
}

const HighLightStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 40px 0;

  ${theme.device.tablet} {
    grid-template-columns: 1fr;
  }

  & > * {
    flex: 1;
  }

  .error-message {
    color: red;
    font-size: 0.875rem;
  }
`;
