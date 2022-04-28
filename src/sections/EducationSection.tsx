import { Degree } from "../types";
import ResumeSection from "../components/ResumeSection";
import SectionHeaderText from "../components/SectionHeaderText";
import createTextComponent from "../utils/createTextComponent";

const Institution = createTextComponent("text-sm font-bold");
const DegreeText = createTextComponent("text-sm");
const TimePeriod = createTextComponent("text-xs text-textDate");

interface EducationSectionProps {
  education: Degree[];
}

const EducationSection = ({ education }: EducationSectionProps) => (
  <ResumeSection
    left={<SectionHeaderText>EDUCATION</SectionHeaderText>}
    right={
      <>
        {education.map((degree, i) => (
          <div key={i}>
            <Institution>{degree.institution}</Institution>
            <DegreeText>{degree.degree}</DegreeText>
            <TimePeriod>{`${degree.startYear} - ${degree.endYear}`}</TimePeriod>
          </div>
        ))}
      </>
    }
  />
);

export default EducationSection;
