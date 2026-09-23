import { Link, type LinkProps } from "react-router";
import styled from "styled-components";
import theme from "../../../../theme/theme";

interface DailyCardProps extends LinkProps {
  title: string;
  description: string;
  textAction: string;
  to: string;
  imgSrc: string;
  textBadge?: string;
  color?: string;
}

const DefaultColor = theme.colors.accent;

export default function DailyCard({
  title,
  description,
  textAction,
  to,
  imgSrc,
  textBadge,
  color = DefaultColor,
}: DailyCardProps) {
  return (
    <DailyCardStyled to={to} $color={color}>
      <img src={imgSrc} className="card-bg" alt={title} />
      {textBadge && (
        <div className="card-badge">
          <span className="badge-tag">{textBadge}</span>
        </div>
      )}
      <div className="card-content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <p className="card-action">{textAction}</p>
      </div>
    </DailyCardStyled>
  );
}

const DailyCardStyled = styled(Link)<{ $color: string }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px;
  position: relative;
  min-height: 280px;
  background-color: ${theme.colors.black};
  text-decoration: none;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  cursor: pointer;
  gap: 10px;
  box-shadow: ${theme.shadow.lg};

  .card-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.33;
    z-index: 0;
    transition: transform 0.7s;
  }

  &:hover .card-bg {
    transform: scale(1.05);
  }

  .card-badge {
    position: relative;
    z-index: 10;
  }

  .badge-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background-color: ${(props) => props.$color};
    color: ${theme.colors.surface};
    font-size: ${theme.font.size.xs};
    font-weight: ${theme.font.weight.bold};
    border-radius: ${theme.radius.full};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: ${theme.shadow.sm};
  }

  .card-content {
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 10;
    color: ${theme.colors.surface};
    gap: 1rem;
  }

  .title {
    font-family: ${theme.font.family.heading};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    margin: 0 0 0.5rem 0;
    line-height: 1.2;
  }

  .description {
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.base};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.textLight};
    margin: 0 0 1rem 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5;
  }

  .card-action {
    font-family: ${theme.font.family.primary};
    color: ${(props) => props.$color};
    font-weight: ${theme.font.weight.semibold};
    font-size: ${theme.font.size.base};
    margin: 0;
    transition: transform 0.3s ease;
  }

  &:hover .card-action {
    transform: translateX(0.25rem);
  }
`;
