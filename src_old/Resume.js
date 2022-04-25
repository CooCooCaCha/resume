import React from "react";
import styled from "styled-components";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBriefcase from "@fortawesome/free-solid-svg-icons/faBriefcase";

import Header from "./sections/Header";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import InterestsSection from "./sections/InterestsSection";

import data from "./data.json";

const ResumeBody = styled.div`
  padding: 16px;
  display: grid;

  grid-auto-rows: min-content;
  grid-template-columns: 150px 1fr;
  grid-gap: 16px 0px;
  color: #444;
`;

const Resume = () => (
  <>
    <Header {...data.basics} />

    <ResumeBody>
      <ExperienceSection work={data.work} />
      <EducationSection education={data.education} />
      <SkillsSection skills={data.skills} />
      <InterestsSection interests={data.interests} />
    </ResumeBody>
  </>
);

export default Resume;
