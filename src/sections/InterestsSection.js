import React from "react";
import styled from "styled-components";
import ResumeSection from "../components/ResumeSection";
import ResumeSectionTitle from "../components/ResumeSectionTitle";

const InterestsSection = ({ interests }) => (
    <ResumeSection
        left={<ResumeSectionTitle>Interests</ResumeSectionTitle>}
        right={interests.map((interest, i) => (
            <div key={i}>
                {interest.name}
                {interest.keywords.join(", ")}
            </div>
        ))}
    />
);

export default InterestsSection;
