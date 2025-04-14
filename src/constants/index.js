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
  { name: "Resume",
    link: "https://drive.google.com/file/d/10RvqYyo7AnW5zBODhkdB-xpGXduj2pJF/view?usp=sharing"
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

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const techStackImgs = [
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "ReactJS",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "NodeJS",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "ThreeJS",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
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
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Assisted in the deployment of Lee & Low Books’ e-commerce website, the largest multicultural children’s book publisher in the United States.",
    company: "GoingClear",
    logoPath: "/images/gc.png",
    title: "Associate Web Developer",
    date: "July 2024 - Present",
    responsibilities: [
      "Engaged in ideation and planning meetings with customers to finalize minimum viable product, tech stack and project plan.",
      "Conducted quality assurance testing on new features to identity and resolve issues pre-launch.",
      "Interviewed previous clients to record live testimonials for social media content.",
    ],
  },
  {
    review: "Partnered with a senior developer to construct an enhanced Web API for specific CRMLS data points.",
    company: "Propcard",
    logoPath: "/images/propcard.png",
    title: "Customer Support Engineer",
    date: "January 2023 - May 2024",
    responsibilities: [
      "Facilitated client onboarding and performed custom website updates through HTML injection.",
      "Revamped data pipelines and ETL processes to enhance platform scalability.",
      "Implemented analytics tokens and tracking pixels for comprehensive web traffic data collection and analysis.",
    ],
  },
  {
    review: "Spearheaded crafting and submission of an approved proposal for upgrading all team members’ laptops to 16 GB RAM, significantly boosting productivity.",
    company: "Northeastern University",
    logoPath: "/images/neu.png",
    title: "Enrollment Operations Lead",
    date: "February 2018 - May 2022",
    responsibilities: [
      "Promoted to Lead six months after being hired as an Enrollment Operations Assistant in August 2017.",
      'Key contributor to launch of "Student Hub" in April 2022, achieving 75% improvement in international transcript fulfillment.',
      "Implemented migration of external admissions email inbox to Salesforce ticketing system, cutting average response times by 50%, from 96 hours to 48 hours.",
    ],
  },
];

const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/git.svg",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/link.svg",
  },
  {
    name: "Spotify",
    imgPath: "/images/spot.svg",
  },
];

export {
  words,
  logoIconsList,
  expCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
