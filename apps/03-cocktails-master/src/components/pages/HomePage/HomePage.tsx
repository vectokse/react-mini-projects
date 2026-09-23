import styled from "styled-components";
import HeroSection from "./HeroSection";
import CatalogSection from "./CatalogSection/CatalogSection";
import HighLightSection from "./HightLightSection/HighLightSection";

export default function HomePage() {
  return (
    <HomePageStyled>
      <HeroSection />
      <div className="homepage-content">
        <HighLightSection />
        <CatalogSection />
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  .homepage-content {
    padding: 64px 24px 120px 24px;
    max-width: 1280px;
    margin: auto;
  }
`;
