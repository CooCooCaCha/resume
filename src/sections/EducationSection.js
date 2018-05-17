import React from "react";
import styled from "styled-components";
import ResumeSection from "../components/ResumeSection";
import ResumeSectionTitle from "../components/ResumeSectionTitle";

const Institution = styled.div`
    font-size: 14px;
`;

const Dates = styled.div`
    font-size: 10px;
    color: #666;
`;

const EducationSection = ({ education }) => (
    <ResumeSection
        left={<ResumeSectionTitle>Education</ResumeSectionTitle>}
        right={
            <div>
                <Institution>{education[0].institution}</Institution>
                <Dates>
                    {education[0].startDate} - {education[0].endDate}
                </Dates>
            </div>
        }
    />
);

export default EducationSection;
