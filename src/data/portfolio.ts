export const profile = {
  name: "Manjiri Kinage",
  initials: "MK",
  role: "Software Developer",
  titles: ["Java Developer", "Python Developer", "Full Stack Developer", "Backend Engineer", "AI Developer"],
  tagline:
    "Building scalable software, AI-powered applications, secure backend systems, and user-friendly digital experiences.",
  location: "Pune, Maharashtra, India",
  email: "manjirikinage2005@gmail.com",
  phone: "+91-9146841254",
  github: "https://github.com/ManjiriKinage",
  linkedin: "https://www.linkedin.com/in/manjiri-kinage/",
  resume: "/resume.pdf",
  summary:
    "Full-Stack Developer with hands-on experience building production-ready web applications using Python, Java, Flask, and Spring Boot. I design clean architectures, ship REST APIs, and build complete full-stack applications — from vulnerability management platforms to AI-powered fitness apps.",
};

export const stats = [
  { label: "BCA CGPA", value: "9.6", suffix: "/10" },
  { label: "MCA CGPA", value: "9.2", suffix: "/10" },
  { label: "MAH MCA CET", value: "98.38", suffix: "%ile" },
  { label: "Hackathons", value: "15", suffix: "+" },
];

export const highlights = [
  { title: "Software Development", desc: "End-to-end delivery from requirements to production." },
  { title: "Backend Engineering", desc: "REST APIs, data models, and service architecture." },
  { title: "Problem Solving", desc: "DSA fundamentals applied to real-world constraints." },
  { title: "Hackathons", desc: "Top-4 & Top-10 national finishes. Ship under pressure." },
  { title: "Leadership", desc: "Placement & project coordinator for 120+ students." },
  { title: "Continuous Learning", desc: "AI, systems, and modern web — always shipping." },
];

export const skills = {
  Languages: ["Java", "Python", "JavaScript", "C"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Spring Boot", "Flask", "REST API", "Hibernate", "JDBC"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  "AI & Data": ["Scikit-Learn", "Pandas", "NumPy", "Streamlit"],
  Tools: ["Git", "GitHub", "VS Code", "Power BI"],
};

export const timeline = [
  { year: "2022", title: "Started BCA", desc: "Foundations in CS at MES Abasaheb Garware College." },
  { year: "2023", title: "Learned C & Java", desc: "OOP, DSA, and first small applications." },
  { year: "2024", title: "Java Internship @ CodSoft", desc: "Shipped Chat App & Banking System." },
  { year: "2024", title: "Food Donation Platform", desc: "Location-based matching, ~25% logistics reduction." },
  { year: "2025", title: "BCA First Rank Holder", desc: "Graduated with CGPA 9.6/10." },
  { year: "2025", title: "Started MCA", desc: "PES Modern College of Engineering, CET 98.38%ile." },
  { year: "2026", title: "HackSpark — Top 4", desc: "Built NetScan, vulnerability management platform." },
  { year: "2026", title: "HackOverflow — Top 10", desc: "OmniX: AI agent for embedded systems." },
  { year: "2026", title: "FitMe & Expense Tracer", desc: "AI + finance full-stack applications." },
];

export const experience = [
  {
    role: "Java Developer Intern",
    company: "CodSoft",
    period: "Jul 2024 – Aug 2024",
    location: "Remote",
    bullets: [
      "Delivered 2 production GUI apps: Chat Application & Banking System using Core/Advanced Java + Swing.",
      "Applied OOP (inheritance, polymorphism, encapsulation) for modular, reusable architecture.",
      "Collaborated in Agile with code reviews and peer feedback — shipped on schedule.",
    ],
    stack: ["Java", "Swing", "OOP", "Agile"],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  stack: string[];
  features: string[];
  problem: string;
  challenges: string[];
  solutions: string[];
  lessons: string[];
  future: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  year: string;
  team: string;
};

export const projects: Project[] = [
  {
    slug: "netscan",
    name: "NetScan",
    tagline: "Cybersecurity Vulnerability Management Platform",
    summary:
      "Browser-based vulnerability management platform with automated network discovery, service fingerprinting, and AI-powered remediation.",
    stack: ["Python", "Flask", "PostgreSQL", "Nmap"],
    features: [
      "Network Discovery",
      "Open Port Detection",
      "Service Fingerprinting",
      "CVE + NVD Analysis",
      "AI Remediation Assistant",
      "Risk Assessment",
      "PDF Reports",
    ],
    problem:
      "Security teams need to triage vulnerabilities across hundreds of devices with limited manual bandwidth. NetScan automates scanning, enriches findings with CVE data, and prescribes fixes.",
    challenges: [
      "Efficient scanning across 250+ devices without blocking the UI.",
      "Correlating Nmap output with CVE / NVD data at scale.",
      "Turning raw scan data into actionable remediation.",
    ],
    solutions: [
      "Multi-threaded Nmap integration with real-time progress streaming.",
      "Structured CVE lookup pipeline with device-wise risk prioritization.",
      "AI remediation assistant that cut manual remediation time ~30%.",
    ],
    lessons: [
      "Backend concurrency patterns in Python.",
      "Designing schemas for security telemetry.",
      "Prompt design for reliable remediation output.",
    ],
    future: ["Agent-based continuous scanning", "SSO + RBAC", "Slack/Jira integrations"],
    github: "https://github.com/ManjiriKinage",
    featured: true,
    year: "Feb 2026",
    team: "4",
  },
  {
    slug: "fitme",
    name: "FitMe",
    tagline: "AI-assisted Fitness & Calorie Tracking",
    summary:
      "Full-stack fitness platform for real-time calorie tracking, workouts, and long-term progress toward health goals.",
    stack: ["React", "Flask", "Supabase", "Python"],
    features: ["Calorie Tracking", "Workout Logging", "Auth", "Dashboard", "Nutrition", "Progress"],
    problem: "Most fitness apps are noisy. FitMe focuses on the daily loop: log, learn, improve.",
    challenges: ["Realtime sync", "Clean nutrition data model", "Fast mobile UX"],
    solutions: ["Supabase realtime + row-level security", "Normalized food schema", "Responsive React dashboard"],
    lessons: ["Designing for the daily-use loop", "Auth patterns with Supabase"],
    future: ["ML meal recognition", "Wearable sync"],
    github: "https://github.com/ManjiriKinage",
    featured: true,
    year: "Jan 2026",
    team: "2",
  },
  {
    slug: "expense-tracer",
    name: "Expense Tracer",
    tagline: "Personal Finance Management",
    summary:
      "Spring Boot web app to track spending, categorize expenses, set budgets, and visualize financial patterns.",
    stack: ["Java", "Spring Boot", "MySQL"],
    features: ["Expense Tracking", "Budgets & Alerts", "Analytics", "CSV/PDF Export", "Reports"],
    problem: "People need a simple, honest ledger — not another neobank.",
    challenges: ["Clean domain model", "Report performance", "Export fidelity"],
    solutions: ["Layered Spring architecture", "Indexed queries + aggregations", "PDF/CSV export pipeline"],
    lessons: ["Spring Boot best practices", "Report generation patterns"],
    future: ["Bank statement import", "Forecasting"],
    github: "https://github.com/ManjiriKinage",
    featured: true,
    year: "May 2026",
    team: "Solo",
  },
  {
    slug: "crime-analytics",
    name: "Crime Analytics Dashboard",
    tagline: "Law Enforcement Analysis Tool",
    summary:
      "Crime records management with officer authentication and an interactive analytics dashboard for law enforcement.",
    stack: ["Python", "Streamlit", "Plotly", "MySQL"],
    features: ["Authentication", "CRUD Records", "5+ Visualizations", "Risk Analysis", "Dashboard"],
    problem: "Turning raw crime records into decisions on the ground.",
    challenges: ["Modular architecture", "Fast filtering", "Actionable risk indicators"],
    solutions: ["Separate DB / analytics / UI modules", "Vectorized Pandas ops", "Safe/Moderate/High indicators"],
    lessons: ["Streamlit at scale", "Data storytelling"],
    future: ["Predictive hotspots", "Role-based access"],
    github: "https://github.com/ManjiriKinage",
    featured: true,
    year: "May 2026",
    team: "Solo",
  },
  {
    slug: "food-donation",
    name: "Food Donation Platform",
    tagline: "Connecting donors with recipients",
    summary: "Web platform with a location-based matching algorithm that reduced delivery logistics overhead by ~25%.",
    stack: ["Python", "Web"],
    features: ["Matching Algorithm", "Donation Management", "Location Services"],
    problem: "Food waste is a logistics problem as much as a supply problem.",
    challenges: ["Matching quality", "Location accuracy", "UX for two audiences"],
    solutions: ["Distance-weighted matching", "Geocoding pipeline", "Role-specific flows"],
    lessons: ["Designing multi-sided products"],
    future: ["Mobile app", "Volunteer routing"],
    github: "https://github.com/ManjiriKinage",
    year: "2025",
    team: "2",
  },
];

export const hackathons = [
  {
    name: "HackSpark",
    result: "Top 4 — National Level",
    project: "NetScan",
    desc: "Built a network vulnerability assessment platform for automated security scanning.",
  },
  {
    name: "HackOverflow",
    result: "Top 10 — National Level",
    project: "OmniX",
    desc: "AI agent for embedded systems with code generation and OTA deployment to ESP devices.",
  },
];

export const achievements = [
  { title: "First Rank Holder", detail: "BCA — CGPA 9.6/10", org: "MES Abasaheb Garware College" },
  { title: "98.38 Percentile", detail: "MAH MCA CET 2025", org: "Top statewide entrance rank" },
  { title: "Top 4 — HackSpark", detail: "National Level Hackathon", org: "NetScan" },
  { title: "Top 10 — HackOverflow", detail: "National Level Hackathon", org: "OmniX" },
  { title: "Placement Coordinator", detail: "120+ students", org: "PES Modern College of Engineering" },
  { title: "Project Coordinator", detail: "Cross-team collaboration", org: "PES Modern College of Engineering" },
];

export const certificates = [
  { name: "The Complete Python Bootcamp: Zero to Hero", issuer: "Udemy" },
  { name: "Ask Questions to Make Data-Driven Decisions", issuer: "Google" },
  { name: "Foundations: Data, Data, Everywhere", issuer: "Google" },
  { name: "Problem Solving (Basic)", issuer: "HackerRank" },
  { name: "Basic & Advanced C Programming", issuer: "Microcomm Infotech" },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/hackathons", label: "Hackathons" },
  
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;
