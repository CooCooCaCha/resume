import React from "react";
import styled from "styled-components";

import ResumeRowLeft from "./ResumeRowLeft";
import ResumeRowRight from "./ResumeRowRight";

const Dates = ResumeRowLeft.extend`
    font-size: 12px;
    font-style: italic;
    font-weight: bold;
`;

const WorkRow = ({ work }) => (
    <React.Fragment>
        <Dates>
            {work.startDate} - {work.endDate}
        </Dates>

        <ResumeRowRight>
            <div>
                {work.position} at {work.company}
            </div>
            <div>{work.summary}</div>

            {work.highlights.map(highlight => <div>{highlight}</div>)}
        </ResumeRowRight>
    </React.Fragment>
);

export default WorkRow;
