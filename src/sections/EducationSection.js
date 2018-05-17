import React from "react";
import styled from "styled-components";
import ResumeSection from "../components/ResumeSection";
import ResumeSectionTitle from "../components/ResumeSectionTitle";

const EducationSection = ({ education }) => (
    <ResumeSection
        left={<ResumeSectionTitle>Education</ResumeSectionTitle>}
        right={
            <div>
                <div>{education[0].institution}</div>
                <div>
                    {education[0].startDate} - {education[0].endDate}
                </div>
            </div>
        }
    />
);

export default EducationSection;
