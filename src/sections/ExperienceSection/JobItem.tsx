import { Job } from "../../types";
import createTextComponent from "../../utils/createTextComponent";
import ResumeSection from "../../components/ResumeSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const CompanyName = createTextComponent("text-base font-bold");
const TimePeriod = createTextComponent("text-xs");
const JobTitle = createTextComponent("text-base font-bold");
const Summary = createTextComponent("text-sm");
const HighlightText = createTextComponent("text-sm");

interface JobItemProps {
  job: Job;
}

const JobItem = ({ job }: JobItemProps) => (
  <>
    <ResumeSection left={<CompanyName>{job.company}</CompanyName>} />

    {job.positions.map((position, i) => (
      <ResumeSection
        key={i}
        left={
          <TimePeriod>{`${position.startYear} - ${position.endYear}`}</TimePeriod>
        }
        right={
          <div>
            <JobTitle>{position.title}</JobTitle>
            <Summary>{position.summary}</Summary>
            {position.highlights.map((highlight, i) => (
              <div className="flex">
                <FontAwesomeIcon
                  className="text-primary w-1 mr-1 mt-[1px]"
                  icon={faCircle}
                />
                <HighlightText>{highlight}</HighlightText>
              </div>
            ))}
          </div>
        }
      />
    ))}
  </>
);

export default JobItem;
