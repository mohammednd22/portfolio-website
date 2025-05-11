import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
    TechCardContainer,
    TechCard,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "@emotion/styled";

// Fixed-size project card with strict dimensions
const ProjectItem = styled.div`
  width: 100%;
  height: 450px; // Fixed height for all cards
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// Full-size image container for projects
const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-bottom: 1px solid #eaeaea;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // This will ensure the image covers the entire container
    object-position: center; // Center the image
  }
`;

// Content container with strict padding
const ContentContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

// Title with fixed size
const ProjectTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
  line-height: 1.3;
`;

// Description with fixed height and overflow handling
const ProjectDescription = styled.p`
  height: 120px; // Fixed height for description
  margin: 0 0 16px 0;
  overflow-y: auto; // Allow scrolling for longer content
  font-size: 15px;
  line-height: 1.5;
  color: #444;
`;

// Tech stack tags container
const TagsContainer = styled(TechCardContainer)`
  margin-top: auto; // Push to bottom of flex container
  justify-content: flex-start;
`;

// Styled tech tag
const Tag = styled(TechCard)`
  margin: 4px 8px 4px 0;
  font-size: 13px;
`;

// Grid layout for the project cards
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 50px; // Add space at bottom before next section
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// Button container
const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

function ProjectCard() {
  return (
    <ProjectGrid>
      {ProjectList.map((project, index) => (
        <ScrollAnimation animateIn="fadeInUp" key={index} delay={index % 2 * 100}>
          <ProjectItem>
            <ImageContainer>
              <img src={project.img} alt={project.title} />
            </ImageContainer>
            <ContentContainer>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>
                {project.description}
              </ProjectDescription>
              <TagsContainer>
                {project.tech_stack.map((tech, techIndex) => (
                  <Tag key={techIndex}>{tech}</Tag>
                ))}
              </TagsContainer>
              
              {/* Only show buttons if URLs are available */}
              {(project.github_url?.length > 0 || project.demo_url?.length > 0) && (
                <ButtonContainer>
                  {project.github_url?.length > 0 && (
                    <a
                      className="btn SecondaryBtn btn-shadow"
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  )}
                  {project.demo_url?.length > 0 && (
                    <a
                      className="btn PrimaryBtn btn-shadow"
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo ➜
                    </a>
                  )}
                </ButtonContainer>
              )}
            </ContentContainer>
          </ProjectItem>
        </ScrollAnimation>
      ))}
    </ProjectGrid>
  );
}

export default ProjectCard;