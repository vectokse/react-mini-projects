import { Link, type LinkProps } from "react-router";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import type { ReactNode } from "react";
import { LuRefreshCcw } from "react-icons/lu";

interface RandomCardProps extends LinkProps {
  title: string;
  description: string;
  to: string;
  imgSrc: string;
  onClickAction: () => void;
  textAction: string;
  icon?: ReactNode;
  textBadge?: string;
  color?: string;
}

const DefaultColor = theme.colors.accent;

const DefaultIcon = <LuRefreshCcw />;

export default function RandomCard({
  title,
  description,
  to,
  imgSrc,
  textBadge,
  textAction,
  onClickAction,
  icon = DefaultIcon,
  color = DefaultColor,
}: RandomCardProps) {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onClickAction();
  };

  return (
    <RandomCardStyled to={to} $color={color}>
      <img src={imgSrc} className="card-bg" alt={title} />
      {textBadge && (
        <div className="card-badge">
          <span className="badge-tag">{textBadge}</span>
        </div>
      )}
      <div className="card-content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <button className="btn-action" onClick={handleButtonClick}>
          <span className="btn-icon">{icon}</span>
          <span>{textAction}</span>
        </button>
      </div>
    </RandomCardStyled>
  );
}

const RandomCardStyled = styled(Link)<{ $color: string }>`
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
  gap: 10px;
  cursor: pointer;
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

  .btn-action {
    width: 100%;
    padding: 12px 16px;
    background-color: ${(props) => props.$color};
    border: none;
    color: ${theme.colors.surface};
    font-family: ${theme.font.family.primary};
    font-weight: ${theme.font.weight.semibold};
    border-radius: ${theme.radius.md};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: ${theme.font.size.sm};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.95);
    }

    .btn-icon {
      width: 16px;
      height: 16px;
      color: ${theme.colors.surface};
      transition: transform 0.5s ease;
    }

    &:hover .btn-icon {
      transform: rotate(400deg);
    }
  }
`;
