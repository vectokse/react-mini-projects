import styled from "styled-components";
import StatCard from "./StatCard";
import { theme } from "../theme/theme";

export default function ListSummary({ validated, total }) {
  return (
    <StyledSummary>
      <h1 className="title">Ma liste de courses</h1>
      <div className="stats-wrapper">
        <StatCard label="Total Produits" value={total} subLabel="articles" />
        <StatCard
          label="Validés"
          value={validated}
          subLabel={`/ ${total}`}
          progressPercent={(validated / total) * 100}
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
