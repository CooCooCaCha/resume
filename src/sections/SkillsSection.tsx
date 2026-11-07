import { SkillCategory } from "../types";
import ResumeSection from "../components/ResumeSection";
import SectionHeaderText from "../components/SectionHeaderText";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <div className="col-span-2 grid grid-cols-subgrid break-inside-avoid print:block">
    <ResumeSection
      left={<SectionHeaderText>SKILLS</SectionHeaderText>}
      right={
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {skills.map((category) => (
            <div key={category.name} className="text-sm">
              <span className="font-bold">{category.name}:</span>{" "}
              {category.skills.join(", ")}
            </div>
          ))}
        </div>
      }
    />
  </div>
);

export default SkillsSection;
