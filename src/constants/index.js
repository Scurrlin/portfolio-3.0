const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  { name: "Contact",
    link: "#contact"
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const techStackIcons = [
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "ReactJS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "NodeJS",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "ThreeJS",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "CI/CD",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    topContribution: "Supported the deployment of Lee & Low Books’ e-commerce website, the largest multicultural children’s book publisher in the United States.",
    company: "GoingClear",
    logoPath: "/images/gc.png",
    title: "Associate Web Developer",
    date: "July 2024 - Present",
    responsibilities: [
      "Engaged with customers in ideation and planning meetings to finalize minimum viable product, tech stack, and project plan.",
      "Conducted QA testing on new features to identify and resolve issues before launch.",
      "Interviewed previous clients to record live testimonials, strengthening brand trust and boosting social media engagement.",
    ],
  },
  {
    topContribution: "Partnered with senior developer to build an enhanced Web API for critical CRMLS data points.",
    company: "Propcard",
    logoPath: "/images/propcard.png",
    title: "Customer Support Engineer",
    date: "January 2023 - May 2024",
    responsibilities: [
      "Administered and maintained SQL database containing records for 200+ agents across 50+ teams representing 7,200+ properties.",
      "Revamped data pipelines and ETL processes to improve platform scalability and system resilience.",
      "Deployed analytics tokens and tracking pixels for comprehensive data analysis, increasing reengagement from targeted outreach by 110%.",
    ],
  },
  {
    topContribution: "Spearheaded an approved proposal for upgrading all team laptops to 16 GB RAM, significantly boosting productivity.",
    company: "Northeastern University",
    logoPath: "/images/neu.png",
    title: "Enrollment Operations Lead",
    date: "February 2018 - May 2022",
    responsibilities: [
      "Promoted to Lead six months after being hired as an Enrollment Operations Assistant in August 2017.",
      'Helped launch the Student Hub in April 2022, leading to a 75% increase in on-time international transcript verification that quarter.',
      "Led migration of external admissions email inbox to Salesforce ticketing system, cutting average response times by 50% (96 to 48 hours).",
    ],
  },
];

const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/git.svg",
    url: "https://github.com/Scurrlin"
  },
  {
    name: "LinkedIn",
    imgPath: "/images/link.svg",
    url: "https://www.linkedin.com/in/seancurrlin/"
  },
  {
    name: "Spotify",
    imgPath: "/images/spot.svg",
    url: "https://open.spotify.com/artist/1yes1OaMmV9w58iMeggawH"
  },
];

export {
  words,
  expCards,
  socialImgs,
  techStackIcons,
  navLinks,
};
