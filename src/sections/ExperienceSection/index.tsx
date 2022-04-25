import { Job } from "../../types";
import ResumeSection from "../../components/ResumeSection";

interface JobItemProps {
  job: Job;
}

const JobItem = ({ job }: JobItemProps) => (
  <>
    <ResumeSection left={<div>{job.company}</div>} />
    {job.positions.map((position, i) => (
      <ResumeSection
        key={i}
        left={<div>{`${position.startYear} - ${position.endYear}`}</div>}
        right={
          <div>
            <div>{position.title}</div>
            <div>{position.summary}</div>
            {position.highlights.map((highlight, i) => (
              <div>{highlight}</div>
            ))}
          </div>
        }
      />
    ))}
  </>
);

interface ExperienceSectionProps {
  work: Job[];
}

const ExperienceSection = ({ work }: ExperienceSectionProps) => {
  return (
    <>
      <ResumeSection left={<div>EXPERIENCE</div>} />

      {work.slice(0, 4).map((job, i) => (
        <JobItem key={i} job={job} />
      ))}
    </>
  );
};

export default ExperienceSection;
