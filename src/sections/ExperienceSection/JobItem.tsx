import { Job } from "../../types";
import createTextComponent from "../../utils/createTextComponent";
import ResumeSection from "../../components/ResumeSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const CompanyName = createTextComponent("text-base font-bold");
const TimePeriod = createTextComponent("text-xs text-textDate");
const JobTitle = createTextComponent("text-base font-bold");
const Summary = createTextComponent("text-base mb-1");
const PromotionText = createTextComponent("text-sm italic");
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
        <div className={job.promotions?.length ? "mb-2" : undefined}>
          <JobTitle>{job.title}</JobTitle>
          {job.promotions?.map((promotion) => (
            <PromotionText key={`${promotion.title}-${promotion.year}`}>
              {`Promoted from ${promotion.title} in ${promotion.year}.`}
            </PromotionText>
          ))}
        </div>
        {job.summary && <Summary>{job.summary}</Summary>}
        {job.highlights?.map((highlight) => (
          <div key={highlight} className="flex mt-[2px]">
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
