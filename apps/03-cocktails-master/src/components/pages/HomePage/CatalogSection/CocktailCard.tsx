import { Link, type LinkProps } from "react-router";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import { memo } from "react";

interface CocktailCardProps extends LinkProps {
  title: string;
  description: string;
  to: string;
  imgSrc: string;
}

function CocktailCard({ title, description, to, imgSrc }: CocktailCardProps) {
  return (
    <CocktailCardStyled to={to}>
      <div className="img-wrapper">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="content-wrapper">
        <div className="info-group">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <span>Voir la fiche &rarr;</span>
      </div>
    </CocktailCardStyled>
  );
}

export default memo(CocktailCard);

const CocktailCardStyled = styled(Link)`
  height: 12rem;
  display: grid;
  grid-template-columns: 40% 60%;
  text-decoration: none;
  background-color: ${theme.colors.surface};
  border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadow.sm};
  overflow: hidden;
  border: 1px solid ${theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.shadow.md};

    .img-wrapper img {
      transform: scale(1.05);
    }
  }

  .img-wrapper {
    background-color: ${theme.colors.surfaceHover};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  .content-wrapper {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid ${theme.colors.border};

    h4 {
      font-family: ${theme.font.family.heading};
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.size.md};
      color: ${theme.colors.textPrimary};
      margin: 0 0 0.4rem 0;
    }

    p {
      font-family: ${theme.font.family.primary};
      font-size: ${theme.font.size.xs};
      color: ${theme.colors.textSecondary};
      margin: 0 0 0.75rem 0;
    }

    span {
      font-family: ${theme.font.family.primary};
      color: ${theme.colors.accent};
      font-size: ${theme.font.size.xs};
      font-weight: ${theme.font.weight.semibold};
    }
  }
`;
