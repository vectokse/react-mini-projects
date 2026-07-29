import styled from "styled-components";
import { theme } from "../theme/theme";

export default function Hero() {
  return (
    <StyledHero className="hero">
      <h3 className="hero-title">Projects</h3>
      <p className="hero-description">
        A collection of small applications built to practice React.
      </p>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  text-align: center;

  .hero-title {
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.semibold};
    color: ${theme.colors.text_primary};
    letter-spacing: -0.02em;
    margin: 0;
  }

  .hero-description {
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.regular};
    line-height: 1.6;
    color: ${theme.colors.text_secondary};
    margin: 0;
  }
`;
