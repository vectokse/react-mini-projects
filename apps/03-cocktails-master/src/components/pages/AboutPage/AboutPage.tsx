import styled from "styled-components";
import theme from "../../../theme/theme";

export default function AboutPage() {
  return (
    <AboutStyled>
      <h1>À propos 🍸</h1>

      <p className="intro">
        Bienvenue sur <span className="brand-name">Cocktails Master</span>,
        votre carnet de recettes de poche.
      </p>

      <section>
        <h2>L'art de la mixologie</h2>
        <p>
          Des grands classiques intemporels aux découvertes les plus originales,
          plongez dans une collection pensée pour toutes vos envies.
          Ingrédients, dosages précis, instructions de préparation et verre
          idéal : tout y est pour que chaque dégustation soit une réussite. Il
          ne vous reste plus qu'à lever votre verre !
        </p>
      </section>

      <section className="source-section">
        <h2>Source des données</h2>
        <p>
          Toutes les recettes et les images proviennent de l'API publique{" "}
          <a
            href="https://www.thecocktaildb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            TheCocktailDB
          </a>
          .
        </p>
      </section>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  max-width: 700px;
  width: 100%;
  padding: 4rem 1.5rem;
  gap: 2.5rem;

  h1 {
    font-family: ${theme.font.family.heading};
    font-size: ${theme.font.size.xxl};
    color: ${theme.colors.textPrimary};
    margin: 0;
  }

  .intro {
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.lg};
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    margin: 0;

    .brand-name {
      color: ${theme.colors.accent};
      font-weight: ${theme.font.weight.semibold};
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h2 {
      font-family: ${theme.font.family.heading};
      font-size: ${theme.font.size.md};
      color: ${theme.colors.textPrimary};
      margin: 0;
    }

    p {
      font-family: ${theme.font.family.primary};
      font-size: ${theme.font.size.base};
      color: ${theme.colors.textSecondary};
      margin: 0;
      line-height: 1.7;

      .external-link {
        color: ${theme.colors.accent};
        text-decoration: none;
        font-weight: ${theme.font.weight.semibold};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .source-section {
    padding-top: 1rem;
    border-top: 1px solid ${theme.colors.border};
  }
`;
