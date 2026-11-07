import { Skill } from "../types";
import ResumeSection from "../components/ResumeSection";
import SectionHeaderText from "../components/SectionHeaderText";
import createTextComponent from "../utils/createTextComponent";

const SkillName = createTextComponent("text-xs");

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <div className="col-span-2 grid grid-cols-subgrid break-inside-avoid print:block">
    <ResumeSection
      left={<SectionHeaderText>SKILLS</SectionHeaderText>}
      right={
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr]">
          {skills.map((skill, i) => (
            <SkillName key={i}>{skill.name}</SkillName>
          ))}
        </div>
      }
    />
  </div>
);

export default SkillsSection;
