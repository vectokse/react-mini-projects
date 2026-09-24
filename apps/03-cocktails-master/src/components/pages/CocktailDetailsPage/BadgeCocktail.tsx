import styled from "styled-components";
import theme from "../../../theme/theme";

interface BadgeProps {
  category: string;
  tags: string[];
}

export function BadgeCocktail({ category, tags }: BadgeProps) {
  return (
    <BadgeContainer>
      <span className="category-badge">{category}</span>
      {tags.length > 0 && (
        <div className="meta-badge-container">
          {tags.map((tag, index) => (
            <span className="tag-badge" key={index}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </BadgeContainer>
  );
}

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .category-badge {
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.xs};
    color: ${theme.colors.surface};
    background-color: ${theme.colors.accent};
    font-weight: ${theme.font.weight.semibold};
    padding: 6px 12px;
    border-radius: ${theme.radius.sm};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    width: fit-content;
  }

  .meta-badge-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .tag-badge {
      background-color: ${theme.colors.surface};
      color: ${theme.colors.textSecondary};
      font-family: ${theme.font.family.primary};
      font-size: ${theme.font.size.xs};
      font-weight: ${theme.font.weight.medium};
      padding: 4px 10px;
      border-radius: ${theme.radius.full};
      border: 1px solid ${theme.colors.border};
    }
  }
`;
