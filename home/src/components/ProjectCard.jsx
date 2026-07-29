import styled from "styled-components";
import { theme } from "../theme/theme";

export default function ProjectCard({ projectLink, imageUrl, title }) {
  return (
    <StyledProjectCard href={projectLink}>
      <div className="img-wrapper">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>
      <span className="title">{title}</span>
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled.a`
  display: grid;
  grid-template-rows: 80% 1fr;
  height: 15.625rem;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);

    .img-wrapper img {
      transform: scale(1.1);
    }
  }

  .img-wrapper {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .title {
    padding: 0.75rem 1rem;
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.text_primary};
    text-align: center;
  }
`;
