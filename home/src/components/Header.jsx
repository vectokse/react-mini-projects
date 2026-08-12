import styled from "styled-components";
import { theme } from "../theme/theme";

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-container">
        <div className="brand">
          <span className="logo">R</span>
          <a href="./" className="title">
            react-mini-projects
          </a>
        </div>
        <div className="social">
          <a
            className="social-button"
            href="https://github.com/vectokse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border-bottom: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.surface};
  font-family: ${theme.font.family};

  .header-container {
    max-width: 75rem;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 0 3.125rem;

    .brand {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      font-size: ${theme.font.size.sm};
      font-weight: ${theme.font.weight.semibold};

      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.dark};
        width: 2rem;
        height: 2rem;
        color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};
      }

      .title {
        text-decoration: none;
        color: ${theme.colors.text_primary};
        transition: all 0.2s ease;

        &:hover {
          color: ${theme.colors.dark_hover};
        }
      }
    }

    .social-button {
      background-color: ${theme.colors.dark};
      color: ${theme.colors.white};
      padding: 0.5rem 1rem;
      border-radius: ${theme.borderRadius.round};
      font-weight: ${theme.font.weight.medium};
      font-size: ${theme.font.size.sm};
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        background-color: ${theme.colors.dark_hover};
      }
    }
  }
`;
