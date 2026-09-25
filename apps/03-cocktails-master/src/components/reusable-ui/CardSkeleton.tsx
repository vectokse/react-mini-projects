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

const SkeletonStyled = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 195px;
  background: ${theme.colors.surfaceHover};
  border-radius: ${theme.radius.md};
  flex-direction: column;

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
        background: rgb(219 220 221);
        border-radius: ${theme.radius.sm};
      }
    }

    .skeleton-text {
      width: 100%;
      height: 16px;
      background: rgb(219 220 221);
      border-radius: ${theme.radius.sm};

      &.short {
        width: 40%;
      }
    }
  }
`;
