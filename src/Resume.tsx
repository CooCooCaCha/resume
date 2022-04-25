import data from "./data";

import Header from "./sections/Header";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";

const Resume = () => (
  <>
    <Header basics={data.basics} />

    <div className="grid auto-rows-min grid-cols-[150px_1fr] gap-y-1 p-1">
      <ExperienceSection work={data.work} />
      <EducationSection education={data.education} />
      <SkillsSection skills={data.skills} />
    </div>
  </>
);

export default Resume;
