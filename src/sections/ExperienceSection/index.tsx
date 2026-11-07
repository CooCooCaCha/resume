import { Fragment } from "react";
import { Job } from "../../types";
import ResumeSection from "../../components/ResumeSection";
import SectionHeaderText from "../../components/SectionHeaderText";
import JobItem from "./JobItem";
import Spacer from "../../components/Spacer";

interface ExperienceSectionProps {
  work: Job[];
}

const ExperienceSection = ({ work }: ExperienceSectionProps) => {
  return (
    <>
      <ResumeSection left={<SectionHeaderText>EXPERIENCE</SectionHeaderText>} />

      {work.slice(0, 5).map((job, index) => (
        <Fragment key={job.company}>
          {index === 0 ? <div className="w-full h-2" /> : <Spacer />}
          <JobItem job={job} />
        </Fragment>
      ))}
    </>
  );
};

export default ExperienceSection;
