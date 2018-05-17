import React from "react";
import styled from "styled-components";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import faEnvelope from "@fortawesome/fontawesome-free-solid/faEnvelope";
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone";
import faMapMarkerAlt from "@fortawesome/fontawesome-free-solid/faMapMarkerAlt";

const ResumeHeaderContainer = styled.div`
    grid-column: span 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ResumeName = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-transform: uppercase;
`;

const ResumeTitle = styled.div`
    font-size: 14px;
    font-weight: 100;
    text-transform: uppercase;
`;

const ResumeHeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 50px;
`;

const ResumeHeaderRight = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
`;

const Contact = styled.div`
    font-weight: 200;

    svg {
        font-size: 12px;
        margin-right: 10px;
        color: #cc6464;
    }
`;

const ResumeHeader = ({ name, title, email, phone, location }) => (
    <ResumeHeaderContainer>
        <ResumeHeaderLeft>
            <ResumeName>{name}</ResumeName>
            <ResumeTitle>{title}</ResumeTitle>
        </ResumeHeaderLeft>

        <ResumeHeaderRight>
            <Contact>
                <FontAwesomeIcon icon={faEnvelope} />
                {email}
            </Contact>

            <Contact>
                <FontAwesomeIcon icon={faPhone} />
                {phone}
            </Contact>

            <Contact>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {location.city}, {location.state}
            </Contact>
        </ResumeHeaderRight>
    </ResumeHeaderContainer>
);

export default ResumeHeader;
