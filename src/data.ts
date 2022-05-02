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
        network: "Medium",
        username: "bill_24885",
        url: "https://medium.com/@bill_24885",
      },
    ],
  },
  work: [
    {
      company: "World 50",
      positions: [
        {
          title: "Principal Software Engineer",
          startYear: 2021,
          endYear: "present",
          summary:
            "Lead a team of 5 engineers to build internal analytics and tooling.",
          highlights: [
            "Mentored engineers on my team, performed 1-on-1's, and wrote yearly performance reviews.",
            "Responsible for architecting, coding, and maintaining core systems used by my team.",
            "Wrote engineering documentation and introduced architecture decision records (ADRs) to our documentation.",
            "Advocated for restructing our teams to a product teams-like structure. This was eventually implemented.",
          ],
        },
        {
          title: "Senior Software Engineer",
          startYear: 2018,
          endYear: 2021,
          summary:
            "Full-Stack javascript developer on a small team dedicated to rebuilding our company's software platform.",
          highlights: [
            "Rebuilt our legacy application on a modern tech stack using React-Native. The application runs on web, iOS, and Android with the majority of the code shared between all three platforms.",
            "Rebuilt our API using GraphQL. Additionally, we avoid N+1 query problems by using Facebook's Dataloader library.",
            "Interviewed and onboarded new developers.",
            "Setup infrastructure on AWS, Google Cloud and CircleCI including databases, servers, and build pipelines.",
            "Architected prototypes for a new navigation system and a better architecture for web. Both were accepted and implemented.",
          ],
        },
      ],
    },
    {
      company: "TSYS",
      positions: [
        {
          title: "Senior Software Engineer",
          startYear: 2017,
          endYear: 2018,
          summary: "ReactJS and front-end specialist.",
          highlights: [
            "Became responsible for upgrading the dependencies for all of our projects.",
            "Gave presentations and introduced new React techniques such as Fragments and Render-Props (hooks were released after I left, but we would have used those instead).",
            "Completely rebuilt the UI for my product.",
            "Built a dynamically generated page flow system. Multi-page flows were generated from data returned from our REST API.",
            "Regularly contributed to our core React frameworks.",
            "Mentored and trained junior developers on React.",
          ],
        },
      ],
    },
    {
      company: "Koble",
      positions: [
        {
          title: "Co-Founder / Lead Engineer",
          startYear: 2016,
          endYear: 2017,
          summary:
            "Made all of the software architecture decisions. Wrote all of the code. Responded to outages and server issues.",
          highlights: [
            "Developed a prototype app using React-Native.",
            "Developed a website using React.",
            "Setup and maintained infrastructure using Google Cloud",
            "Built a service to automatically retrieve and update LetsEncrypt certificates for TLS/SSL encryption.",
            "Wrote an audit-log service that lisented for changes in Firebase and inserted a change summary into Google BigQuery.",
            "Setup Jenkins for continuous integration with Github.",
            "Deployed a Kubernetes cluster using Google Container Engine.",
          ],
        },
      ],
    },
    {
      company: "Salesloft",
      website: "https://salesloft.com/",
      positions: [
        {
          title: "Full-Stack Software Engineer",
          startYear: 2015,
          endYear: 2016,
          summary:
            "Designed, developed, and deployed features for the Salesloft SAAS application. This touched upon everything from database design and migrations to front-end UX design and development.",
          highlights: [
            "Developed a new QA system using Docker. Different versions of our application could be tested simultaneously on the same server cluster.",
            "Learned Ruby, Ruby on Rails, and Angular on the job. Started contributing quickly.",
          ],
        },
      ],
    },
    {
      company: "Nead Werx",
      website: "http://www.neadwerx.com/",
      positions: [
        {
          title: "Software Architect",
          startYear: 2013,
          endYear: 2015,
          summary:
            "In charge of researching and developing core software frameworks and coding standards as well as interviewing and training new engineers.",
          highlights: [
            "Developed an interactive visualization tool for retail stores using HTML5, CSS3, and Javascript. Think Google Maps but for retail stores.",
            "Designed and developed a custom REST API framework in PHP.",
            "Developed a graph-based API query system (before GraphQL existed).",
          ],
        },
      ],
    },
    {
      company: "Cox Communications",
      website: "https://www.cox.com",
      positions: [
        {
          title: "Co-op Software Engineer",
          startYear: 2009,
          endYear: 2011,
          summary:
            "Developed tools and prototypes for the Core Applications Team.",
          highlights: [
            "Implemented a rectangle-packing algorithm in Java with the purpose of combining multiple images into a single, large image. The overhead for each HTTP request was significant so using a single image reduced load time.",
            "Wrote a prototype TV guide application featuring a lazy-loading system. Data was loaded as-needed and significantly reduced infrastructure requirements.",
          ],
        },
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
    { name: "Javascript" },
    { name: "Typecript" },
    { name: "React" },
    { name: "React-Native" },
    { name: "GraphQL" },
    { name: "Rust" },
    { name: "NodeJS" },
    { name: "SQL" },
    { name: "Git" },
    { name: "AWS and Google Cloud" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Redux" },
    { name: "Python" },
    { name: "Ruby" },
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
