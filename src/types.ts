export interface ResumeData {
  basics: Basics;
  work: Job[];
  education: Degree[];
  publications: Publication[];
  skills: Skill[];
  interests: Interest[];
}

export interface Basics {
  name: string;
  title: string;
  email: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface Location {
  city: string;
  state: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Job {
  company: string;
  website?: string;
  positions: JobPosition[];
}

export interface JobPosition {
  title: string;
  startYear: number;
  endYear: number | "present";
  summary: string;
  highlights: string[];
}

export interface Degree {
  institution: string;
  degree: string;
  startYear: number;
  endYear: number;
}

export interface Publication {
  title: string;
  publisher: string;
  publishDate: Date;
  url: string;
  summary: string;
}

export interface Skill {
  name: string;
}

export interface Interest {
  name: string;
  keywords: string[];
}
