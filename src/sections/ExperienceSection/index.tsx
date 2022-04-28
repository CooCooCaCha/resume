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

      {work.slice(0, 4).map((job, i) => (
        <>
          <Spacer />
          <JobItem key={i} job={job} />
        </>
      ))}
    </>
  );
};

export default ExperienceSection;
