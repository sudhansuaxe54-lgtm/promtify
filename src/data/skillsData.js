export const skillsCategories = [
  "All",
  "Programming",
  "Data Structures & Algorithms",
  "Linux & Operating Systems",
  "Web Development",
  "Databases",
  "Cloud & DevOps Fundamentals",
  "Communication",
  "Interview Preparation"
];

export const skillsData = [
  {
    id: "skill-prog",
    title: "Programming Foundations & OOP",
    category: "Programming",
    icon: "Code2",
    year: "Year 1 & 2",
    level: "Core Foundation",
    description: "Master modern object-oriented programming paradigms, standard memory management, modular architecture, and clean code principles using C++, Java, or Python.",
    objectives: [
      "Syntax, variables, scope, pointers/references, and memory layout",
      "Object-Oriented Programming (Encapsulation, Polymorphism, Inheritance, Abstraction)",
      "Exception handling, generics/templates, and standard template libraries",
      "Clean architecture, naming conventions, and modular code structuring"
    ],
    recommendedTools: ["VS Code", "GCC/Clang", "JDK 21", "Python 3.12"],
    progressBenchmark: "Solve 100+ logical coding challenges and build 2 standalone console/desktop tools."
  },
  {
    id: "skill-dsa",
    title: "Data Structures & Algorithms",
    category: "Data Structures & Algorithms",
    icon: "Boxes",
    year: "Year 2 & 4",
    level: "Advanced Problem Solving",
    description: "The backbone of technical interviews. Solve complex computing problems with optimal time and space asymptotic complexity.",
    objectives: [
      "Master linear structures: Arrays, Strings, Linked Lists, Stacks, Queues",
      "Traverse and balance trees: BST, Segment Trees, Trie, Heaps",
      "Graph traversals (BFS, DFS), shortest paths (Dijkstra), topological sort",
      "Dynamic Programming, Recursion, Bit manipulation, and Greedy algorithms"
    ],
    recommendedTools: ["LeetCode", "NeetCode 150", "HackerRank", "Codeforces"],
    progressBenchmark: "Comfortable with medium-difficulty interview problems under 30 minutes."
  },
  {
    id: "skill-linux",
    title: "Linux & Operating Systems",
    category: "Linux & Operating Systems",
    icon: "Terminal",
    year: "Year 1",
    level: "Essential Tooling",
    description: "Gain complete mastery over the terminal, process lifecycle, memory paging, bash scripting, and Unix file systems.",
    objectives: [
      "Terminal navigation, redirection, pipes, grep, sed, and awk commands",
      "File permissions (chmod, chown), process monitoring (ps, top, htop, systemd)",
      "Automated bash scripting, cron task scheduling, and environment variables",
      "OS concepts: Deadlocks, virtual memory, threads, and race conditions"
    ],
    recommendedTools: ["Ubuntu/Debian", "WSL 2", "Bash/Zsh", "Vim / Tmux"],
    progressBenchmark: "Fluency in working without a GUI; write scripts that automate server setup."
  },
  {
    id: "skill-web",
    title: "Modern Web & Full-Stack Development",
    category: "Web Development",
    icon: "Globe",
    year: "Year 3",
    level: "Production Engineering",
    description: "Build reactive, accessible, and high-performance full-stack web applications from frontend interfaces to backend APIs.",
    objectives: [
      "Modern JavaScript (ES6+), async/await, DOM APIs, and TypeScript",
      "React.js component ecosystem, state management, hooks, and routing",
      "Backend REST API development with Node.js, Express, or Python FastAPI",
      "Authentication flows (JWT, OAuth), secure cookies, and CORS policies"
    ],
    recommendedTools: ["React.js", "Node.js", "Tailwind CSS", "Postman", "Vite"],
    progressBenchmark: "Ship at least two production-grade full-stack applications with active databases."
  },
  {
    id: "skill-db",
    title: "Databases & Data Modeling",
    category: "Databases",
    icon: "Database",
    year: "Year 2 & 3",
    level: "Data Architecture",
    description: "Design scalable relational and NoSQL databases with proper normalization, indexing, transactions, and query optimizations.",
    objectives: [
      "Relational schema modeling, 1NF to 3NF normalization, and primary/foreign keys",
      "Complex SQL queries: Joins, subqueries, group by, window functions",
      "NoSQL document architecture with MongoDB and key-value caching with Redis",
      "ACID transactions, isolation levels, B-tree indexes, and query execution plans"
    ],
    recommendedTools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM"],
    progressBenchmark: "Design normalized multi-table database schemas handling thousands of records efficiently."
  },
  {
    id: "skill-cloud",
    title: "Cloud & DevOps Fundamentals",
    category: "Cloud & DevOps Fundamentals",
    icon: "Cloud",
    year: "Year 3 & 4",
    level: "Infrastructure & CI/CD",
    description: "Understand modern cloud primitives, containerization, and continuous deployment workflows.",
    objectives: [
      "Containerization using Docker: Dockerfiles, images, and multi-container Compose",
      "Continuous Integration & Continuous Deployment (CI/CD) with GitHub Actions",
      "Cloud primitives: AWS EC2, S3 storage, serverless functions, and load balancing",
      "Domain DNS routing, SSL certificates, reverse proxies (Nginx), and log monitoring"
    ],
    recommendedTools: ["Docker", "GitHub Actions", "AWS Free Tier", "Vercel / Render"],
    progressBenchmark: "Automate app deployment upon every git push with automated linting & tests."
  },
  {
    id: "skill-comm",
    title: "Professional & Technical Communication",
    category: "Communication",
    icon: "MessageSquare",
    year: "Year 1 & 4",
    level: "Professional Polish",
    description: "Develop the ability to articulate technical ideas concisely, lead presentations, write clean documentation, and excel in team standups.",
    objectives: [
      "Concise technical presentations and explaining architectural trade-offs",
      "Comprehensive markdown documentation, API specifications, and pull request notes",
      "Active listening, team collaboration, and receiving constructive feedback",
      "Cross-functional communication between engineering, product, and leadership"
    ],
    recommendedTools: ["Markdown", "Notion", "Excalidraw", "Slide Decks"],
    progressBenchmark: "Present technical projects clearly to both technical and non-technical audiences."
  },
  {
    id: "skill-interview",
    title: "Interview Preparation & System Design",
    category: "Interview Preparation",
    icon: "Briefcase",
    year: "Year 4",
    level: "Career Readiness",
    description: "Prepare thoroughly for campus drives and top tech interviews through mock rounds, whiteboarding, low-level design, and system architecture.",
    objectives: [
      "Low-Level Design (LLD): Design patterns (Factory, Observer, Singleton, Strategy)",
      "High-Level Design (HLD): Scalability, caching, load balancing, message queues",
      "Behavioral STAR method preparation for leadership and team challenges",
      "Live coding whiteboarding, edge-case analysis, and algorithmic clarity"
    ],
    recommendedTools: ["Pramp", "Interviewing.io", "System Design Primer", "LeetCode Contest"],
    progressBenchmark: "Complete 15+ mock interviews with confident communication and zero code panic."
  }
];
