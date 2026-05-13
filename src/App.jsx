import React from "react";

const PROJECTS = [
  {
    title: "E-commerce Sales and Customer Analysis",
    category: "Data Analytics",
    icon: "DB",
    link: "https://github.com/Rajapanreturns/ecommerce-sales-customer-analysis",
    tools: ["MySQL", "Python", "pandas", "Power BI"],
    description:
      "End-to-end analytics project analyzing retail sales, profitability, customer behavior, product trends, and regional performance.",
    highlights: [
      "Cleaned and transformed raw sales data using Python and pandas.",
      "Designed SQL queries and reusable views for KPI reporting.",
      "Built Power BI dashboards for sales trends, profit margin, and customer segments."
    ]
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
      "Applied Adapter, Template Method, and Observer patterns in Android development."
    ]
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
      "Integrated buttons, LED matrix, and 7-segment displays for gameplay and feedback."
    ]
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
      "Tested temperature, humidity, airflow, and drying performance."
    ]
  }
];

const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "Java", "C", "SQL", "OOP", "Data Structures & Algorithms", "Git", "CSS", "HTML"]
  },
  {
    group: "Data & ML",
    items: [
      "MySQL",
      "Power BI",
      "pandas",
      "NumPy",
      "matplotlib",
      "Linear Regression",
      "Logistic Regression",
      "Random Forests"
    ]
  },
  {
    group: "Mobile Development",
    items: ["Android Studio", "SQLite", "REST APIs", "RecyclerView", "Android Lifecycle", "JSON"]
  },
  {
    group: "Embedded / IoT",
    items: ["ESP32", "Raspberry Pi", "Sensors", "IoT Telemetry", "Hardware I/O", "Solar Charge Controllers"]
  }
];

function runPortfolioTests() {
  console.assert(PROJECTS.length === 4, "Expected exactly 4 projects after removing Terban Village and Cannon.");
  console.assert(
    PROJECTS.every((project) => project.title && project.category && project.description),
    "Every project should have a title, category, and description."
  );
  console.assert(
    PROJECTS.every((project) => Array.isArray(project.tools) && project.tools.length > 0),
    "Every project should list at least one tool."
  );
  console.assert(
    PROJECTS.every((project) => Array.isArray(project.highlights) && project.highlights.length >= 3),
    "Every project should have at least three highlights."
  );
  console.assert(
    PROJECTS.find((project) => project.title.includes("Survivor"))?.link === "",
    "Survivor should not show a project link."
  );
  console.assert(SKILLS.length >= 4, "Expected at least four skill groups.");
  console.assert(
    SKILLS.every((skillGroup) => Array.isArray(skillGroup.items) && skillGroup.items.length > 0),
    "Every skill group should contain skills."
  );
}

runPortfolioTests();

function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p> : null}
    </div>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl ${className}`}>{children}</div>;
}

function TextIcon({ children }) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xs font-bold text-slate-100">
      {children}
    </span>
  );
}

function ButtonLink({ href, children, variant = "primary", external = false }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-300";

  const variantClasses = {
    primary: "bg-sky-400 text-slate-950 hover:bg-sky-300",
    secondary: "bg-white text-slate-950 hover:bg-slate-200",
    outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10"
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="h-full p-6 transition hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-sky-300">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
        </div>
        <TextIcon>{project.icon}</TextIcon>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span key={tool} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            {tool}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2 text-sm text-slate-300">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200"
        >
          View GitHub repository <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </Card>
  );
}

export default function PortfolioWebsite() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_35%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
              Computer Science and Design Undergraduate • SUTD
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Bharath Rajeev</h1>
            <p className="mt-5 text-xl leading-8 text-slate-300">
              I build practical systems across data analytics, Android development, embedded systems, IoT, and sustainable engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="mailto:rajeevbharath2@gmail.com">Email Me</ButtonLink>
              <ButtonLink href="https://www.linkedin.com/in/bharath-rajeev-9a5b40311/" variant="outline" external>
                LinkedIn
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-5">
              <TextIcon>🎓</TextIcon>
              <h3 className="mt-3 font-semibold text-white">Education</h3>
              <p className="mt-2 text-sm text-slate-300">B.Eng. Computer Science and Design, SUTD</p>
              <p className="mt-1 text-sm text-slate-400">CGPA: 4.5 / 5.0</p>
            </Card>

            <Card className="p-5">
              <TextIcon>TA</TextIcon>
              <h3 className="mt-3 font-semibold text-white">Current Role</h3>
              <p className="mt-2 text-sm text-slate-300">Teaching Assistant, Data Driven World</p>
              <p className="mt-1 text-sm text-slate-400">Python, data analysis, visualization, ML</p>
            </Card>

            <Card className="p-5">
              <TextIcon>CS</TextIcon>
              <h3 className="mt-3 font-semibold text-white">Focus Areas</h3>
              <p className="mt-2 text-sm text-slate-300">Data analytics, software, Android, embedded systems, IoT</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          title="Featured Projects"
          subtitle="A focused selection of software, data, and hardware projects showing design, development, testing, and documentation."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionTitle
            title="Technical Skills"
            subtitle="Skills grouped by the roles I am targeting: data analytics, software development, mobile development, and embedded/IoT."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((skillGroup) => (
              <Card key={skillGroup.group} className="bg-slate-900/80 p-5">
                <h3 className="font-semibold text-white">{skillGroup.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionTitle title="Teaching & Mentoring" />
            <p className="mt-3 text-slate-400">
              As a Teaching Assistant for Data Driven World, I support students in Python programming, data analysis, visualization,
              introductory machine learning, and project development.
            </p>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-white">Teaching Assistant — Data Driven World</h3>
            <p className="mt-2 text-sm text-slate-400">SUTD • May 2026 – Present</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>Support Term 4 students in Python programming, debugging, data analysis, visualization, and introductory machine learning.</li>
              <li>Provide project consultation, helping student teams refine ideas and troubleshoot implementation issues.</li>
              <li>Conduct project check-offs to assess students’ understanding of concepts and methods applied in their projects.</li>
            </ul>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© 2026 Bharath Rajeev. Built as a technical portfolio.</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-white" href="mailto:rajeevbharath2@gmail.com">
              Email
            </a>
            <a
              className="hover:text-white"
              href="https://www.linkedin.com/in/bharath-rajeev-9a5b40311/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
