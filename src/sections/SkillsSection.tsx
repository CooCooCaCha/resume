import { Skill } from "../types";
import ResumeSection from "../components/ResumeSection";
import SectionHeaderText from "../components/SectionHeaderText";
import createTextComponent from "../utils/createTextComponent";

const SkillName = createTextComponent("text-xs");

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => (
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
);

export default SkillsSection;
