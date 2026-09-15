export type Stat = { value: string; label: string };

export type ProjectLink = {
  label: string;
  href: string;
  kind: "primary" | "text";
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type FeaturedProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stats: Stat[];
  stack: string[];
  links: ProjectLink[];
  image: ProjectImage;
  theme: "night" | "mist" | "canvas";
  layout: "stacked" | "split";
  reverse?: boolean;
};

export type MoreProject = {
  name: string;
  description: string;
  stack: string[];
  href: string;
  span: 2 | 3;
  image?: ProjectImage;
};

export const profile = {
  name: "Arnab Singh",
  email: "arnabsingh001@gmail.com",
  linkedin: "https://www.linkedin.com/in/singharnab/",
  github: "https://github.com/singha105",
  resume: "/Arnab_Singh_Resume_2025.pdf",
  location: "Dayton, Ohio",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "paved",
    name: "Paved",
    tagline: "One short claim. A production-ready service.",
    description:
      "An internal developer platform built as a Kubernetes operator. A team commits an 18-line ServiceClaim, and Paved turns it into a canary rollout, autoscaling, network policy, SLO alerts, a dashboard and a runbook. It keeps them that way, and freezes deploys when the error budget runs out.",
    stats: [
      { value: "18", label: "lines of YAML to onboard a service" },
      { value: "7 s", label: "from a committed claim to Ready" },
      { value: "4", label: "burn-rate alerts derived from one SLO" },
    ],
    stack: ["Go", "Kubernetes", "Argo Rollouts", "Argo CD", "Prometheus", "Grafana", "AWS"],
    links: [
      { label: "View on GitHub", href: "https://github.com/singha105/Paved", kind: "text" },
    ],
    image: {
      src: "/projects/paved-grafana.webp",
      alt: "Grafana dashboard Paved generates for a service: request rate, error ratio against the SLO objective, latency percentiles and 70% of the error budget remaining.",
      width: 1440,
      height: 690,
    },
    theme: "night",
    layout: "stacked",
  },
  {
    slug: "webhook-relay",
    name: "webhook-relay",
    tagline: "Every event arrives. Proven, not promised.",
    description:
      "A webhook delivery service in Go: a transactional outbox, Valkey Streams, HMAC-signed payloads and full-jitter retries. Then I killed the workers mid-delivery and counted the duplicates.",
    stats: [
      { value: "~875", label: "events per second ingested on one laptop" },
      { value: "0", label: "duplicates in a 3-minute chaos run with the guard on (10 without)" },
      { value: "6", label: "delivery attempts before the dead-letter queue" },
    ],
    stack: ["Go", "PostgreSQL", "Valkey", "Kubernetes", "Terraform", "Argo CD", "Chaos Mesh", "OpenTelemetry"],
    links: [
      { label: "View on GitHub", href: "https://github.com/singha105/webhook-relay", kind: "text" },
      { label: "Read the postmortems", href: "https://github.com/singha105/webhook-relay/tree/main/docs", kind: "text" },
    ],
    image: {
      src: "/projects/webhook-relay-retry.webp",
      alt: "Terminal output from make demo: six delivery attempts to a receiver returning HTTP 500, with growing jittered gaps, ending in the dead-letter queue.",
      width: 1600,
      height: 643,
    },
    theme: "mist",
    layout: "split",
  },
  {
    slug: "agent-team",
    name: "AgentTeam",
    tagline: "An engineering team made of AI agents.",
    description:
      "Four Claude agents, for backend, frontend, database and DevOps, hand work to each other while you watch. Every run has hard budgets, runs its tools in a container with no network, and replays step by step from the database.",
    stats: [
      { value: "4", label: "agents that delegate to each other" },
      { value: "5", label: "hard ceilings on every delegation tree" },
      { value: "421", label: "backend and frontend tests" },
    ],
    stack: ["Python", "FastAPI", "Claude API", "Docker", "SQLite", "WebSockets", "React", "TypeScript"],
    links: [
      { label: "View on GitHub", href: "https://github.com/singha105/agent-team", kind: "text" },
    ],
    image: {
      src: "/projects/agent-team-room.webp",
      alt: "The AgentTeam studio: four agents named Ada, Ines, Kai and Mira at lit desks, three waiting on the manager and one idle.",
      width: 1500,
      height: 576,
    },
    theme: "night",
    layout: "stacked",
  },
  {
    slug: "mincut-segmentation",
    name: "mincut",
    tagline: "Cut anything out with a few scribbles.",
    description:
      "Scribble red on what to keep and blue on what to drop. The photo becomes a graph, and its minimum cut is the outline. The Edmonds–Karp max-flow solver underneath is written from scratch, not imported.",
    stats: [
      { value: "< 2 s", label: "to segment a marked image" },
      { value: "0", label: "installs. It runs in your browser." },
    ],
    stack: ["Python", "NumPy", "Graph algorithms", "GitHub Actions"],
    links: [
      { label: "Try it live", href: "https://singha105.github.io/mincut-segmentation/", kind: "primary" },
      { label: "View on GitHub", href: "https://github.com/singha105/mincut-segmentation", kind: "text" },
    ],
    image: {
      src: "/projects/mincut-animals.webp",
      alt: "A dog, a hen, a horse and a tiger, each shown as the original photo, with red and blue scribbles, and as the segmented cutout.",
      width: 816,
      height: 966,
    },
    theme: "canvas",
    layout: "split",
    reverse: true,
  },
];

export const moreProjects: MoreProject[] = [
  {
    name: "Financial market dashboard",
    description:
      "Multi-ticker U.S. equities data pulled with yfinance into a normalized MySQL schema, with reproducible Python charts for trends, moving averages and drawdowns.",
    stack: ["Python", "pandas", "yfinance", "MySQL"],
    href: "https://github.com/singha105/financial-market-dashboard",
    span: 3,
    image: {
      src: "/projects/finance-chart.webp",
      alt: "AAPL adjusted close with 50-day and 200-day moving averages and drawdown periods shaded.",
      width: 1200,
      height: 600,
    },
  },
  {
    name: "Secure PHP web app",
    description:
      "Registration, login and profile management with bcrypt password hashing, prepared statements, CSRF tokens and hardened sessions.",
    stack: ["PHP", "MySQL", "Web security"],
    href: "https://github.com/singha105/project2",
    span: 3,
    image: {
      src: "/projects/project2-profile.webp",
      alt: "Profile page of the secure PHP app after a successful login, with Edit Profile, Change Password and Logout actions.",
      width: 1200,
      height: 676,
    },
  },
  {
    name: "Express service on AWS EC2",
    description:
      "A small Node.js health-check service deployed to EC2 with GitHub Actions CI, Jest and Supertest tests, and pm2 in production.",
    stack: ["Node.js", "Express", "AWS EC2", "GitHub Actions"],
    href: "https://github.com/singha105/my-express-app",
    span: 2,
  },
];

export const earlierWork = [
  {
    name: "BloodBank+",
    year: "2025",
    description: "JavaFX blood donation management with MySQL over JDBC, donor search and live stock tracking.",
  },
  {
    name: "Task offloading in fog-enabled IoT",
    year: "2023",
    description: "Actor-critic reinforcement learning that cut latency 7% against baseline offloading schemes.",
  },
  {
    name: "Sales and revenue analytics",
    year: "2023",
    description: "A Power BI dashboard over MySQL, with Prophet forecasting in Python.",
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    org: "Army Base Workshop",
    place: "India",
    period: "Dec 2023 – Feb 2024",
    points: [
      "Designed Power BI dashboards tracking critical COVID-19 medical supplies across military hospitals.",
      "Integrated real-time inventory data from 20+ hospitals over REST APIs, improving procurement visibility by 40%.",
      "Automated command-level reporting in Python with pandas and SQL.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Defence Research and Development Organisation (DRDO)",
    place: "India",
    period: "May – Jul 2023",
    points: [
      "Built an AI facial-recognition system for drones that combined image classification with GPS tracking.",
      "Wrote a real-time detection pipeline in OpenCV and TensorFlow, tuned for accuracy under aerial conditions.",
      "Documented the specifications and connected the models to embedded systems for simulated testing.",
    ],
  },
];

export const skills = [
  { name: "Languages", items: ["Go", "Python", "TypeScript", "JavaScript", "Java", "PHP", "SQL", "Bash"] },
  {
    name: "Cloud and DevOps",
    items: ["Kubernetes", "Docker", "Terraform", "Helm", "Argo CD", "Argo Rollouts", "GitHub Actions", "AWS", "Chaos Mesh"],
  },
  { name: "Observability", items: ["Prometheus", "Grafana", "OpenTelemetry", "k6"] },
  { name: "AI and data", items: ["Claude API", "Multi-agent systems", "TensorFlow", "OpenCV", "pandas", "Power BI"] },
  { name: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Valkey"] },
];

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of Dayton, Ohio",
    result: "GPA 3.7 / 4.0",
    period: "Jan 2025 – Dec 2026",
  },
  {
    degree: "B.Tech Computer Engineering",
    school: "Netaji Subhas University of Technology, Delhi",
    result: "CGPA 7.24 / 10",
    period: "2020 – 2024",
  },
];

export const extras = [
  "~98.2 percentile in JEE Main 2020.",
  "Working toward AWS Solutions Architect – Associate (SAA-C03).",
];
