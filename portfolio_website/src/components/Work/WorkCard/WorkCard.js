import React from "react";
import { WorkList } from "../../../data/ProjectData";
import {
  TechCard,
} from "../../Projects/ProjectCard/ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "@emotion/styled";

// Flip card container with perspective
const FlipCard = styled.div`
  width: 100%;
  height: 350px;
  perspective: 1000px;
  cursor: pointer;
  &:hover .work-item {
    transform: rotateY(180deg);
  }
`;

// Card container that will flip
const WorkItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s ease-in-out;
`;

// Front face - shows company image + tech stack
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

// Company logo container for front face
const LogoContainer = styled.div`
  height: 200px; // fixed height instead of flex: 1
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  
  img {
    max-width: 80%;
    max-height: 100%;
    object-fit: contain;
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
const WorkTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
  line-height: 1.3;
`;

// Description as bullet points list
const WorkDescription = styled.ul`
  height: 280px;
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

// Grid layout for the work cards
const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 50px;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function WorkCard() {
  return (
    <WorkGrid>
      {WorkList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInUp" key={index} delay={index % 2 * 100}>
          <FlipCard>
            <WorkItem className="work-item">
              {/* Front Face - Company Image + Tech Stack */}
              <FrontFace>
                <LogoContainer>
                  <img src={list.img} alt={list.title} />
                </LogoContainer>
                <FrontTechStack>
                  {list.tech_stack.map((tech, techIndex) => (
                    <FrontTag key={techIndex}>{tech}</FrontTag>
                  ))}
                </FrontTechStack>
              </FrontFace>
              
              {/* Back Face - Title + Description */}
              <BackFace>
                <ContentContainer>
                  <WorkTitle>{list.title}</WorkTitle>
                  <WorkDescription>
                    {Array.isArray(list.description) ? 
                      list.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      )) : 
                      <li>{list.description}</li>
                    }
                  </WorkDescription>
                </ContentContainer>
              </BackFace>
            </WorkItem>
          </FlipCard>
        </ScrollAnimation>
      ))}
    </WorkGrid>
  );
}

export default WorkCard;