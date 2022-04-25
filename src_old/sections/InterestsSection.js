import React from "react";
import styled from "styled-components";
import ResumeSection from "../components/ResumeSection";
import ResumeSectionTitle from "../components/ResumeSectionTitle";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Interest = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
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
    left={<ResumeSectionTitle>Other Interests</ResumeSectionTitle>}
    right={
      <Container>
        {interests.map((interest, i) => (
          <Interest key={i}>
            <Name>{interest.name}</Name>
            <Keywords>{interest.keywords.join(", ")}</Keywords>
          </Interest>
        ))}
      </Container>
    }
  />
);

export default InterestsSection;
