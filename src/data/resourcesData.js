export const resourceCategories = [
  "All",
  "Free Programming Tutorials",
  "Linux Documentation",
  "DSA Practice",
  "Coding Platforms",
  "Git & GitHub Guides",
  "Web Development Documentation",
  "Resume Preparation",
  "Interview Practice"
];

export const resourcesData = [
  // Year 1 Resources
  {
    id: "res-linux-journey",
    title: "Linux Journey (Free Interactive Linux Guide)",
    category: "Linux Documentation",
    year: "Year 1",
    type: "Interactive Guide",
    provider: "LinuxJourney.com",
    url: "https://linuxjourney.com",
    description: "Learn Linux command line, permissions, packages, processes, and kernel concepts through structured bite-sized interactive lessons.",
    isExternal: true
  },
  {
    id: "res-git-scm",
    title: "Pro Git Official Book (Free Online Edition)",
    category: "Git & GitHub Guides",
    year: "Year 1",
    type: "Official Book & Docs",
    provider: "Git-SCM Official Documentation",
    url: "https://git-scm.com/book/en/v2",
    description: "The authoritative and comprehensive book on Git version control written by Scott Chacon and Ben Straub. Completely free to read online.",
    isExternal: true
  },
  {
    id: "res-github-skills",
    title: "GitHub Skills Interactive Labs",
    category: "Git & GitHub Guides",
    year: "Year 1",
    type: "Hands-on Lab",
    provider: "GitHub",
    url: "https://skills.github.com",
    description: "Learn how to use GitHub with automated repositories that provide live feedback as you commit, open pull requests, and resolve merge conflicts.",
    isExternal: true
  },
  {
    id: "res-cs50",
    title: "CS50x: Introduction to Computer Science",
    category: "Free Programming Tutorials",
    year: "Year 1",
    type: "Free University Course",
    provider: "Harvard University / edX",
    url: "https://cs50.harvard.edu/x",
    description: "An open-access introduction to the intellectual enterprises of computer science and the art of programming, taught by David J. Malan.",
    isExternal: true
  },
  {
    id: "res-mit-missing-semester",
    title: "The Missing Semester of Your CS Education",
    category: "Linux Documentation",
    year: "Year 1",
    type: "University Curriculum",
    provider: "MIT (Massachusetts Institute of Technology)",
    url: "https://missing.csail.mit.edu",
    description: "Master the command line, shell scripting, vim, git, debugging, profiling, and security tools that standard university curricula often skip.",
    isExternal: true
  },

  // Year 2 Resources
  {
    id: "res-neetcode",
    title: "NeetCode Roadmap & Video Solutions",
    category: "DSA Practice",
    year: "Year 2",
    type: "Curated Practice",
    provider: "NeetCode.io",
    url: "https://neetcode.io",
    description: "The gold-standard curated roadmap of 150 essential DSA problems grouped by topic (Arrays, Two Pointers, Trees, Graphs, DP) with video explanations.",
    isExternal: true
  },
  {
    id: "res-leetcode",
    title: "LeetCode Problem Archive & Contests",
    category: "Coding Platforms",
    year: "Year 2",
    type: "Coding Platform",
    provider: "LeetCode",
    url: "https://leetcode.com/problemset",
    description: "The premier platform for practicing data structures and algorithms questions commonly asked by top technology companies.",
    isExternal: true
  },
  {
    id: "res-hackerrank",
    title: "HackerRank Problem Solving Track",
    category: "Coding Platforms",
    year: "Year 2",
    type: "Coding Platform",
    provider: "HackerRank",
    url: "https://www.hackerrank.com/domains/algorithms",
    description: "Beginner and intermediate friendly practice tracks for C++, Java, Python, and foundational data structures with automated test cases.",
    isExternal: true
  },
  {
    id: "res-sqlzoo",
    title: "SQLZoo Interactive Database Tutorial",
    category: "Free Programming Tutorials",
    year: "Year 2",
    type: "Interactive Tutorial",
    provider: "SQLZoo.net",
    url: "https://sqlzoo.net",
    description: "Practice writing real SQL queries with live execution against sample databases covering SELECT, JOINs, aggregations, and subqueries.",
    isExternal: true
  },

  // Year 3 Resources
  {
    id: "res-mdn-web",
    title: "MDN Web Docs (Mozilla Developer Network)",
    category: "Web Development Documentation",
    year: "Year 3",
    type: "Authoritative Docs",
    provider: "Mozilla Foundation",
    url: "https://developer.mozilla.org",
    description: "The premier web standard documentation for HTML, CSS, JavaScript, Web APIs, and browser accessibility guidelines.",
    isExternal: true
  },
  {
    id: "res-react-docs",
    title: "React Official Documentation (react.dev)",
    category: "Web Development Documentation",
    year: "Year 3",
    type: "Official Docs",
    provider: "React Team / Meta",
    url: "https://react.dev",
    description: "Modern, interactive React documentation featuring tutorials, hooks architecture, component thinking, and best practices.",
    isExternal: true
  },
  {
    id: "res-freecodecamp",
    title: "freeCodeCamp Responsive Web & Backend",
    category: "Free Programming Tutorials",
    year: "Year 3",
    type: "Free Certified Curriculum",
    provider: "freeCodeCamp.org",
    url: "https://www.freecodecamp.org",
    description: "Verified non-profit platform offering thousands of interactive coding challenges and verified portfolio projects in Full-Stack development.",
    isExternal: true
  },
  {
    id: "res-docker-curriculum",
    title: "Docker for Beginners by Prakhar Srivastav",
    category: "Web Development Documentation",
    year: "Year 3",
    type: "Practical Guide",
    provider: "DockerCurriculum.com",
    url: "https://docker-curriculum.com",
    description: "A hands-on guide for developers to learn Docker fundamentals, build containerized apps, and deploy them to cloud platforms.",
    isExternal: true
  },

  // Year 4 Resources
  {
    id: "res-system-design-primer",
    title: "The System Design Primer by Donne Martin",
    category: "Interview Practice",
    year: "Year 4",
    type: "Open Source Guide",
    provider: "GitHub Repository (270k+ Stars)",
    url: "https://github.com/donnemartin/system-design-primer",
    description: "Learn how to design large-scale systems. Covers scalability, load balancing, caching, databases, microservices, and interview questions.",
    isExternal: true
  },
  {
    id: "res-tech-interview-handbook",
    title: "Tech Interview Handbook by Yangshun Tay",
    category: "Interview Practice",
    year: "Year 4",
    type: "Comprehensive Guide",
    provider: "TechInterviewHandbook.org",
    url: "https://www.techinterviewhandbook.org",
    description: "Curated software engineering interview preparation manual covering algorithmic problem solving, behavioral rounds, and resume building.",
    isExternal: true
  },
  {
    id: "res-jakes-resume",
    title: "Jake's Resume (Standard CS Resume Template)",
    category: "Resume Preparation",
    year: "Year 4",
    type: "ATS Resume Template",
    provider: "Overleaf / LaTeX Community",
    url: "https://www.overleaf.com/latex/templates/jakes-resume/syzsqbzwffcs",
    description: "The widely recognized ATS-friendly, clean single-page software engineer resume template accepted by top product and IT firms.",
    isExternal: true
  },
  {
    id: "res-pramp",
    title: "Pramp / Exponent Peer Mock Interviews",
    category: "Interview Practice",
    year: "Year 4",
    type: "Live Peer Practice",
    provider: "Pramp.com",
    url: "https://www.pramp.com",
    description: "Free platform for practicing live technical coding and behavioral mock interviews with peers and fellow engineering candidates.",
    isExternal: true
  }
];
