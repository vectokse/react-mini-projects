import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme";

export default function CardSkeleton() {
  return (
    <SkeletonStyled>
      <div className="skeleton-badge" />
      <div className="skeleton-content">
        <div className="skeleton-title" />
        <div className="skeleton-text" />
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
  flex: 1;
  height: 250px;
  background: ${theme.colors.surfaceHover};
  border-radius: ${theme.radius.md};
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${pulse} 1.5s infinite ease-in-out;

  .skeleton-badge {
    width: 120px;
    height: 24px;
    background: ${theme.colors.textSecondary};
    border-radius: ${theme.radius.sm};
  }

  .skeleton-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .skeleton-title {
    width: 60%;
    height: 24px;
    background: ${theme.colors.textSecondary};
    border-radius: ${theme.radius.sm};
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
`;
