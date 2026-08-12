import styled from "styled-components";
import { theme } from "./../theme/theme";

export default function StatCard({ label, value, subLabel, progressPercent }) {
  return (
    <StyledStatCard $progressPercent={progressPercent}>
      <span className="label">{label}</span>
      <div className="value-wrapper">
        <span className="value">{value}</span>
        <span className="sub-label">{subLabel}</span>
      </div>
      {progressPercent !== undefined && (
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      )}
    </StyledStatCard>
  );
}

const StyledStatCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 110px;
  padding: 14px 20px;
  border-radius: ${theme.radius.md};
  overflow: hidden;

  background-color: ${theme.colors.surface};
  box-shadow: ${theme.shadow.xs};
  color: ${theme.colors.textSecondary};

  .label {
    font-size: ${theme.font.size.xs};
    font-weight: ${theme.font.weight.bold};
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }

  .value-wrapper {
    display: flex;
    gap: 5px;
    align-items: baseline;

    .value {
      font-size: ${theme.font.size.xl};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.primary};
      line-height: 1;
    }

    .sub-label {
      font-size: ${theme.font.size.sm};
      font-weight: ${theme.font.weight.regular};
    }
  }

  .progress-bar {
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 4px;
    width: 100%;
    background-color: ${theme.colors.primaryTint};

    .progress-fill {
      height: 100%;
      width: ${(props) => `${props.$progressPercent}%`};
      background-color: ${theme.colors.primary};
    }
  }
`;
