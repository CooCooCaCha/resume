import data from "./data";

import Header from "./sections/Header";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";

import Spacer from "./components/Spacer";

const Resume = () => (
  <>
    <Header basics={data.basics} />

    <div className="grid auto-rows-min grid-cols-[150px_1fr] p-4 pt-3">
      <ExperienceSection work={data.work} />
      <Spacer />
      <EducationSection education={data.education} />
      <Spacer />
      <SkillsSection skills={data.skills} />
    </div>
  </>
);

export default Resume;
