import React from "react";
import styled from "styled-components";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCircle from "@fortawesome/fontawesome-free-solid/faCircle";

import ResumeSection from "../components/ResumeSection";
import ResumeSectionTitle from "../components/ResumeSectionTitle";

const Label = styled.div`
    font-size: 14px;
`;

const Company = styled.div`
    font-size: 14px;
    font-weight: 600;
`;

const Dates = styled.div`
    font-size: 10px;
    color: #888;
`;

const Position = styled.div`
    font-size: 14px;
    font-weight: 600;
`;

const Summary = styled.div`
    font-size: 12px;
`;

const Highlight = styled.div`
    font-size: 12px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
`;

const BulletIcon = styled(FontAwesomeIcon)`
    font-size: 4px;
    color: #cc6464;
    margin-right: 5px;
    margin-top: 7px;
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
                <Position>{work.position}</Position>
                <Summary>{work.summary}</Summary>

                {work.highlights.map((highlight, i) => (
                    <Highlight key={i}>
                        <BulletIcon icon={faCircle} />
                        <div>{highlight}</div>
                    </Highlight>
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
