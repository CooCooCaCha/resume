import React from "react";
import styled from "styled-components";

const ResumeSectionLeft = styled.div`
    grid-column: 1;
`;

const ResumeSectionRight = styled.div`
    grid-column: 2;
`;

const ResumeSection = ({ className, left, right }) => (
    <React.Fragment>
        <ResumeSectionLeft>{left}</ResumeSectionLeft>
        <ResumeSectionRight>{right}</ResumeSectionRight>
    </React.Fragment>
);

export default ResumeSection;
