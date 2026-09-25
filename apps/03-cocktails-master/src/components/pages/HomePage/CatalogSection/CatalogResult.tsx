import type { Cocktail } from "../../../../types/cocktail.types";
import CocktailCard from "./CocktailCard";
import CardSkeleton from "../../../reusable-ui/CardSkeleton";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import PrimaryBtn from "../../../reusable-ui/PrimaryBtn";
import { IoIosArrowDown } from "react-icons/io";
import { Spinner } from "../../../reusable-ui/Spinner";
import LoadMore from "./LoadMore";

interface CatalogResultProps {
  isLoading: boolean;
  cocktails: Cocktail[];
  nbResult: number;
  hasMore: boolean;
  isFetchingMore: boolean;
  loadMoreResult: () => {};
}

export default function CatalogResult({
  isLoading,
  cocktails,
  nbResult,
  hasMore,
  isFetchingMore,
  loadMoreResult,
}: CatalogResultProps) {
  if (isLoading) {
    return <LoadingGrid nbItems={9} />;
  }

  if (!isLoading && cocktails.length === 0) {
    return <EmptyGrid />;
  }

  return (
    <CatalogResultStyled>
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
      <LoadMore hasMore={hasMore} isFetchingMore={isFetchingMore} loadMoreResult={loadMoreResult} />
    </CatalogResultStyled>
  );
}

const CatalogResultStyled = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .result-count {
    font-family: "Playfair Display", serif;
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.semibold};
    color: ${theme.colors.textPrimary};
  }

  .result-grid {
    display: grid;
    min-height: 400px;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 2rem;
  }
`;

interface LoadingGridProps {
  nbItems: number;
}

function LoadingGrid({ nbItems }: LoadingGridProps) {
  return (
    <LoadingGridStyled>
      <div className="result-grid">
        {Array.from({ length: nbItems }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </LoadingGridStyled>
  );
}

const LoadingGridStyled = styled.div`
  padding: 60px 1.5rem;
  .result-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 2rem;
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
  height: 500px;
  padding: 60px 1.5rem;
  margin: 0 auto;
  text-align: center;

  ${theme.device.tablet} {
    height: 350px;
  }

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
