import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme";

export default function CardSkeleton() {
  return (
    <SkeletonStyled>
      <div className="skeleton-img"></div>
      <div className="skeleton-content">
        <div className="info-group">
          <div className="skeleton-title" />
          <div className="skeleton-text" />
        </div>
        <div className="skeleton-text short" />
      </div>
    </SkeletonStyled>
  );
}

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const SkeletonStyled = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 195px;
  background: ${theme.colors.surfaceHover};
  border-radius: ${theme.radius.md};
  flex-direction: column;
  animation: ${pulse} 1.5s infinite ease-in-out;

  .skeleton-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    padding: 24px;

    .info-group {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .skeleton-title {
        width: 60%;
        height: 24px;
        background: ${theme.colors.textSecondary};
        border-radius: ${theme.radius.sm};
      }
    }

    .skeleton-text {
      width: 100%;
      height: 16px;
      background: ${theme.colors.textSecondary};
      border-radius: ${theme.radius.sm};

      &.short {
        width: 40%;
      }
    }
  }
`;
