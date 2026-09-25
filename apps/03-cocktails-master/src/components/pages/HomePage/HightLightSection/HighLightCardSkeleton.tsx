import theme from "../../../../theme/theme";
import styled, { keyframes } from "styled-components";

export default function HighLightCardSkeleton() {
  return (
    <RandomCardSkeletonStyled>
      <div className="card-bg" />
      <div className="skeleton-badge" />
      <div className="card-content">
        <div className="title" />
        <div className="description" />
        <div className="skeleton-btn" />
      </div>
    </RandomCardSkeletonStyled>
  );
}

const spinAnimation = keyframes`
  to { transform: rotate(360deg); }
`;

const RandomCardSkeletonStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px;
  position: relative;
  min-height: 450px;
  background-color: ${theme.colors.black};
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  gap: 10px;
  box-shadow: ${theme.shadow.lg};
  pointer-events: none;

  .skeleton-badge {
    position: relative;
    z-index: 10;
    width: 140px;
    height: 28px;
    background-color: ${theme.colors.surfaceHover};
    opacity: 0.33;
    border-radius: ${theme.radius.full};
  }

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
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: ${theme.colors.surfaceHover};
    opacity: 0.33;
    transform: scale(1.04);
    z-index: 0;
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

  .btn-action {
    width: 100%;
    padding: 12px 16px;
    background-color: ${theme.colors.accent};
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
    opacity: 0.9;

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
