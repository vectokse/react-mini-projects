import { Link, type LinkProps } from "react-router";
import theme from "../../../../theme/theme";
import type { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

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
  isLoading?: boolean;
}

const DefaultColor = theme.colors.accent;

export default function RandomCard({
  title,
  description,
  to,
  imgSrc,
  textBadge,
  textAction,
  onClickAction,
  icon,
  color = DefaultColor,
  isLoading = false,
}: RandomCardProps) {
  if (isLoading) {
    return (
      <RandomCardStyled to={to} $color={color} className="is-loading">
        <div className="card-bg" />
        {textBadge && (
          <div className="card-badge">
            <span className="badge-tag">{textBadge}</span>
          </div>
        )}
        <div className="card-content">
          <div className="title" />
          <div className="description" />
          <div className="btn-action">
            <span className="spinner" />
            <span>Chargement...</span>
          </div>
        </div>
      </RandomCardStyled>
    );
  }

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
          {icon && <span className="btn-icon">{icon}</span>}
          <span>{textAction}</span>
        </button>
      </div>
    </RandomCardStyled>
  );
}

const spinAnimation = keyframes`
  to { transform: rotate(360deg); }
`;

const RandomCardStyled = styled(Link)<{ $color: string }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px;
  position: relative;
  min-height: 450px;
  background-color: ${theme.colors.black};
  text-decoration: none;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  gap: 10px;
  cursor: pointer;
  box-shadow: ${theme.shadow.lg};
  transition: all 0.4s ease-in-out;

  &.is-loading {
    pointer-events: none;
    cursor: default;

    .title,
    .description {
      color: transparent !important;
      background-color: ${theme.colors.surfaceHover};
      opacity: 0.33;
      border-radius: ${theme.radius.sm};
      user-select: none;
    }

    .title {
      width: 30%;
      height: 24px;
      margin-bottom: 0.5rem;
    }

    .description {
      width: 100%;
      height: 40px;
      margin-bottom: 1rem;
    }

    .card-bg {
      background-color: ${theme.colors.surfaceHover};
      opacity: 0.33;
      transform: scale(1.04);
    }
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
    opacity: 1;
    transform: translateY(0);
  }

  .card-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.33;
    z-index: 0;
    transition:
      transform 0.7s ease,
      opacity 0.4s ease;
  }

  &:hover:not(.is-loading) .card-bg {
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

  .title {
    font-family: ${theme.font.family.heading};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    margin: 0 0 0.5rem 0;
    line-height: 1.2;
    transition: background 0.3s ease;
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
    transition: background 0.3s ease;
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
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.5s ease;
    }

    &:hover .btn-icon {
      transform: rotate(400deg);
    }

    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-left-color: ${theme.colors.surface};
      border-radius: 50%;
      animation: ${spinAnimation} 0.8s linear infinite;
      display: inline-block;
    }
  }
`;
