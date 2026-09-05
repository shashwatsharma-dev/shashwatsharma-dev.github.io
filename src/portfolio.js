/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Shashwat Sharma",
  title: "Hi, I'm Shashwat",
  subTitle: emoji(
    "A Solution Architect with 14+ years of experience designing enterprise Generative AI, Agentic AI, and automation solutions 🚀"
  ),
  resumeLink: "", // add a hosted Google Drive link to your resume PDF here
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/shashwatsharma-dev",
  linkedin: "https://www.linkedin.com/in/Shashwat-Sharma-genAI-architect",
  gmail: "sharma.shashwat.official@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "SOLUTION ARCHITECTURE ACROSS GENERATIVE AI, AGENTIC AI, AND ENTERPRISE AUTOMATION",
  skills: [
    emoji("⚡ Architect Agentic AI and RAG-based knowledge systems for enterprise operations"),
    emoji("⚡ Design incident RCA intelligence and AI-powered ticket analytics solutions"),
    emoji("⚡ Build self-service automation reducing manual operational effort by 20-35%"),
    emoji("⚡ Mentor and enable delivery teams on GenAI adoption and prompt engineering patterns")
  ],

  softwareSkills: [
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "jenkins", fontAwesomeClassname: "fab fa-jenkins" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Northern India Engineering College, Lucknow",
      // logo: require("./assets/images/yourCollegeLogo.png"), // add your own logo file, then uncomment
      subHeader: "Bachelor of Technology, Computer Science & Engineering",
      duration: "2011",
      desc: "",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "GenAI / Agentic AI (Bedrock, RAG, Prompt Engineering)", progressPercentage: "90%" },
    { Stack: "Solution Architecture & Enterprise Automation", progressPercentage: "95%" },
    { Stack: "Data & Database Architecture (Oracle, PostgreSQL, PL/SQL)", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Solution Architect / Product Manager",
      company: "Tata Consultancy Services Limited",
       companylogo: require("./assets/images/tcs-light-logo.png"), // add your own logo file, then uncomment
      date: "Nov 2017 – Present",
      desc: "Architect enterprise-scale automation and AI-driven solutions for incident management, service delivery, database operations, monitoring, runbook execution, and operational knowledge discovery.",
      descBullets: [
        "Designed Ops-as-Self-Service automation delivering 20-35% reduction in manual effort, 25-40% faster cycle times, and 15-25% improvement in SLA adherence",
        "Built an Incident RCA Intelligence pipeline extracting facts from Teams call transcripts to draft RCA content, reducing manual post-incident documentation",
        "Solutioned AI-powered ticket analytics identifying recurring incidents, automation candidates, and quality issues for leadership",
        "Designed RAG-based enterprise Q&A patterns for runbooks, operational documents, and support repositories",
        "Managed and mentored 15+ associates on automation, GenAI adoption, and prompt engineering patterns"
      ]
    },
    {
      role: "Lead Database Architect",
      company: "TCS Internal — Project Resource Management",
      date: "Nov 2015 – Oct 2017",
      desc: "Led Oracle Apps 11i reverse engineering, data model development, PL/SQL architecture, capacity planning, archiving, purging, partitioning, and information lifecycle management for enterprise systems.",
      descBullets: [
        "Worked directly with business users to analyze process gaps and translate functional needs into scalable database and application design components"
      ]
    },
    {
      role: "Lead ETL Developer / Senior Database Developer",
      company: "Tata Consultancy Services Limited",
      date: "Sep 2012 – Oct 2015",
      desc: "Designed and built ETL integrations using Informatica PowerCenter, including PostgreSQL HR to Oracle Payroll integration, performance tuning, data quality checks, and delivery governance.",
      descBullets: [
        "Developed database models, reports, PL/SQL packages, procedures, functions, triggers, and optimized SQL batches for internal enterprise applications"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Key Initiatives",
  subtitle: "GENAI, AGENTIC AI, AND AUTOMATION WORK AT ENTERPRISE SCALE",
  projects: [
    {
      // image: require("./assets/images/yourProjectImage1.png"), // add a diagram/screenshot, then uncomment
      projectName: "Incident RCA Intelligence",
      projectDesc: "Extracts incident facts from Teams call transcripts and drafts structured RCA content with a human review step, reducing manual post-incident documentation.",
      footerLink: []
    },
    {
      projectName: "AI-Powered Ticket Analytics",
      projectDesc: "Surfaces recurring incidents, operational hotspots, and automation candidates from ticket data to help leadership prioritize reliability work.",
      footerLink: []
    },
    {
      projectName: "RAG-based Enterprise Q&A",
      projectDesc: "Enables faster discovery of answers from runbooks, operational documents, databases, and support repositories through grounded retrieval.",
      footerLink: []
    },
    {
      projectName: "Ops-as-Self-Service Automation",
      projectDesc: "Self-service utilities for data fixes, change requests, and DR drills — delivering 20-35% reduction in manual effort and 25-40% faster cycle times.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications earned across GenAI, cloud architecture, and database engineering",

  achievementsCards: [
    {
      title: "Claude Certified Architect - Foundations)",
      subtitle: "",
      image: require("./assets/images/claude-certified-architect-foundations.png"), // add badge image, then uncomment
      footerLink: []
    },
    {
      title: "Claude Certified Associate - Foundations",
      subtitle: "",
      image: require("./assets/images/claude-certified-associate-foundations.png"), // add badge image, then uncomment
      footerLink: []
    },
    {
      title: "AWS Certified Generative AI Developer – Professional (AIP-C01)",
      subtitle: "",
      image: require("./assets/images/aws-certified-generative-ai-developer-professional.png"), // add badge image, then uncomment
      footerLink: []
    },
    {
      title: "AWS Solution Architect – Associate",
      subtitle: "",
      image: require("./assets/images/aws-certified-solutions-architect-associate.png"), // add badge image, then uncomment
      footerLink: []
    },
    {
      title: "GSDC Site Reliability Engineering (SRE) Foundation",
      subtitle: "",
      image: require("./assets/images/gsdc-sre-foundation.png"), // add badge image, then uncomment
      footerLink: []
    },
    {
      title: "Oracle PL/SQL Developer Certified – Associate",
      subtitle: "",
      image: require("./assets/images/oracle-plsql-certified-associate.png"), // add badge image, then uncomment
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // no Medium account yet — hardcoded list below is empty too
  blogs: [],
  display: false // turn on once you have posts to show
};

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to discussing Agentic AI, RAG architecture, or enterprise automation projects",
  number: "+91-8052344445",
  email_address: "sharma.shashwat.official@gmail.com",
  display: true
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true; // set false if you're not open to opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};