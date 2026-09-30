import styled from "styled-components";
import theme from "../../../theme/theme";

interface IngredientsListProps {
  ingredients: string[];
  measures: string[];
}

export function IngredientsList({
  ingredients,
  measures,
}: IngredientsListProps) {
  return (
    <IngredientsListStyled>
      {ingredients.map((ingredient, index) => {
        const measure = measures[index];
        return (
          <li key={index}>
            {measure && <strong>{measure}</strong>} {ingredient}
          </li>
        );
      })}
    </IngredientsListStyled>
  );
}

const IngredientsListStyled = styled.ul`
  font-family: ${theme.font.family.primary};
  font-size: ${theme.font.size.base};
  color: ${theme.colors.textSecondary};
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  line-height: 1.6;

  li strong {
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.font.weight.semibold};
  }
`;
