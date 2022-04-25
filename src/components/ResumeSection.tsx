import { ReactNode } from "react";

interface ResumeSectionProps {
  left?: ReactNode;
  right?: ReactNode;
}

const ResumeSection = ({ left, right }: ResumeSectionProps) => (
  <>
    <div className="col-[1]">{left}</div>
    <div className="col-[2]">{right}</div>
  </>
);

export default ResumeSection;
