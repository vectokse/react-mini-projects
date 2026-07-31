import styled from "styled-components";
import StatCard from "./StatCard";
import { theme } from "../theme/theme";

export default function ListSummary() {
  return (
    <StyledSummary>
      <h1 className="title">Ma liste de courses</h1>
      <div className="stats-wrapper">
        <StatCard label="Total Produits" value={3} subLabel="articles" />
        <StatCard
          label="Validés"
          value={1}
          subLabel="/ 12"
          progressPercent={(1 / 12) * 100}
        />
      </div>
    </StyledSummary>
  );
}

const StyledSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font.family.sans};

  .title {
    font-size: ${theme.font.size.xl};
    text-transform: capitalize;
    color: ${theme.colors.textPrimary};
    margin: 0;
  }

  .stats-wrapper {
    display: flex;
    gap: 10px;
  }
`;
