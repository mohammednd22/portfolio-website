import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/hero_about.png"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hi, I'm <strong>Mohammed Noureddine</strong> — a Master's student in Computer Science at <strong>Northeastern University </strong>, with a background in data science and finance from the <strong>University of British Columbia</strong>.
            </ScrollAnimation>
  
            <div style={{ marginTop: "1rem" }} />
  
            <ScrollAnimation animateIn="fadeInLeft">
              I’m passionate about building scalable software, applying AI to solve real-world problems, and leveraging data for smarter decision-making. I have strong experience working across the software and data space, delivering impactful solutions that drive business outcomes.
            </ScrollAnimation>

  
            <div style={{ marginTop: "1rem" }} />
  
            <ScrollAnimation animateIn="fadeInLeft">
              Here are some of the technologies I've worked with:
            </ScrollAnimation>

            <div style={{ marginTop: "1rem" }} />
  
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
  
}

export default About;
