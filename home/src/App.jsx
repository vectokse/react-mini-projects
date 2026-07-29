import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { theme } from "./theme/theme";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  return (
    <StyledApp>
      <Header />
      <section className="main-section">
        <Hero />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectLink={project.link}
              imageUrl={project.imageUrl}
              title={project.title}
            />
          ))}
        </div>
      </section>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: ${theme.font.family};
  background-color: ${theme.colors.background};

  .main-section {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 2.1875rem;
    padding: 4.375rem 1.25rem 6.25rem 1.25rem;

    .project-grid {
      width: 90vw;
      max-width: 75rem;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20.625rem, 1fr));
      gap: 2rem;
    }
  }
`;
