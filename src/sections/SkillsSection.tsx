import { Skill } from "../types";
import ResumeSection from "../components/ResumeSection";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <ResumeSection
    left={<div>SKILLS</div>}
    right={
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr]">
        {skills.map((skill, i) => (
          <div key={i}>{skill.name}</div>
        ))}
      </div>
    }
  />
);

export default SkillsSection;
