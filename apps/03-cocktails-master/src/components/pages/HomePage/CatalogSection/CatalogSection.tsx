import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import SearchInput from "./SearchBar";
import { Filters } from "./catalog.config";
import CatalogResult from "./CatalogResult";
import PillsBtn from "./PillsBtn";

import { useCocktailSearch } from "../../../../hooks/useCocktailSearch";
import theme from "../../../../theme/theme";


export default function CatalogSection() {
  const {
    displayedCocktails,
    isLoading,
    isFetchingMore,
    filter: activeFilter,
    setFilter,
    query,
    setQuerry,
    loadMoreResult,
    nbResult,
    hasMore,
    error,
  } = useCocktailSearch();

  return (
    <CatalogSectionStyled>
      <div className="catalog-header">
        <h3 className="title"> Trouvez votre inspiration</h3>
        <p className="sub-title">
          Recherchez un cocktail par son nom ou filtrez par catégorie
        </p>
      </div>

      <div className="searchFilter-wrapper">
        <SearchInput
          value={query}
          onChange={(event) => {
            setQuerry(event.target.value);
          }}
          placeholder="Rechercher un cocktail (ex: Mojito, Spritz...)"
          icon={IoIosSearch}
        />
        <div className="filter-pills">
          {Filters.map((filter) => (
            <PillsBtn
              key={filter.name}
              label={filter.label}
              onClick={() => {
                setFilter(filter.name);
              }}
              isActive={filter.name == activeFilter}
              className="test"
            />
          ))}
        </div>
      </div>

      <CatalogResult
        cocktails={displayedCocktails}
        isLoading={isLoading}
        nbResult={nbResult}
        hasMore={hasMore}
        isFetchingMore={isFetchingMore}
        loadMoreResult={loadMoreResult}
      />
    </CatalogSectionStyled>
  );
}

const CatalogSectionStyled = styled.section`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .catalog-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    text-align: center;

    .title {
      font-family: ${theme.font.family.heading};
      font-size: ${theme.font.size.xl};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.textPrimary};
      margin: 0;
      line-height: 1.2;
    }

    .sub-title {
      font-family: ${theme.font.family.primary};
      font-size: ${theme.font.size.sm};
      color: ${theme.colors.textSecondary};
      margin: 0;
    }
  }

  .searchFilter-wrapper {
    max-width: 42rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .filter-pills {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding-top: 0.5rem;
    }
  }
`;
