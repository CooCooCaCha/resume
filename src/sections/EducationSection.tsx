import { Degree } from "../types";
import ResumeSection from "../components/ResumeSection";

interface EducationSectionProps {
  education: Degree[];
}

const EducationSection = ({ education }: EducationSectionProps) => (
  <ResumeSection
    left={<div>EDUCATION</div>}
    right={
      <>
        {education.map((degree, i) => (
          <div key={i}>
            <div>{degree.institution}</div>
            <div>{degree.degree}</div>
            <div>{`${degree.startYear} - ${degree.endYear}`}</div>
          </div>
        ))}
      </>
    }
  />
);

export default EducationSection;
