import React from "react";
import styled from "styled-components";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import faEnvelope from "@fortawesome/fontawesome-free-solid/faEnvelope";
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone";
import faMapMarkerAlt from "@fortawesome/fontawesome-free-solid/faMapMarkerAlt";
import Photo from "../images/photo.jpg";

const ResumeHeaderContainer = styled.div`
    grid-column: span 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    background: #cc6464;
    color: #fff;
`;

const ProfilePhoto = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 9999px;
    overflow: hidden;
    margin-right: 20px;
    border: 2px solid #fff;

    img {
        transform-origin: top left;
        transform: scale(0.5) translate(-135px, -12px);
    }
`;

const ResumeName = styled.div`
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
`;

const ResumeTitle = styled.div`
    font-size: 10px;
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
    align-items: flex-end;
    flex: 1;
`;

const ResumeHeaderRightInner = styled.div`
    display: flex;
    flex-direction: column;
`;

const Contact = styled.div`
    font-weight: 200;

    svg {
        font-size: 12px;
        margin-right: 10px;
        color: #fff;
    }
`;

const ResumeHeader = ({ name, title, email, phone, location }) => (
    <ResumeHeaderContainer>
        <ProfilePhoto>
            <img src={Photo} />
        </ProfilePhoto>

        <ResumeHeaderLeft>
            <ResumeName>{name}</ResumeName>
            <ResumeTitle>{title}</ResumeTitle>
        </ResumeHeaderLeft>

        <ResumeHeaderRight>
            <ResumeHeaderRightInner>
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
            </ResumeHeaderRightInner>
        </ResumeHeaderRight>
    </ResumeHeaderContainer>
);

export default ResumeHeader;
