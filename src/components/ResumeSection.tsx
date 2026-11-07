import { ReactNode } from "react";

interface ResumeSectionProps {
  left?: ReactNode;
  right?: ReactNode;
}

const ResumeSection = ({ left, right }: ResumeSectionProps) => (
  <div className="contents print:grid print:grid-cols-[125px_1fr] print:break-inside-avoid">
    <div className="col-[1]">{left}</div>
    <div className="col-[2]">{right}</div>
  </div>
);

export default ResumeSection;
