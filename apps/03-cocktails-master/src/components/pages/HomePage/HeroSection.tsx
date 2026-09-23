import styled from "styled-components";
import theme from "../../../theme/theme";

export default function HeroSection() {
  return (
    <HeroSectionStyled>
      <img className="hero-bg" src="bg-hero.webp" alt="Ambiance Cocktail" />
      <div className="hero-content">
        <h3 className="hero-title">
          L'art du cocktail à <br /> portée de main
        </h3>
        <p className="hero-subtitle">
          Explorez, maîtrisez et préparez les meilleurs cocktails pour toutes
          vos occasions.
        </p>
      </div>
    </HeroSectionStyled>
  );
}

const HeroSectionStyled = styled.section`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  min-height: 300px;
  flex-direction: column;
  background-color: ${theme.colors.black};

  .hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.33;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 16px;
    max-width: 670px;
    gap: 30px;

    .hero-title {
      font-family: ${theme.font.family.heading};
      font-size: ${theme.font.size.xxl};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.surface};
      letter-spacing: 0.5px;

      ${theme.device.tablet} {
        font-size: ${theme.font.size.xl};
      }
    }

    .hero-subtitle {
      font-family: ${theme.font.family.primary};
      font-size: ${theme.font.size.base};
      font-weight: ${theme.font.weight.regular};
      color: ${theme.colors.textLight};
      margin: 0;
      line-height: 1.5;
    }
  }
`;
