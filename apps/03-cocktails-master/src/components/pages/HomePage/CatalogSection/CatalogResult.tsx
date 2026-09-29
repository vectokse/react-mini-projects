import type { Cocktail } from "../../../../types/cocktail.types";
import CardSkeleton from "../../../reusable-ui/CardSkeleton";
import StateMessage from "../../../reusable-ui/StateMessage";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import LoadMore from "./LoadMore";
import useFavorite from "../../../../context/FavoritesContext";
import { CatalogItem } from "./CatalogItem";

interface CatalogResultProps {
  isLoading: boolean;
  cocktails: Cocktail[];
  nbResult: number;
  hasMore: boolean;
  isFetchingMore: boolean;
  loadMoreResult: () => {};
  errorMsg: string;
}

export default function CatalogResult({
  isLoading,
  cocktails,
  nbResult,
  hasMore,
  isFetchingMore,
  loadMoreResult,
  errorMsg,
}: CatalogResultProps) {
  const { isFavorites, toggleFavorite } = useFavorite();


  if (isLoading) {
    return <LoadingGrid nbItems={9} />;
  }

  if (errorMsg) {
    return (
      <StateMessage
        message={errorMsg}
        actionLabel="Réessayer"
        onActionClick={() => window.location.reload()}
      />
    );
  }

  if (!isLoading && cocktails.length === 0) {
    return (
      <StateMessage message="🍸 Oups ! Aucun cocktail ne correspond à votre recherche." />
    );
  }

  return (
    <CatalogResultStyled>
      <h3 className="result-count">Résultats ({nbResult})</h3>
      <div className="result-grid">
        {cocktails.map((cocktail) => (
          <CatalogItem
            key={cocktail.id}
            cocktail={cocktail}
            isFavorite={isFavorites(cocktail.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <LoadMore
        hasMore={hasMore}
        isFetchingMore={isFetchingMore}
        loadMoreResult={loadMoreResult}
      />
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
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
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
