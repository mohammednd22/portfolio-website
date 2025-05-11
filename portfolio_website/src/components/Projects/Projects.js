import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import styled from "@emotion/styled";

const ProjectWrapper = styled.div`
  padding: 60px 0;
  position: relative;
  background: #fff;
`;

const ProjectContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.div`
  font-size: 28px;
  color: #151418;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

function Projects() {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ProjectWrapper id="projects">
        <ProjectContainer>
          <SectionTitle>Projects</SectionTitle>
          <ProjectCard />
        </ProjectContainer>
      </ProjectWrapper>
    </>
  );
}

export default Projects;