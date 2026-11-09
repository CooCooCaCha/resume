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
        "Built apps and backend services for our clinical risk assessment platform, focused on cancer prevention and early detection.",
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
        "Led the team in rewriting our visual family tree (genogram) builder in React and refactoring the Rails backend to support more relationship types, twins, and family members’ cancer and genetic testing data.",
        "Researched and developed a custom family tree layout algorithm that preserves paternal/maternal orientation and keeps twins adjacent, improving upon our Sugiyama-based algorithm.",
        "Built a custom query language using parser combinators, enabling product managers to display targeted content based on patient data.",
        "Standardized an Excel format for patient data with a co-founder and built a Ruby import pipeline using pre-generated UUIDs and transactions to prevent partial patient imports and resume safely after failures.",
        "Contributed to our AI-assisted development practices by demonstrating how AI tools could work across apps and services using a unified workspace and an AGENTS.md with codebase context, and recommending models based on cost/performance benchmarks.",
      ],
    },
    {
      company: "World 50",
      summary:
        "Full-stack engineer and manager of five engineers on our private social platform for senior executives.",
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
        "Rebuilt the API with Node.js and GraphQL, using DataLoader to avoid N+1 queries.",
        "Introduced an engineering process in which temporary, cross-functional teams planned and delivered individual epics.",
        "Set up databases, servers, and build pipelines using AWS, Google Cloud, and CircleCI.",
        "Built an activity feed that let admins filter user activity across the app. Wrote a query builder that dynamically unioned activity tables and applied filters within each table and across the combined results.",
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
        "Built the React Native app and backend solo, owning software architecture and implementation.",
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
        "Built a Docker-based QA environment to test multiple app versions simultaneously on one server cluster.",
        "Contributed to integrating a third-party sentiment analysis service into the application’s email features.",
        "Learned Ruby, Rails, and Angular on the job with no prior experience, contributing code on day one.",
      ],
    },
    {
      company: "MerchLogix",
      summary:
        "Software architect building floor-planning and logistics applications for major retailers, while developing core frameworks and setting engineering standards.",
      website: "https://merchlogix.com/",
      title: "Software Architect",
      startYear: 2013,
      endYear: 2015,
      highlights: [
        "Built the company’s first retail floor-planning application, with a Google Maps-style JavaScript interface for editing store layouts, updating details for individual aisle sections, and managing SKU placement. Optimized HTML5 canvas rendering for the interactive editor.",
        "Designed and built a custom REST API framework in PHP.",
        "Developed a graph-based API query system that let developers combine queries, apply transformations, and define outputs in a single JSON request.",
        "Established coding standards and interviewed and trained new engineers.",
      ],
    },
    {
      company: "Cox Communications",
      summary:
        "Developed tools and prototypes for TV set-top box software as part of Cox’s Core Applications team.",
      website: "https://www.cox.com",
      title: "Co-op Software Engineer",
      startYear: 2009,
      endYear: 2011,
      highlights: [
        "Implemented a rectangle-packing algorithm in Java to combine multiple images into one, reducing HTTP requests and improving load times.",
        "Built a TV guide prototype with lazy loading to fetch data only as needed, reducing infrastructure requirements.",
      ],
    },
  ],

  education: [
    {
      institution: "Georgia Institute of Technology",
      degree: "B.S. in Computer Science",
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
