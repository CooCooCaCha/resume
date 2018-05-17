import React from "react";
import styled from "styled-components";
import ResumeSection from "../components/ResumeSection";
import ResumeSectionTitle from "../components/ResumeSectionTitle";

const Skills = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const SkillsSection = ({ skills }) => (
    <ResumeSection
        left={<ResumeSectionTitle>Skills</ResumeSectionTitle>}
        right={
            <Skills>
                {skills.map((skill, i) => <div key={i}>{skill.name}</div>)}
            </Skills>
        }
    />
);

export default SkillsSection;
