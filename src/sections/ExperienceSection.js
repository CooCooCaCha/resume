import React from "react";
import styled from "styled-components";
import ResumeSection from "../components/ResumeSection";
import ResumeSectionTitle from "../components/ResumeSectionTitle";

const Label = styled.div`
    font-size: 14px;
`;

const Company = styled.div`
    font-size: 14px;
`;

const Dates = styled.div`
    font-size: 12px;
    font-style: italic;
    font-weight: bold;
`;

const Summary = styled.div`
    font-size: 12px;
`;

const Highlight = styled.div`
    font-size: 12px;
    margin-left: 10px;
`;

const WorkItem = ({ work }) => (
    <ResumeSection
        left={
            <Label>
                <Company>{work.company}</Company>
                <Dates>
                    {work.startDate} - {work.endDate}
                </Dates>
            </Label>
        }
        right={
            <div>
                <div>{work.position}</div>
                <Summary>{work.summary}</Summary>

                {work.highlights.map((highlight, i) => (
                    <Highlight key={i}>- {highlight}</Highlight>
                ))}
            </div>
        }
    />
);

const ExperienceSection = ({ work }) => (
    <React.Fragment>
        <ResumeSection
            left={<ResumeSectionTitle>Experience</ResumeSectionTitle>}
        />

        {work.slice(0, 4).map((work, i) => <WorkItem key={i} work={work} />)}
    </React.Fragment>
);

export default ExperienceSection;
