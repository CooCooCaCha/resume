import { Job } from "../../types";
import createTextComponent from "../../utils/createTextComponent";
import ResumeSection from "../../components/ResumeSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Spacer from "../../components/Spacer";

const CompanyName = createTextComponent("text-base font-bold");
const TimePeriod = createTextComponent("text-xs text-textDate");
const JobTitle = createTextComponent("text-base font-bold");
const Summary = createTextComponent("text-base");
const HighlightText = createTextComponent("text-base");

interface JobItemProps {
  job: Job;
}

const JobItem = ({ job }: JobItemProps) => {
  const hasMultiplePositions = job.positions.length > 1;

  return (
    <>
      <ResumeSection
        left={<CompanyName>{job.company}</CompanyName>}
        right={
          hasMultiplePositions ? null : (
            <JobTitle>{job.positions[0].title}</JobTitle>
          )
        }
      />

      {job.positions.map((position, i) => (
        <>
          {i > 0 && <Spacer />}
          <ResumeSection
            key={i}
            left={
              <TimePeriod>{`${position.startYear} - ${position.endYear}`}</TimePeriod>
            }
            right={
              <>
                {hasMultiplePositions && <JobTitle>{position.title}</JobTitle>}
                <Summary>{position.summary}</Summary>
                {position.highlights.map((highlight, i) => (
                  <div className="flex mt-[2px]">
                    <FontAwesomeIcon
                      className="text-primary w-1 mr-1 mt-[-1px]"
                      icon={faCircle}
                    />
                    <HighlightText>{highlight}</HighlightText>
                  </div>
                ))}
              </>
            }
          />
        </>
      ))}
    </>
  );
};

export default JobItem;
