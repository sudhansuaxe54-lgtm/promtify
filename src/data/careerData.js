export const careerPathways = [
  {
    id: "path-swe",
    title: "Software Developer / SDE",
    shortDesc: "Build robust, scalable software systems, algorithms, and core engineering infrastructure.",
    roadmapYears: "Year 1 to Year 4",
    demandBadge: "High Industry Demand",
    foundationalSkills: [
      "Core Data Structures & Algorithms (Trees, Graphs, DP)",
      "Strong proficiency in Java, C++, or Python",
      "Object-Oriented Design (SOLID principles, Design Patterns)",
      "Operating Systems, Threading, and Memory Management",
      "Git version control and collaborative workflows"
    ],
    recommendedAdditional: [
      "Low-Level System Design (LLD)",
      "Unit testing & automated integration testing",
      "Basic understanding of CI/CD pipelines",
      "Database indexing and query execution planning"
    ],
    exampleProjects: [
      "Multi-threaded banking ledger simulator",
      "Custom memory-efficient cache library",
      "Distributed task scheduler with worker pools"
    ],
    commonInterviewTopics: [
      "Algorithmic problem solving and live whiteboarding",
      "Time and space complexity trade-offs",
      "Concurrency, deadlocks, and thread safety",
      "Object-Oriented Design of real-world systems (e.g. Elevator, Parking Lot)"
    ]
  },
  {
    id: "path-frontend",
    title: "Frontend Developer",
    shortDesc: "Craft pixel-perfect, accessible, and ultra-fast user interfaces across modern web and mobile clients.",
    roadmapYears: "Year 2 & Year 3",
    demandBadge: "Creative & Engineering",
    foundationalSkills: [
      "Semantic HTML5, Responsive CSS3, Modern Flexbox & Grid",
      "Deep JavaScript knowledge (ES6+, Event Loop, Closures, Async/Await)",
      "React.js component ecosystem and state management",
      "Browser rendering pipeline, DOM optimization, and Web Vitals",
      "Web accessibility (WCAG) and responsive design"
    ],
    recommendedAdditional: [
      "TypeScript for enterprise frontend applications",
      "Next.js / SSR / Static Site Generation",
      "State management libraries (Zustand, Redux Toolkit)",
      "Component testing with Jest, Vitest, and React Testing Library"
    ],
    exampleProjects: [
      "Interactive analytics dashboard with dynamic charting",
      "Real-time collaborative kanban board (Trello clone)",
      "E-commerce storefront with cart state & optimistic UI"
    ],
    commonInterviewTopics: [
      "JavaScript execution context, event loop, and prototypical inheritance",
      "React re-rendering lifecycle and performance hooks (useCallback, useMemo)",
      "Building a complex component live (e.g. Autocomplete dropdown, Modal system)",
      "CSS specificity, layout shifting, and bundle size reduction"
    ]
  },
  {
    id: "path-backend",
    title: "Backend Developer",
    shortDesc: "Architect high-performance APIs, robust database architectures, and distributed microservices.",
    roadmapYears: "Year 2 to Year 4",
    demandBadge: "Systems & Architecture",
    foundationalSkills: [
      "Server-side runtime (Node.js, Go, Java Spring Boot, or Python)",
      "RESTful API design conventions and HTTP protocol fundamentals",
      "Relational databases (PostgreSQL/MySQL) and schema normalization",
      "Authentication protocols (JWT, OAuth 2.0, API keys)",
      "Caching strategies with Redis and message brokers"
    ],
    recommendedAdditional: [
      "Microservices architecture and gRPC protocols",
      "Message queues (RabbitMQ, Apache Kafka)",
      "Docker containerization and Kubernetes orchestration",
      "Database connection pooling and read/write replicas"
    ],
    exampleProjects: [
      "High-concurrency e-commerce order processing engine",
      "Real-time notification service with WebSockets & Redis Pub/Sub",
      "Secure authentication & RBAC authorization service"
    ],
    commonInterviewTopics: [
      "API idempotency, rate limiting, and database transactions (ACID)",
      "Database schema design and indexing optimization",
      "High-Level Design (HLD) of scalable web platforms",
      "Microservice failure handling and circuit breaker patterns"
    ]
  },
  {
    id: "path-fullstack",
    title: "Full-Stack Developer",
    shortDesc: "Bridge the gap between frontend experiences and backend infrastructure to deliver end-to-end digital products.",
    roadmapYears: "Year 3 & Year 4",
    demandBadge: "Versatile & Product-Driven",
    foundationalSkills: [
      "React.js / Next.js frontend engineering",
      "Node.js, Express, or Python backend services",
      "Both SQL (PostgreSQL) and NoSQL (MongoDB) databases",
      "RESTful and GraphQL API implementations",
      "Cloud hosting on platforms like Vercel, Render, or AWS"
    ],
    recommendedAdditional: [
      "TypeScript across both client and server codebases",
      "Dockerized local development environments",
      "End-to-End testing with Playwright or Cypress",
      "Serverless architecture and edge computing"
    ],
    exampleProjects: [
      "Full-stack student learning management system with payment gateways",
      "Campus event platform with QR ticketing and live check-in",
      "SaaS collaborative document workspace with real-time syncing"
    ],
    commonInterviewTopics: [
      "Designing a complete feature end-to-end (DB schema to UI component)",
      "State synchronization and caching between client and server",
      "Security vulnerabilities (XSS, CSRF, SQL Injection) and mitigation",
      "Deploying and monitoring production applications"
    ]
  },
  {
    id: "path-devops",
    title: "DevOps Engineer",
    shortDesc: "Automate build, test, and release pipelines to ensure reliable, high-availability deployments.",
    roadmapYears: "Year 2 to Year 4",
    demandBadge: "Infrastructure Automation",
    foundationalSkills: [
      "Linux terminal fluency, bash scripting, and networking fundamentals",
      "Git version control and automated branch triggers",
      "Docker containerization and image lifecycle management",
      "CI/CD automation with GitHub Actions or Jenkins",
      "Basic cloud infrastructure management on AWS or Azure"
    ],
    recommendedAdditional: [
      "Infrastructure as Code (Terraform)",
      "Kubernetes container orchestration",
      "Monitoring and logging (Prometheus, Grafana, ELK Stack)",
      "Security best practices and secret management (Vault)"
    ],
    exampleProjects: [
      "Automated CI/CD pipeline building, testing, and pushing Docker images",
      "Terraform configuration provisioning a multi-tier AWS VPC network",
      "Grafana dashboard monitoring server metrics with threshold alerts"
    ],
    commonInterviewTopics: [
      "Linux troubleshooting and command-line forensics",
      "CI/CD pipeline design and artifact promotion strategies",
      "Docker networking, volumes, and multi-stage builds",
      "Zero-downtime deployment strategies (Blue-Green, Canary)"
    ]
  },
  {
    id: "path-cloud",
    title: "Cloud Engineer",
    shortDesc: "Design, provision, and maintain scalable cloud architecture, storage, and networking on AWS/Azure/GCP.",
    roadmapYears: "Year 3 & Year 4",
    demandBadge: "Enterprise Cloud",
    foundationalSkills: [
      "Core cloud concepts (IaaS, PaaS, SaaS, Public vs Private cloud)",
      "Virtual networks, VPCs, subnets, gateways, and security groups",
      "Compute instances (EC2), Object storage (S3), and managed databases (RDS)",
      "Cloud Identity and Access Management (IAM) role policies",
      "Linux administration and basic shell scripting"
    ],
    recommendedAdditional: [
      "Cloud provider certifications (e.g. AWS Certified Solutions Architect Associate)",
      "Serverless computing (AWS Lambda, API Gateway)",
      "Cloud cost optimization and well-architected framework",
      "Cloud disaster recovery and backup strategies"
    ],
    exampleProjects: [
      "High-availability auto-scaling web application on AWS EC2 behind an ALB",
      "Serverless image processing pipeline using S3 event triggers and Lambda",
      "Secure multi-account cloud environment with strict IAM policies"
    ],
    commonInterviewTopics: [
      "Designing fault-tolerant multi-region cloud architectures",
      "IAM least-privilege security models",
      "Storage selection trade-offs (Block vs Object vs File vs Database)",
      "Network routing and VPC peering scenarios"
    ]
  },
  {
    id: "path-data",
    title: "Data Analyst / Analytics Engineer",
    shortDesc: "Transform raw data into meaningful business intelligence, predictive metrics, and actionable decisions.",
    roadmapYears: "Year 2 & Year 3",
    demandBadge: "Data & Insights",
    foundationalSkills: [
      "Advanced SQL (Window functions, CTEs, complex joins, aggregations)",
      "Python data manipulation (Pandas, NumPy)",
      "Data visualization tools (PowerBI, Tableau, or Seaborn/Matplotlib)",
      "Descriptive statistics, probability, and hypothesis testing",
      "Spreadsheet mastery (Excel / Google Sheets advanced formulas)"
    ],
    recommendedAdditional: [
      "Data warehousing (Snowflake, BigQuery)",
      "Data transformation tools like dbt (data build tool)",
      "ETL pipeline orchestration",
      "Business domain acumen and executive storytelling"
    ],
    exampleProjects: [
      "Customer retention and churn prediction dashboard",
      "University placement statistics and salary trends visualizer",
      "E-commerce sales performance report with automated monthly insights"
    ],
    commonInterviewTopics: [
      "Complex live SQL coding challenges",
      "Data cleaning, outlier handling, and missing value treatment",
      "Designing KPIs and metrics for product features",
      "Communicating insights to stakeholders without technical jargon"
    ]
  },
  {
    id: "path-aiml",
    title: "AI / Machine Learning Engineer",
    shortDesc: "Develop and deploy machine learning models, neural networks, and generative AI applications.",
    roadmapYears: "Year 3 & Year 4",
    demandBadge: "Next-Gen Technology",
    foundationalSkills: [
      "Strong Python programming and standard scientific libraries",
      "Linear algebra, calculus, probability, and statistical theory",
      "Supervised and unsupervised learning (Scikit-Learn)",
      "Deep Learning frameworks (PyTorch or TensorFlow)",
      "Data preprocessing, feature engineering, and model evaluation metrics"
    ],
    recommendedAdditional: [
      "Natural Language Processing (NLP) and Large Language Models (LLMs)",
      "RAG architecture, vector databases (Pinecone, ChromaDB)",
      "Model deployment via REST APIs (FastAPI) and ONNX runtime",
      "MLOps basics (model tracking with MLflow, versioning)"
    ],
    exampleProjects: [
      "RAG-powered conversational documentation assistant",
      "Computer vision convolutional network for medical image classification",
      "End-to-end sentiment analysis API deployed with Docker"
    ],
    commonInterviewTopics: [
      "Bias-variance trade-off, overfitting, and regularization techniques",
      "Mathematical intuition behind gradient descent and backpropagation",
      "Transformer architecture, self-attention, and tokenization",
      "Model serving latency and evaluation metrics (Precision, Recall, F1, AUC)"
    ]
  }
];

export const careerDisclaimer = {
  title: "Industry Realities & Professional Transparency",
  text: "At HOCROW Education, we believe in honest guidance. Engineering compensation, placement outcomes, and job roles vary widely depending on individual skill depth, economic cycles, company size, interview performance, and geographic location. A high-package career is the natural byproduct of consistent hands-on building, strong computer science foundations, and genuine problem-solving ability over 4 disciplined years — not shortcuts or false promises."
};
