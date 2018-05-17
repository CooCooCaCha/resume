import React from "react";
import styled from "styled-components";

import ResumeRowLeft from "./ResumeRowLeft";
import ResumeRowRight from "./ResumeRowRight";

const Dates = ResumeRowLeft.extend`
    font-size: 12px;
    font-style: italic;
    font-weight: bold;
`;

const Position = styled.div`
    font-size: 14px;
`;

const Summary = styled.div`
    font-size: 12px;
`;

const Highlight = styled.div`
    font-size: 12px;
    margin-left: 10px;
`;

const WorkRow = ({ work }) => (
    <React.Fragment>
        <Dates>
            <Position>{work.company}</Position>
            <div>
                {work.startDate} - {work.endDate}
            </div>
        </Dates>

        <ResumeRowRight>
            <div>{work.position}</div>
            <Summary>{work.summary}</Summary>

            {work.highlights.map((highlight, i) => (
                <Highlight key={i}>- {highlight}</Highlight>
            ))}
        </ResumeRowRight>
    </React.Fragment>
);

export default WorkRow;
