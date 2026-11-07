import { ResumeData } from "./types";

const resumeData: ResumeData = {
  basics: {
    name: "William R. Johnson",
    title: "Software Engineer",
    email: "wrjstuff@gmail.com",
    summary: "Full-stack web and mobile app developer.",
    location: {
      city: "Atlanta",
      state: "GA",
    },
    profiles: [
      {
        network: "Github",
        username: "CooCooCaCha",
        url: "https://github.com/CooCooCaCha",
      },
      {
        network: "LinkedIn",
        username: "wrjcareer",
        url: "https://www.linkedin.com/in/wrjcareer/",
      },
      {
        network: "Medium",
        username: "bill_24885",
        url: "https://medium.com/@bill_24885",
      },
    ],
  },
  work: [
    {
      company: "CancerIQ",
      summary:
        "Built apps for cancer prevention and early detection using Rails, React, Rust, Node.js, and Google Cloud.",
      title: "Principal Software Engineer",
      startYear: 2022,
      endYear: "present",
      promotions: [
        {
          title: "Senior Software Engineer",
          year: 2026,
        },
      ],
      highlights: [
        "Led the genogram team in rewriting our visual family tree builder in React and refactoring the Rails backend to support new features.",
        "Researched and developed a deterministic, recursive family tree layout algorithm that preserves paternal/maternal orientation and keeps twins adjacent, replacing our previous Sugiyama-based layout.",
        "Built a custom query language using parser combinators, enabling product managers to target content based on patient data.",
        "Worked with a co-founder to standardize an Excel format for patient data and built a Ruby import pipeline using pre-generated UUIDs and transactions to prevent partial patient imports and resume safely after failures. Tested with 1M+ records and 100+ columns.",
        "Led improvements to our AI-assisted development workflow by grouping apps and services in one folder and writing an AGENTS.md to give AI tools codebase context and development guidelines.",
      ],
    },
    {
      company: "World 50",
      summary:
        "Full-stack engineer and manager of five engineers on our React Native and Node.js platform.",
      title: "Principal Software Engineer",
      startYear: 2018,
      endYear: 2022,
      promotions: [
        {
          title: "Senior Software Engineer",
          year: 2021,
        },
      ],
      highlights: [
        "Rebuilt the legacy application with React Native, sharing most of the code across web, iOS, and Android.",
        "Rebuilt the API with GraphQL, using DataLoader to avoid N+1 queries.",
        "Proposed an engineering process, later adopted, in which temporary, cross-functional teams planned and delivered individual epics.",
        "Set up databases, servers, and build pipelines using AWS, Google Cloud, and CircleCI.",
        "Built an activity feed that let admins filter activity across the app or open a profile to see one user's history. Wrote a query builder that dynamically unioned activity tables and applied filters within each table and across the combined results.",
      ],
    },
    {
      company: "TSYS",
      summary:
        "Brought in for React expertise to build banking apps and modernize the team's frontend architecture.",
      title: "Senior Software Engineer",
      startYear: 2017,
      endYear: 2018,
      highlights: [
        "Rebuilt our shared React component library, removing application-specific business logic and making components more modular to simplify frontend code and improve maintainability.",
        "Built a dynamic React form system that generated multi-step forms from configuration and constraints supplied by the backend API.",
        "Introduced modern React patterns, including function components, fragments, and hooks, through a series of team presentations and mentored other developers.",
      ],
    },
    {
      company: "Koble",
      summary:
        "Co-founded a platform for people to offer their skills and discover services in their community.",
      title: "Co-Founder / Lead Engineer",
      startYear: 2016,
      endYear: 2017,
      highlights: [
        "Built the React Native app and backend as the sole engineer, owning software architecture and implementation.",
        "Set up Google Cloud infrastructure, including a Kubernetes cluster, configured CI pipelines, and distributed iOS builds through TestFlight.",
        "Built a service to automate Let’s Encrypt certificate provisioning and renewal for TLS/SSL encryption.",
        "Built an audit-log service that recorded Firebase change summaries in BigQuery.",
      ],
    },
    {
      company: "Salesloft",
      summary:
        "Developed Salesloft’s sales automation platform, from database design and migrations to frontend UI.",
      website: "https://salesloft.com/",
      title: "Full-Stack Software Engineer",
      startYear: 2015,
      endYear: 2016,
      highlights: [
        "Built a Docker-based QA environment for testing multiple versions of the application simultaneously on the same server cluster.",
        "Contributed to integrating a third-party sentiment analysis service into the application’s email features.",
        "Learned Ruby, Rails, and Angular on the job with no prior experience in those technologies, contributing my first code on day one.",
      ],
    },
    {
      company: "Nead Werx",
      summary:
        "In charge of researching and developing core software frameworks and coding standards as well as interviewing and training new engineers.",
      website: "http://www.neadwerx.com/",
      title: "Software Architect",
      startYear: 2013,
      endYear: 2015,
      highlights: [
        "Developed an interactive visualization tool for retail stores using HTML5, CSS3, and Javascript. Think Google Maps but for retail stores.",
        "Designed and developed a custom REST API framework in PHP.",
        "Developed a graph-based API query system (before GraphQL existed).",
      ],
    },
    {
      company: "Cox Communications",
      summary: "Developed tools and prototypes for the Core Applications Team.",
      website: "https://www.cox.com",
      title: "Co-op Software Engineer",
      startYear: 2009,
      endYear: 2011,
      highlights: [
        "Implemented a rectangle-packing algorithm in Java with the purpose of combining multiple images into a single, large image. The overhead for each HTTP request was significant so using a single image reduced load time.",
        "Wrote a prototype TV guide application featuring a lazy-loading system. Data was loaded as-needed and significantly reduced infrastructure requirements.",
      ],
    },
  ],

  education: [
    {
      institution: "Georgia Institute of Technology",
      degree: "Bachelor's Degree - Computer Science",
      startYear: 2007,
      endYear: 2012,
    },
  ],

  publications: [
    {
      title: "My quest to learn machine learning",
      publisher: "Medium",
      publishDate: new Date("2017-02-11"),
      url: "https://medium.com/@bill_24885/my-quest-to-learn-machine-learning-6aeae1d3ae17",
      summary:
        "An overview of some recent milestones in my quest to learn machine learning.",
    },
  ],

  skills: [
    {
      name: "Languages",
      skills: ["TypeScript", "JavaScript", "Ruby", "Rust", "Python"],
    },
    {
      name: "Frontend & Mobile",
      skills: ["React", "React Native", "HTML", "CSS"],
    },
    {
      name: "Backend & Data",
      skills: ["Rails", "Node.js", "GraphQL", "SQL", "PostgreSQL"],
    },
    {
      name: "Cloud & Tooling",
      skills: ["AWS", "Google Cloud", "Kubernetes", "Git"],
    },
  ],

  interests: [
    {
      name: "Running",
      keywords: ["Cross-Country", "Track & Field"],
    },
    {
      name: "Producing/Listening to Electronic Music",
      keywords: ["Synthesizers", "Audio Theory", "Live Music"],
    },
    {
      name: "Stock Market and Cryptocurrency",
      keywords: ["Bitcoin", "Ethereum"],
    },
    {
      name: "Machine Learning",
      keywords: ["PyTorch"],
    },
  ],
};

export default resumeData;
