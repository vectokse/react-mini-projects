import styled from "styled-components";
import Hero from "./Hero";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectGallery() {
  return (
    <StyledProjectGallery>
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
    </StyledProjectGallery>
  );
}

const StyledProjectGallery = styled.section`
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
`;
