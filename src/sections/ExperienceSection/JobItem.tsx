import { Job } from "../../types";
import createTextComponent from "../../utils/createTextComponent";
import ResumeSection from "../../components/ResumeSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const CompanyName = createTextComponent("text-lg font-bold");
const TimePeriod = createTextComponent("text-xs text-textDate");
const JobTitle = createTextComponent("text-lg font-bold");
const Summary = createTextComponent("text-base mb-2");
const PromotionText = createTextComponent("text-xs italic");
const HighlightText = createTextComponent("text-base");

interface JobItemProps {
  job: Job;
}

const JobItem = ({ job }: JobItemProps) => (
  <ResumeSection
    left={
      <>
        <CompanyName>{job.company}</CompanyName>
        <TimePeriod>{`${job.startYear} - ${job.endYear}`}</TimePeriod>
      </>
    }
    right={
      <>
        <div className="flex flex-wrap items-center gap-x-2">
          <JobTitle>{job.title}</JobTitle>
          {job.promotions?.map((promotion) => (
            <div
              key={`${promotion.title}-${promotion.year}`}
              className="relative flex items-center gap-x-2"
            >
              <span aria-hidden="true" className="text-xs text-textDate">
                -
              </span>
              <PromotionText>
                {`Promoted from ${promotion.title} in ${promotion.year}.`}
              </PromotionText>
            </div>
          ))}
        </div>
        {job.summary && <Summary>{job.summary}</Summary>}
        {job.highlights?.map((highlight) => (
          <div key={highlight} className="flex mt-[3px]">
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
);

export default JobItem;
