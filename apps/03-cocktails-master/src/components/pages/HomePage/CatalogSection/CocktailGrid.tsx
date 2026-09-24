import type { Cocktail } from "../../../../types/cocktail.types";
import CocktailCard from "./CocktailCard";
import { IoIosArrowDown } from "react-icons/io";
import PrimaryBtn from "../../../reusable-ui/PrimaryBtn";
import CardSkeleton from "../../../reusable-ui/CardSkeleton";
import styled from "styled-components";
import theme from "../../../../theme/theme";

interface CocktailGridProps {
  isLoading: boolean;
  cocktails: Cocktail[];
  nbResult: number;
  hasMore: boolean;
  loadMoreResult: () => {};
}

export default function CocktailGrid({
  isLoading,
  cocktails,
  nbResult,
  hasMore,
  loadMoreResult,
}: CocktailGridProps) {
  if (isLoading && cocktails.length === 0) {
    return <LoadingGrid />;
  }

  if (!isLoading && cocktails.length === 0) {
    return <EmptyGrid />;
  }

  return (
    <CocktailGridStyled>
      <h3 className="result-count">Résultats ({nbResult})</h3>
      <div className="result-grid">
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.id}
            title={cocktail.title}
            description={cocktail.ingredients.join(", ")}
            to={`cocktail/${cocktail.id}`}
            imgSrc={cocktail.imgSrc}
          />
        ))}
      </div>
      {hasMore && (
        <div className="load-more-container">
          <PrimaryBtn
            label="Voir plus de cocktails"
            icon={IoIosArrowDown}
            onClick={() => loadMoreResult()}
          />
        </div>
      )}
    </CocktailGridStyled>
  );
}

const CocktailGridStyled = styled.div`
  .result-count {
    font-family: "Playfair Display", serif;
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: 1.5rem;
  }

  .result-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .load-more-container {
    display: flex;
    justify-content: center;
  }
`;

function LoadingGrid() {
  return (
    <LoadingGridStyled>
      <div className="result-grid">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </LoadingGridStyled>
  );
}

const LoadingGridStyled = styled.div`
  .result-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

function EmptyGrid() {
  return (
    <EmptyGridStyled>
      <p>🍸 Oups ! Aucun cocktail ne correspond à votre recherche.</p>
    </EmptyGridStyled>
  );
}
const EmptyGridStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  padding: 3rem 1.5rem;
  margin: 2rem auto;
  text-align: center;

  border-radius: ${theme.radius.md};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.font.size.md};
  font-family: ${theme.font.family.primary};
  max-width: 500px;

  .empty-result p {
    margin: 0;
    font-weight: ${theme.font.weight.medium};
  }
`;
