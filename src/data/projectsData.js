export const projectCategories = [
  "All",
  "Web Development",
  "Programming",
  "AI & ML",
  "Database Applications",
  "Open Source"
];

export const projectsData = [
  {
    id: "proj-lms",
    title: "Student Learning Management System",
    category: "Web Development",
    year: "Year 3",
    difficulty: "Intermediate",
    description: "A comprehensive learning portal featuring course catalogs, lecture video tracking, interactive quiz assessments, student progress analytics, and role-based instructor dashboards.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    learningOutcomes: [
      "Role-Based Access Control (Admin, Instructor, Student)",
      "Secure token authentication and refresh mechanisms",
      "Dynamic course progress tracking and video bookmarking",
      "RESTful API design with comprehensive error handling"
    ],
    architectureOverview: "Client-server architecture with React SPA talking to Express API, persisted in MongoDB with Mongoose schemas and AWS S3 for course assets.",
    githubGuide: "Includes starter repo with pre-configured authentication boilerplate and seed data."
  },
  {
    id: "proj-ai-study",
    title: "AI-Powered Study Assistant",
    category: "AI & ML",
    year: "Year 3",
    difficulty: "Advanced",
    description: "An intelligent study companion that parses lecture PDFs and generates structured flashcards, concise summaries, practice quiz questions, and conversational tutoring.",
    techStack: ["Python", "FastAPI", "React", "OpenAI / Gemini API", "LangChain", "ChromaDB"],
    learningOutcomes: [
      "Retrieval Augmented Generation (RAG) architecture basics",
      "Vector embeddings and document semantic search",
      "Prompt engineering and contextual structured output parsing",
      "Building responsive conversational chat interfaces"
    ],
    architectureOverview: "PDF documents are chunked and vectorized using ChromaDB. FastAPI backend orchestrates context injection into LLM prompts for grounded response generation.",
    githubGuide: "Complete guide on setting up local vector database and configuring API keys safely."
  },
  {
    id: "proj-event-mgr",
    title: "College Event & Ticketing Platform",
    category: "Web Development",
    year: "Year 3",
    difficulty: "Intermediate",
    description: "End-to-end platform for college symposiums, hackathons, and cultural fests with digital QR ticketing, instant RSVP notifications, and live attendee analytics.",
    techStack: ["Next.js / React", "PostgreSQL", "Prisma ORM", "QR Code API", "Tailwind CSS"],
    learningOutcomes: [
      "Relational schema modeling for ticket tiers and registrations",
      "Dynamic QR code generation and mobile camera verification",
      "Transactional email integration for ticket confirmation",
      "Live analytics dashboard for organizers with exportable CSVs"
    ],
    architectureOverview: "PostgreSQL database with optimistic concurrency to prevent double-booking of limited seat events.",
    githubGuide: "Includes mock scanner component for camera-based QR code verification testing."
  },
  {
    id: "proj-job-portal",
    title: "Campus Job & Internship Portal",
    category: "Web Development",
    year: "Year 3",
    difficulty: "Advanced",
    description: "Career portal matching university students with recruiters and alumni opportunities. Features resume parsing, job bookmarking, and multi-stage application status tracking.",
    techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "Multer", "Tailwind"],
    learningOutcomes: [
      "Multi-stage Kanban-style application status tracker",
      "File upload pipeline for student resumes with validation",
      "Advanced filtering (role, stipend, year of study, remote/onsite)",
      "Recruiter review portal with shortlisting capabilities"
    ],
    architectureOverview: "Modular REST backend with relational tables connecting students, applications, job postings, and company profiles.",
    githubGuide: "Complete schema migrations and sample mock applications included."
  },
  {
    id: "proj-finance-tracker",
    title: "Personal Finance & Expense Analytics",
    category: "Database Applications",
    year: "Year 3",
    difficulty: "Intermediate",
    description: "Personal finance tracker with recurring subscription monitors, custom category budgeting, dynamic visual spending charts, and receipt attachment logs.",
    techStack: ["React.js", "Chart.js", "Express", "SQLite / PostgreSQL", "CSS Glassmorphism"],
    learningOutcomes: [
      "Interactive data visualizations with pie, bar, and trend charts",
      "Complex SQL grouping, aggregation, and monthly trend calculations",
      "Client-side state management for fast instant transaction filtering",
      "Exporting formatted financial statements in CSV format"
    ],
    architectureOverview: "Lightweight, privacy-first database architecture with optimized aggregation queries for fast monthly summaries.",
    githubGuide: "Comes with preset categories for students and realistic seed datasets."
  },
  {
    id: "proj-sys-monitor",
    title: "Linux System Health & Automation CLI",
    category: "Programming",
    year: "Year 1",
    difficulty: "Beginner",
    description: "A robust command-line utility written in Bash and Python that monitors CPU, memory, disk usage, active network connections, and triggers alerts on threshold breaches.",
    techStack: ["Bash", "Linux CLI", "Python", "Cron Daemon"],
    learningOutcomes: [
      "Parsing /proc filesystem and Unix system metrics",
      "Writing reusable shell functions with flag argument parsing",
      "Scheduling background daemon checks using cron jobs",
      "Standard error logging and output formatting with ANSI colors"
    ],
    architectureOverview: "Stand-alone Unix script executable directly in any terminal environment with zero heavy external dependencies.",
    githubGuide: "Interactive terminal script ready to clone and run on Ubuntu/WSL."
  },
  {
    id: "proj-dsa-visualizer",
    title: "DSA Interactive Algorithm Visualizer",
    category: "Programming",
    year: "Year 2",
    difficulty: "Intermediate",
    description: "Step-by-step visualizer for sorting algorithms (Bubble, Merge, Quick, Heap) and graph traversals (BFS, DFS, Dijkstra) with speed controls and call-stack displays.",
    techStack: ["JavaScript", "HTML5 Canvas / React", "CSS Animations", "Algorithms"],
    learningOutcomes: [
      "Visualizing recursion and call stacks in real time",
      "Async execution control (pause, resume, step-forward, playback speed)",
      "Deep understanding of comparative sorting and space complexity",
      "Clean UI component design for educational demonstrations"
    ],
    architectureOverview: "Generator-based execution engine that yields execution states step-by-step to animate canvas elements smoothly.",
    githubGuide: "Well-documented modular sorting algorithms with benchmark timers."
  },
  {
    id: "proj-rate-limiter",
    title: "Distributed Rate Limiter & URL Shortener",
    category: "Database Applications",
    year: "Year 4",
    difficulty: "Advanced",
    description: "High-throughput URL redirection service with Redis token-bucket rate limiting, collision-safe Base62 hashing, and real-time geographic click tracking.",
    techStack: ["Go / Node.js", "Redis", "PostgreSQL", "Docker", "REST API"],
    learningOutcomes: [
      "Implementing sliding-window and token bucket rate limiters in Redis",
      "Base62 encoding algorithms and MD5 hash truncation",
      "High-concurrency caching to reduce database read pressure by 95%",
      "Containerization using Docker Compose with Redis and DB instances"
    ],
    architectureOverview: "Dual-tier caching architecture with Redis fast-path redirection and background asynchronous click logging to PostgreSQL.",
    githubGuide: "Docker-compose setup with Apache Bench load testing scripts."
  },
  {
    id: "proj-open-source",
    title: "Community Developer Tooling Contribution",
    category: "Open Source",
    year: "Year 2 & 3",
    difficulty: "Intermediate",
    description: "A structured walkthrough project for finding beginner-friendly GitHub issues ('good first issue'), navigating real codebases, creating pull requests, and getting merged.",
    techStack: ["Git", "GitHub Actions", "Markdown", "OSS Workflow", "Peer Review"],
    learningOutcomes: [
      "Navigating unfamiliar enterprise-scale code repositories",
      "Following contributing guidelines and signing Developer Certificates of Origin (DCO)",
      "Addressing reviewer feedback and pushing tidy rebased commits",
      "Building a verifiable public contribution record"
    ],
    architectureOverview: "Hands-on open-source contribution repository with mock triage issues and PR checklists.",
    githubGuide: "Step-by-step guide to finding and closing your first 5 open source PRs."
  }
];
