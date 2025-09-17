import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
    TechCard,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "@emotion/styled";

// Flip card container with perspective
const FlipCard = styled.div`
  width: 100%;
  height: 350px;
  perspective: 1000px;
  cursor: pointer;
  &:hover .project-item {
    transform: rotateY(180deg);
  }
`;

// Card container that will flip
const ProjectItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s ease-in-out;
`;

// Front face - shows project image + tech stack
const FrontFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

// Back face - shows title + description
const BackFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// Title for front face
const FrontTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px 0;
  line-height: 1.3;
  text-align: center;
`;

// Project image container for front face
const ImageContainer = styled.div`
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 8px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Tech stack on front face
const FrontTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: auto;
`;

const FrontTag = styled(TechCard)`
  font-size: 12px;
  padding: 4px 8px;
`;

// Content container for back face
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

// Description as bullet points list
const ProjectDescription = styled.ul`
  height: 200px;
  margin: 0;
  padding-left: 0;
  list-style: none;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.4;
  color: #444;
  
  li {
    margin-bottom: 12px;
    padding-left: 16px;
    position: relative;
    
    &:before {
      content: "•";
      color: #007acc;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

// Button container
const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
  justify-content: center;
`;

// Grid layout for the project cards
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 50px;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function ProjectCard() {
  return (
    <ProjectGrid>
      {ProjectList.map((project, index) => (
        <ScrollAnimation animateIn="fadeInUp" key={index} delay={index % 2 * 100}>
          <FlipCard>
            <ProjectItem className="project-item">
              {/* Front Face - Title + Project Image + Tech Stack */}
              <FrontFace>
                <FrontTitle>{project.title}</FrontTitle>
                <ImageContainer>
                  <img src={project.img} alt={project.title} />
                </ImageContainer>
                <FrontTechStack>
                  {project.tech_stack.map((tech, techIndex) => (
                    <FrontTag key={techIndex}>{tech}</FrontTag>
                  ))}
                </FrontTechStack>
              </FrontFace>
              
              {/* Back Face - Title + Description + Buttons */}
              <BackFace>
                <ContentContainer>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>
                    {Array.isArray(project.description) ? 
                      project.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      )) : 
                      <li>{project.description}</li>
                    }
                  </ProjectDescription>
                  
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
              </BackFace>
            </ProjectItem>
          </FlipCard>
        </ScrollAnimation>
      ))}
    </ProjectGrid>
  );
}

export default ProjectCard;