import React from "react";
import { WorkList } from "../../../data/ProjectData";
import {
    TechCardContainer,
    TechCard,
} from "../../Projects/ProjectCard/ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "@emotion/styled";

// Fixed-size work card with strict dimensions
const WorkItem = styled.div`
  width: 100%;
  height: 450px; // Fixed height for all cards
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// Fixed-size image container
const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
  
  img {
    max-width: 160px;
    max-height: 140px;
    object-fit: contain;
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
const WorkTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
  line-height: 1.3;
`;

// Description with fixed height and overflow handling
const WorkDescription = styled.p`
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

// Grid layout for the work cards
const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 50px; // Add space at bottom before next section
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function WorkCard() {
    return (
      <WorkGrid>
        {WorkList.map((list, index) => (
          <ScrollAnimation animateIn="fadeInUp" key={index} delay={index % 2 * 100}>
            <WorkItem>
              <ImageContainer>
                <img src={list.img} alt={list.title} />
              </ImageContainer>
              <ContentContainer>
                <WorkTitle>{list.title}</WorkTitle>
                <WorkDescription>
                  {list.description || list.desccription || ""}
                </WorkDescription>
                <TagsContainer>
                  {list.tech_stack.map((tech, techIndex) => (
                    <Tag key={techIndex}>{tech}</Tag>
                  ))}
                </TagsContainer>
              </ContentContainer>
            </WorkItem>
          </ScrollAnimation>
        ))}
      </WorkGrid>
    );
}
  
export default WorkCard;