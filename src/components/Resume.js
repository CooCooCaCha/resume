import React from "react";
import styled from "styled-components";
import data from "../data.json";

import ResumeHeader from "./ResumeHeader";
import ResumeRowLeft from "./ResumeRowLeft";
import ResumeRowRight from "./ResumeRowRight";
import WorkRow from "./WorkRow";

const ResumeContainer = styled.div`
    padding: 20px;
    display: grid;

    grid-auto-rows: min-content;
    grid-template-columns: 200px 1fr;
    grid-gap: 20px 0px;
`;

const ResumeRowLeftBig = ResumeRowLeft.extend`
    font-size: 20px;
    color: #666;
`;

const ContactRowRight = ResumeRowRight.extend`
    display: flex;
    flex-direction: column;
`;

const ContactItem = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;

    div:first-child {
        font-weight: bold;
    }
`;

const Skills = ResumeRowRight.extend`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const Resume = () => (
    <ResumeContainer>
        <ResumeHeader name={data.basics.name} title={data.basics.title} />

        <ResumeRowLeftBig>Contact</ResumeRowLeftBig>
        <ContactRowRight>
            <ContactItem>
                <div>Email</div>
                <div>{data.basics.email}</div>
            </ContactItem>

            <ContactItem>
                <div>Phone</div>
                <div>{data.basics.phone}</div>
            </ContactItem>
            <ContactItem>
                <div>Location</div>
                <div>Atlanta, GA</div>
            </ContactItem>
        </ContactRowRight>

        <ResumeRowLeftBig>Work Experience</ResumeRowLeftBig>
        <ResumeRowRight />

        {data.work
            .slice(0, 4)
            .map((work, i) => <WorkRow key={i} work={work} />)}

        <ResumeRowLeftBig>Education</ResumeRowLeftBig>
        <ResumeRowRight>
            <div>{data.education[0].institution}</div>
            <div>
                {data.education[0].startDate} - {data.education[0].endDate}
            </div>
        </ResumeRowRight>

        <ResumeRowLeftBig>Skills</ResumeRowLeftBig>
        <Skills>{data.skills.map(skill => <div>{skill.name}</div>)}</Skills>

        <ResumeRowLeftBig>Interests</ResumeRowLeftBig>
        <ResumeRowRight>
            {data.interests.map(interest => (
                <div>
                    {interest.name}
                    {interest.keywords.join(", ")}
                </div>
            ))}
        </ResumeRowRight>
    </ResumeContainer>
);

export default Resume;
