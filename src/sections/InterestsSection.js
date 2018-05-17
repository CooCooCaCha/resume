import React from "react";
import styled from "styled-components";
import ResumeSection from "../components/ResumeSection";
import ResumeSectionTitle from "../components/ResumeSectionTitle";

const Interest = styled.div`
    display: flex;
    flex-direction: row;
`;

const Name = styled.div`
    font-size: 12px;
    font-weight: 600;
    margin-right: 5px;
`;

const Keywords = styled.div`
    font-size: 12px;
`;

const InterestsSection = ({ interests }) => (
    <ResumeSection
        left={<ResumeSectionTitle>Interests</ResumeSectionTitle>}
        right={interests.map((interest, i) => (
            <Interest key={i}>
                <Name>{interest.name}</Name>
                <Keywords>{interest.keywords.join(", ")}</Keywords>
            </Interest>
        ))}
    />
);

export default InterestsSection;
