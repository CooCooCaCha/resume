import React from "react";
import styled from "styled-components";

const ResumeHeaderContainer = styled.div`
    grid-column: span 2;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ResumeName = styled.div`
    font-size: 18px;
`;

const ResumeTitle = styled.div`
    font-size: 14px;
`;

const ResumeHeader = ({ name, title }) => (
    <ResumeHeaderContainer>
        <ResumeName>{name}</ResumeName>
        <ResumeTitle>{title}</ResumeTitle>
    </ResumeHeaderContainer>
);

export default ResumeHeader;
