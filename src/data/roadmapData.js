export const roadmapData = [
  {
    id: 1,
    yearNumber: 1,
    title: "YEAR 1 — Build Strong Foundations",
    shortTitle: "Year 1: Foundations",
    theme: "Fundamentals, Linux, Communication, and Computer Science Basics",
    objective: "Develop a strong technical foundation, understand core computer architecture, master developer tools like Linux and Git, and improve professional communication skills.",
    semesterFocus: "Sem 1 & 2: CS Architecture, Command Line, Git & Web Basics",
    badge: "Foundations & Tools",
    color: "#087443",
    modules: [
      { id: "y1-m1", title: "Introduction to Computers and Operating Systems", desc: "Understanding CPU, RAM, cache, storage, kernel concepts, and process management." },
      { id: "y1-m2", title: "Linux Fundamentals", desc: "Open-source ecosystem, distributions (Ubuntu/Debian), terminal navigation, and package managers." },
      { id: "y1-m3", title: "Linux Terminal Commands", desc: "File manipulation, grep, pipes, redirection, process inspection (ps, top, kill), and network utilities." },
      { id: "y1-m4", title: "File Systems and Permissions", desc: "Linux root hierarchy, chmod, chown, user groups, and secure access models." },
      { id: "y1-m5", title: "Basic Shell Scripting", desc: "Automating routine developer tasks, bash variables, loops, conditional logic, and cron jobs." },
      { id: "y1-m6", title: "Git and GitHub Fundamentals", desc: "Version control workflows, commit etiquette, branch management, merge conflict resolution, and remote repositories." },
      { id: "y1-m7", title: "Computer Networks Basics", desc: "OSI and TCP/IP models, IP addresses, subnets, DNS resolution, and packet switching." },
      { id: "y1-m8", title: "Internet and Web Fundamentals", desc: "How the web works, HTTP/HTTPS protocol methods, status codes, clients, servers, and modern browsers." },
      { id: "y1-m9", title: "English & Technical Communication", desc: "Clear verbal articulation, technical presentations, engineering standups, and documentation." },
      { id: "y1-m10", title: "Professional Writing and Presentation", desc: "Structuring technical blogs, email etiquette, project READMEs, and slide deck delivery." },
      { id: "y1-m11", title: "Problem-Solving Fundamentals", desc: "Algorithmic thinking, flowcharting, pseudocode, breaking complex problems into sub-modules." }
    ],
    tasks: [
      { id: "y1-t1", title: "Install and explore a Linux environment (Dual boot, WSL2, or VM)" },
      { id: "y1-t2", title: "Practice and document 50+ essential Linux commands with cheat sheet" },
      { id: "y1-t3", title: "Create a GitHub profile and configure SSH key authentication" },
      { id: "y1-t4", title: "Build and deploy a personal portfolio webpage using HTML/CSS & GitHub Pages" },
      { id: "y1-t5", title: "Deliver a 5-minute technical presentation on an emerging technology topic" },
      { id: "y1-t6", title: "Write markdown documentation for every practical lab exercise" }
    ],
    suggestedProjects: [
      { name: "Terminal Utility CLI", desc: "Bash script automating backup and system health monitoring." },
      { name: "Personal Developer Portfolio", desc: "Responsive personal portfolio hosted with custom domain/GitHub pages." },
      { name: "Markdown Technical Knowledgebase", desc: "Structured repository of Linux and CS fundamentals notes." }
    ],
    milestones: [
      { id: "y1-ms1", title: "Comfortable navigating and managing Linux terminal" },
      { id: "y1-ms2", title: "Proficient with basic Git & GitHub workflow (commit, branch, PR)" },
      { id: "y1-ms3", title: "Deployed a functional personal portfolio website" },
      { id: "y1-ms4", title: "Improved technical communication and presentation confidence" },
      { id: "y1-ms5", title: "Established consistent daily learning and coding habits" }
    ]
  },
  {
    id: 2,
    yearNumber: 2,
    title: "YEAR 2 — Programming and Data Structures",
    shortTitle: "Year 2: DSA & Logic",
    theme: "Programming Skills, DSA, and Problem-Solving",
    objective: "Develop programming proficiency in a core industry language, master data structures and algorithms, and develop rigorous problem-solving logic.",
    semesterFocus: "Sem 3 & 4: OOPs, Core DSA, SQL Databases & Competitive Coding",
    badge: "Core Engineering",
    color: "#065B35",
    modules: [
      { id: "y2-m1", title: "C / C++ or Java / Python Deep Dive", desc: "Syntax, memory model, pointers/references, compilation lifecycle, and standard library." },
      { id: "y2-m2", title: "Object-Oriented Programming (OOP)", desc: "Encapsulation, inheritance, polymorphism, abstraction, interfaces, and SOLID design principles." },
      { id: "y2-m3", title: "Time and Space Complexity Analysis", desc: "Asymptotic notation (Big O, Omega, Theta), recurrence relations, and performance trade-offs." },
      { id: "y2-m4", title: "Linear Data Structures: Arrays & Strings", desc: "Two-pointer technique, sliding window, prefix sums, string manipulation algorithms." },
      { id: "y2-m5", title: "Linked Lists & Memory Pointers", desc: "Singly, doubly, circular linked lists, fast & slow pointers, reversing, and cycle detection." },
      { id: "y2-m6", title: "Stacks & Queues", desc: "LIFO/FIFO paradigms, monotonic stacks, priority queues, and deque applications." },
      { id: "y2-m7", title: "Non-Linear Structures: Trees & Binary Search Trees", desc: "Tree traversals (inorder, preorder, postorder, level order), BST operations, AVL and balanced trees." },
      { id: "y2-m8", title: "Graphs and Graph Algorithms", desc: "Adjacency matrix/list, BFS, DFS, Dijkstra's shortest path, topological sort, Disjoint Set Union." },
      { id: "y2-m9", title: "Searching and Sorting Algorithms", desc: "Binary search on answers, QuickSort, MergeSort, heap sort, counting sort." },
      { id: "y2-m10", title: "Recursion & Dynamic Programming Basics", desc: "Recursive trees, memoization, bottom-up tabulation, 0/1 knapsack, LCS." },
      { id: "y2-m11", title: "SQL and Database Fundamentals", desc: "Relational schema design, normalization (1NF-3NF), joins, subqueries, indexing, and ACID." },
      { id: "y2-m12", title: "Advanced Git and Collaborative Development", desc: "Git rebasing, cherry-picking, pull request code reviews, and conventional commits." }
    ],
    tasks: [
      { id: "y2-t1", title: "Solve coding problems consistently (150+ problems across LeetCode / HackerRank)" },
      { id: "y2-t2", title: "Build an Object-Oriented Student Management System in Java/C++ or Python" },
      { id: "y2-t3", title: "Create a Library Management System with SQL database integration" },
      { id: "y2-t4", title: "Participate in bi-weekly coding contests and analyze solutions" },
      { id: "y2-t5", title: "Contribute to beginner-friendly open-source repositories" },
      { id: "y2-t6", title: "Maintain an organized GitHub repository of DSA implementations and notes" }
    ],
    suggestedProjects: [
      { name: "Student Management System", desc: "OOP-driven console/GUI application with relational database persistence." },
      { name: "Custom DSA Visualizer CLI", desc: "Interactive tool showing step-by-step sorting and graph traversal executions." },
      { name: "Banking Transaction Simulator", desc: "Thread-safe financial ledger demonstrating ACID transactions & data structures." }
    ],
    milestones: [
      { id: "y2-ms1", title: "Strong mastery of one primary language (Java / C++ / Python)" },
      { id: "y2-ms2", title: "Solid grasp of core DSA (Arrays, Linked Lists, Trees, Graphs, Sorting)" },
      { id: "y2-ms3", title: "Active repository of 150+ solved algorithm problems on GitHub" },
      { id: "y2-ms4", title: "Completed 2-3 structured object-oriented software projects" },
      { id: "y2-ms5", title: "Ability to solve medium-difficulty coding problems independently" }
    ]
  },
  {
    id: 3,
    yearNumber: 3,
    title: "YEAR 3 — Real-World Projects and Internships",
    shortTitle: "Year 3: Projects & Tech",
    theme: "Full-Stack Development, Projects, Internships, and Industry Experience",
    objective: "Apply technical skills to real-world problems, master full-stack software development, collaborate on teams, build production-grade projects, and secure internships.",
    semesterFocus: "Sem 5 & 6: Modern Web Stack, Cloud Basics, CI/CD, Hackathons & Internships",
    badge: "Industry Application",
    color: "#087443",
    modules: [
      { id: "y3-m1", title: "HTML5, Modern CSS3 & JavaScript (ES6+)", desc: "DOM manipulation, asynchronous JS (Promises, async/await), event loops, and modern CSS." },
      { id: "y3-m2", title: "Modern Frontend with React.js", desc: "Component architecture, hooks (useState, useEffect, useMemo), routing, and state management." },
      { id: "y3-m3", title: "Backend Development with Node.js & Express", desc: "Event-driven servers, middleware, controllers, error handling, and MVC architecture." },
      { id: "y3-m4", title: "RESTful APIs & API Integration", desc: "API design conventions, HTTP headers, request validation, pagination, and Postman testing." },
      { id: "y3-m5", title: "Database Systems: MongoDB & PostgreSQL", desc: "Document vs relational paradigms, Prisma/Mongoose ORMs, aggregations, and migration workflows." },
      { id: "y3-m6", title: "Authentication, Authorization & Security", desc: "JWT tokens, OAuth2, bcrypt hashing, session cookies, CORS policies, and rate limiting." },
      { id: "y3-m7", title: "Cloud Fundamentals & Deployment", desc: "Deploying on Vercel/Render/AWS EC2, environment variables, DNS, and serverless compute." },
      { id: "y3-m8", title: "Software Development Lifecycle & Agile", desc: "Scrum ceremonies, user stories, Jira/GitHub Projects Kanban boards, and sprint planning." },
      { id: "y3-m9", title: "Testing, Debugging & Code Quality", desc: "Unit testing (Jest/Vitest), API integration testing, browser DevTools debugging." },
      { id: "y3-m10", title: "Team Collaboration & Git Branching", desc: "Feature branching, pull request reviews, semantic versioning, and CI pipelines." },
      { id: "y3-m11", title: "Resume and LinkedIn Profile Development", desc: "ATS-optimized resumes, quantified achievements, LinkedIn networking, and GitHub pinning." },
      { id: "y3-m12", title: "Internship Search & Technical Prep", desc: "Cold outreach, tech screening practice, case studies, and career fair strategies." }
    ],
    tasks: [
      { id: "y3-t1", title: "Build and deploy 2 production-grade full-stack web applications" },
      { id: "y3-t2", title: "Create a collaborative group project using GitHub pull request reviews" },
      { id: "y3-t3", title: "Participate in at least 2 hackathons to build fast MVPs under pressure" },
      { id: "y3-t4", title: "Contribute meaningful PRs to active open-source projects" },
      { id: "y3-t5", title: "Apply for 50+ summer software engineering internships" },
      { id: "y3-t6", title: "Conduct peer technical mock interviews and document live feedback" },
      { id: "y3-t7", title: "Write comprehensive README documentation with live demo URLs and architecture diagrams" }
    ],
    suggestedProjects: [
      { name: "Student Learning Management System", desc: "Full-stack LMS with course enrollment, quiz modules, progress tracking, and admin dashboard." },
      { name: "AI-Powered Study Assistant", desc: "Intelligent study companion utilizing LLM APIs for automated flashcards, summarization, and query resolution." },
      { name: "College Event Management Platform", desc: "Event ticketing, QR-code check-ins, attendee notifications, and RSVP analytics." },
      { name: "Job and Internship Portal", desc: "Platform connecting student candidates with alumni job postings, resume parser, and application tracking." },
      { name: "Personal Finance Tracking Application", desc: "Interactive expense analytics, multi-category budgets, chart visualizations, and CSV exports." }
    ],
    milestones: [
      { id: "y3-ms1", title: "Built 3 to 5 meaningful software projects across diverse domains" },
      { id: "y3-ms2", title: "At least one fully deployed production full-stack project with active users" },
      { id: "y3-ms3", title: "Completed internship applications and secured practical work experience" },
      { id: "y3-ms4", title: "Polished engineering portfolio with live links, GitHub repos, and video demos" },
      { id: "y3-ms5", title: "Active professional tech network established on LinkedIn and developer communities" }
    ]
  },
  {
    id: 4,
    yearNumber: 4,
    title: "YEAR 4 — Placement and Interview Preparation",
    shortTitle: "Year 4: Placements & Careers",
    theme: "Job Readiness, Advanced DSA, System Design, and Placement Preparation",
    objective: "Prepare for high-package technical campus drives, off-campus hiring, behavioral rounds, system design interviews, and transition smoothly into full-time engineering roles.",
    semesterFocus: "Sem 7 & 8: System Design, Mock Drives, Behavioral Prep, High-Impact Offers",
    badge: "Career Ready",
    color: "#065B35",
    modules: [
      { id: "y4-m1", title: "Advanced DSA & Pattern Recognition", desc: "Graph theory, DP on trees/bitmasks, Trie, segment trees, and rapid pattern matching." },
      { id: "y4-m2", title: "Timed Problem-Solving & Contest Agility", desc: "Simulating 45-minute live interview rounds under time constraints with clean, readable code." },
      { id: "y4-m3", title: "Object-Oriented Design & LLD", desc: "Low-level design problems (Parking Lot, BookMyShow, Elevator System) using OOP design patterns." },
      { id: "y4-m4", title: "System Design Fundamentals (HLD)", desc: "Horizontal vs vertical scaling, load balancers, caching (Redis), CDNs, database sharding, CAP theorem." },
      { id: "y4-m5", title: "Operating Systems Revision for Interviews", desc: "Process scheduling, deadlocks, multithreading, concurrency, paging, and virtual memory." },
      { id: "y4-m6", title: "DBMS & SQL Deep Dive for Placements", desc: "Indexing strategies (B-Trees), query optimization, transaction isolation levels, and complex joins." },
      { id: "y4-m7", title: "Computer Networks Core Revision", desc: "TCP 3-way handshake, SSL/TLS handshake, WebSockets, HTTP 2/3, and firewall mechanics." },
      { id: "y4-m8", title: "Technical Round Strategy & Whiteboarding", desc: "Clarifying questions, edge cases, trade-off communication, writing bug-free dry runs on boards." },
      { id: "y4-m9", title: "HR & Behavioral Interview Preparation", desc: "STAR method (Situation, Task, Action, Result) for leadership, conflict resolution, and teamwork." },
      { id: "y4-m10", title: "Aptitude and Logical Reasoning", desc: "Quantitative aptitude, data interpretation, probability, combinatorics, and analytical puzzles." },
      { id: "y4-m11", title: "Targeted Company Placement Strategy", desc: "Tier-1 product companies, high-growth startups, service leaders, and tailored role applications." },
      { id: "y4-m12", title: "Offer Evaluation & Professional Communication", desc: "Understanding CTC components (base, stocks/ESOPs, bonuses), negotiation etiquette, and onboarding." }
    ],
    tasks: [
      { id: "y4-t1", title: "Take 15+ comprehensive mock technical and HR interviews with recorded feedback" },
      { id: "y4-t2", title: "Solve company-specific archives (Amazon, Microsoft, Google, Adobe, high-growth startups)" },
      { id: "y4-t3", title: "Craft in-depth 5-minute and 15-minute explanations for your top 2 projects" },
      { id: "y4-t4", title: "Prepare structured STAR stories for 10 common behavioral questions" },
      { id: "y4-t5", title: "Participate proactively in on-campus placement drives and curated hiring challenges" },
      { id: "y4-t6", title: "Conduct daily targeted cold outreach and referral requests on LinkedIn" },
      { id: "y4-t7", title: "Create an ATS-proof single-page resume with quantified business/technical impact" }
    ],
    suggestedProjects: [
      { name: "Distributed Rate Limiter Service", desc: "Redis-backed Token Bucket and Sliding Window rate limiter microservice." },
      { name: "Scalable URL Shortener with Analytics", desc: "Production-ready system handling redirects, hash collisions, caching, and click analytics." },
      { name: "Real-time Collaboration Canvas / Code Pad", desc: "WebSocket-powered multi-user editor highlighting concurrency, operational transforms, or CRDTs." }
    ],
    milestones: [
      { id: "y4-ms1", title: "Crafted a top-tier, ATS-optimized, placement-ready resume" },
      { id: "y4-ms2", title: "Rock-solid project portfolio with clear architecture and deep technical depth" },
      { id: "y4-ms3", title: "Completed 15+ mock interviews with documented improvement metrics" },
      { id: "y4-ms4", title: "High confidence in technical whiteboarding, DSA, and system design discussions" },
      { id: "y4-ms5", title: "Secured high-package offers and established a disciplined professional routine" }
    ]
  }
];
