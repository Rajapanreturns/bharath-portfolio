export const PROJECTS = [
  {
    title: "DAS — Dyslexia Error Pattern Analyzer",
    category: "AI-Assisted Web Development",
    icon: "DAS",
    link: "https://github.com/Rajapanreturns/DAS-AI-Portal",
    tools: [
      "Node.js",
      "Express.js",
      "EJS",
      "JavaScript",
      "MySQL",
      "OpenAI API",
      "Jest",
    ],
    description:
      "Team-built educational web application developed in collaboration with the Dyslexia Association of Singapore to analyze written assessments, identify literacy error patterns, and support educators with AI-generated summaries.",
    highlights: [
      "Developed the educator-facing module to review, edit, save, and approve AI-generated assessment analyses.",
      "Implemented RESTful endpoints, validation, and transactional MySQL operations for review and grading workflows.",
      "Integrated Railway-hosted MySQL storage and wrote Jest unit tests for analysis review and approval.",
    ],
  },
  {
    title: "StayOnTrail — Android Productivity App",
    category: "Mobile App Development",
    icon: "APP",
    link: "https://github.com/Rajapanreturns/StayOnTrail",
    tools: ["Java", "Android Studio", "SQLite", "DeepSeek API"],
    description:
      "Forest-themed Android task management app with timers, calendar/list views, streaks, priority logic, and AI-assisted task creation.",
    highlights: [
      "Used SQLite to store task data such as title, deadline, priority, recurrence, and category.",
      "Integrated DeepSeek API to convert natural-language prompts into structured tasks.",
      "Applied Adapter, Template Method, and Observer patterns in Android development.",
    ],
  },
  {
    title: "Survivor — FPGA-Based LED Matrix Arcade Game",
    category: "Digital Design",
    icon: "CPU",
    link: "",
    tools: ["FSM", "Datapath", "LED Matrix", "7-Segment Displays"],
    description:
      "Top-down survival shooter built on a 16×16 LED matrix with custom FSM, datapath design, hardware I/O, and CAD enclosure.",
    highlights: [
      "Designed FSM logic for movement, shooting, collision, enemy spawning, win, and game-over states.",
      "Created datapath with registers, RAM/ROM access, ALU operations, RNG, and LED driver integration.",
      "Integrated buttons, LED matrix, and 7-segment displays for gameplay and feedback.",
    ],
  },
  {
    title: "Solar-Powered Food Dehydrator",
    category: "Sustainable Engineering",
    icon: "SUN",
    link: "https://github.com/Rajapanreturns/Heat-Exchanger",
    tools: ["Solar PV", "Battery Sizing", "Thermal Testing", "Sensors"],
    description:
      "Low-cost solar dehydrator designed to reduce post-harvest spoilage, recognized as Best Project for Designing Energy Systems.",
    highlights: [
      "Calculated energy budget using panel sizing, battery Wh, and peak sun hours.",
      "Integrated solar charge control and battery-backed operation.",
      "Tested temperature, humidity, airflow, and drying performance.",
    ],
  },
];

export const SKILLS = [
  {
    group: "Programming",
    items: [
      "Python",
      "R",
      "Java",
      "C",
      "SQL",
      "OOP",
      "Data Structures & Algorithms",
      "Git",
      "CSS",
      "HTML",
      "LLM API Integration",
    ],
  },
  {
    group: "Data & ML",
    items: [
      "MySQL",
      "Power BI",
      "pandas",
      "NumPy",
      "matplotlib",
      "Statistical Analysis",
      "R",
    ],
  },
  {
    group: "Mobile Development",
    items: [
      "Android Studio",
      "SQLite",
      "REST APIs",
      "RecyclerView",
      "Android Lifecycle",
      "JSON",
    ],
  },
  {
    group: "Embedded / IoT",
    items: [
      "ESP32",
      "Raspberry Pi",
      "Sensors",
      "IoT Telemetry",
      "Hardware I/O",
      "Solar Charge Controllers",
    ],
  },
];
