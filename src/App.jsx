import { useEffect, useRef, useState } from "react";
import { PROJECTS, SKILLS } from "./data";
import "./App.css";
import "./midnight.css";
import CommandMenu from "./CommandMenu";
import AssessmentFlow from "./AssessmentFlow";

const EMAIL = "mailto:rajeevbharath2@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/bharath-rajeev-9a5b40311/";
const GITHUB = "https://github.com/Rajapanreturns";
const CONNECTIONS = [
  {
    name: "Software",
    short: "Build",
    number: "01",
    description: "Software, Data & AI",
    detail:
      "Building AI-powered applications, connecting data pipelines, and turning data into useful tools.",
    icon: "code",
  },
  {
    name: "Data & AI",
    short: "Understand",
    number: "02",
    description: "Data pipelines & AI applications",
    detail:
      "Internship work preparing data with Python and SQL and supporting AI search and retrieval workflows.",
    icon: "data",
  },
  {
    name: "Hardware",
    short: "Connect",
    number: "03",
    description: "Embedded systems & electronics",
    detail:
      "Working with digital logic, sensors, and physical systems to bring software into the real world.",
    icon: "chip",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function Icon({ type }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {type === "code" ? (
          <>
            <path d="m10 10-6 6 6 6m12-12 6 6-6 6M18 6l-4 20" />
          </>
        ) : type === "data" ? (
          <>
            <path d="M5 26h23M8 21v-6m8 6V6m8 15V11" />
            <circle cx="8" cy="12" r="2" />
            <circle cx="16" cy="4" r="2" />
            <circle cx="24" cy="8" r="2" />
          </>
        ) : (
          <>
            <rect x="9" y="9" width="14" height="14" rx="2" />
            <path d="M13 2v7m6-7v7m-6 14v7m6-7v7M2 13h7m-7 6h7m14-6h7m-7 6h7" />
            <rect x="13" y="13" width="6" height="6" />
          </>
        )}
      </g>
    </svg>
  );
}
function ConnectionWidget() {
  const [active, setActive] = useState(0);
  const item = CONNECTIONS[active];
  return (
    <div className={`connection-widget active-${active}`}>
      <div className="widget-top mono">
        <span>
          <span className="status-dot" /> SYSTEM MAP / INTERACTIVE
        </span>
        <span>FIG. 01</span>
      </div>
      <div className="constellation">
        <svg
          className="connection-lines"
          viewBox="0 0 480 320"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="240"
            cy="154"
            r="104"
            stroke="currentColor"
            strokeDasharray="2 7"
          />
          <ellipse
            cx="240"
            cy="154"
            rx="192"
            ry="72"
            transform="rotate(-27 240 154)"
            stroke="currentColor"
          />
          <ellipse
            cx="240"
            cy="154"
            rx="142"
            ry="105"
            transform="rotate(28 240 154)"
            stroke="currentColor"
            strokeDasharray="4 7"
          />
          <path
            className="signal-path"
            d="M82 88 240 154 390 90M240 154l50 118"
            stroke="currentColor"
          />
          <circle
            className="orbit-dot"
            cx="147"
            cy="233"
            r="4"
            fill="currentColor"
          />
          <path
            d="M52 256h12m-6-6v12M409 222h12m-6-6v12"
            stroke="currentColor"
          />
        </svg>
        <div className="core-mark" aria-hidden="true">
          <span>
            b<span className="core-period">.</span>
          </span>
        </div>
        {CONNECTIONS.map((connection, i) => (
          <button
            key={connection.name}
            className={`node node-${i} ${active === i ? "selected" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            aria-label={`Explore ${connection.name}`}
          >
            <Icon type={connection.icon} />
            <span>{connection.name}</span>
          </button>
        ))}
        <span className="diagram-note mono">software ↔ data ↔ hardware</span>
      </div>
      <div className="connection-caption" aria-live="polite" aria-atomic="true">
        <div className="caption-index mono">
          {item.number} / {item.short}
        </div>
        <h3>{item.description}</h3>
        <p>{item.detail}</p>
      </div>
      <div className="widget-bottom mono">
        <span>↖ TAP A NODE TO EXPLORE</span>
        <span>SELECT A DISCIPLINE</span>
      </div>
    </div>
  );
}
function AssessmentPreview() {
  return (
    <div
      className="assessment-preview"
      aria-label="Illustrative educator review interface with fictional sample content"
    >
      <div className="preview-label mono">
        <span>DAS · Literacy assessment tool</span>
        <span>01 / SOFTWARE</span>
      </div>
      <div className="review-window">
        <div className="window-top">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>Assessment review</span>
          <span>✧</span>
        </div>
        <div className="review-inner">
          <div className="review-sidebar">
            <strong>
              das<span> / </span>
            </strong>
            <span className="sidebar-active">Overview</span>
            <span>Assessments</span>
            <span>Review</span>
            <span className="sidebar-bottom">Educator workspace</span>
          </div>
          <div className="review-content">
            <div className="review-heading">
              <span className="mono">WRITING SAMPLE</span>
              <span className="sample-tag">Sample</span>
            </div>
            <h4>Every pattern tells a story.</h4>
            <p className="sample-writing">
              The little <mark>brid</mark> flew
              <br />
              over the <mark>hous</mark>.
            </p>
            <div className="insight-row">
              <span className="insight-icon">✧</span>
              <div>
                <strong>Patterns to explore</strong>
                <p>Letter order · Omitted letters</p>
              </div>
            </div>
            <div className="review-action">
              <span>Ready for educator review</span>
              <span>Review analysis ↗</span>
            </div>
          </div>
        </div>
      </div>
      <span className="visual-footnote mono">
        ILLUSTRATIVE INTERFACE · FICTIONAL SAMPLE
      </span>
    </div>
  );
}
function MobilePreview() {
  return (
    <div className="mobile-preview">
      <div className="preview-label mono">
        <span>StayOnTrail · Android task planner</span>
        <span>02 / MOBILE</span>
      </div>
      <div className="phone-scene">
        <span className="plant-ring ring-one" />
        <span className="plant-ring ring-two" />
        <span className="plant-label mono">
          make room
          <br />
          to grow.
        </span>
        <div className="phone phone-back">
          <img
            src="/images/stayontrail-home.png"
            alt="StayOnTrail app showing today's tasks"
            width="276"
            height="604"
            loading="lazy"
          />
        </div>
        <div className="phone phone-front">
          <img
            src="/images/stayontrail-forest.png"
            alt="StayOnTrail streak view with a growing forest"
            width="269"
            height="601"
            loading="lazy"
          />
        </div>
        <span className="little-star" aria-hidden="true">
          ✳
        </span>
      </div>
      <span className="visual-footnote mono">
        ACTUAL APP SCREENS · STAYONTRAIL
      </span>
    </div>
  );
}
function HardwarePreview() {
  return (
    <div className="hardware-preview">
      <div className="preview-label mono">
        <span>Survivor · FPGA arcade game</span>
        <span>03 / HARDWARE</span>
      </div>
      <div className="hardware-drawing" aria-hidden="true">
        <svg viewBox="0 0 430 230" fill="none">
          <g stroke="currentColor" strokeWidth="1.3">
            <path d="M35 65h50v50h63M35 170h70v-35h43M280 115h57V65h60M280 135h76v35h41" />
            <circle cx="35" cy="65" r="4" />
            <circle cx="35" cy="170" r="4" />
            <circle cx="397" cy="65" r="4" />
            <circle cx="397" cy="170" r="4" />
            <rect x="146" y="48" width="138" height="138" rx="9" />
            <rect x="159" y="61" width="112" height="112" rx="3" />
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${166 + i * 14} 40v8m0 138v8M138 ${68 + i * 14}h8m138 0h8`}
                />
              </g>
            ))}
          </g>
          <text
            x="215"
            y="110"
            textAnchor="middle"
            fill="currentColor"
            fontSize="30"
            fontFamily="monospace"
          >
            FPGA
          </text>
          <text
            x="215"
            y="139"
            textAnchor="middle"
            fill="currentColor"
            fontSize="11"
            fontFamily="monospace"
            letterSpacing="3"
          >
            SURVIVOR
          </text>
          <g fill="currentColor" fontFamily="monospace" fontSize="10">
            <text x="39" y="48">
              INPUT
            </text>
            <text x="340" y="48">
              OUTPUT
            </text>
            <text x="141" y="222">
              FSM → DATAPATH → PLAY
            </text>
          </g>
        </svg>
      </div>
      <span className="visual-footnote mono">
        DIGITAL DESIGN · CONCEPT DIAGRAM
      </span>
    </div>
  );
}
function SolarPreview() {
  return (
    <div className="solar-preview">
      <div className="preview-label mono">
        <span>Solar-powered food dehydrator</span>
        <span>04 / ENERGY</span>
      </div>
      <div className="solar-scene">
        <span className="sun-drawing" aria-hidden="true">
          ☼
        </span>
        <img
          src="/images/solar-collector.png"
          alt="Solar collector design from the project presentation, showing heat absorption and airflow"
          width="308"
          height="219"
          loading="lazy"
        />
        <span className="solar-note mono">
          sunlight in.
          <br />
          possibility out.
        </span>
      </div>
      <span className="visual-footnote mono">
        PROJECT DESIGN · SOLAR COLLECTOR
      </span>
    </div>
  );
}
const PREVIEWS = [
  AssessmentPreview,
  MobilePreview,
  HardwarePreview,
  SolarPreview,
];
const CARD_TITLES = [
  "DAS — Dyslexia Assessment Tool",
  "StayOnTrail — Android Task Planner",
  "Survivor — FPGA Arcade Game",
  "Solar-Powered Food Dehydrator",
];
const CARD_DESCRIPTIONS = [
  "A web app that helps educators identify literacy error patterns and review AI-generated assessment summaries.",
  "An Android app for planning tasks, running focus timers, and tracking streaks—with AI-assisted task creation.",
  "A survival shooter built on an FPGA, with a 16×16 LED display, physical controls, and custom game logic.",
  "A solar-powered food-drying system designed to reduce spoilage, with battery-backed operation and thermal testing.",
];

function ProjectDialog({ projectIndex, onClose }) {
  const ref = useRef(null);
  const project = projectIndex !== null ? PROJECTS[projectIndex] : null;
  useEffect(() => {
    if (projectIndex === null) return;
    const dialog = ref.current;
    dialog.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
      if (dialog.open) dialog.close();
    };
  }, [projectIndex]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      aria-labelledby="project-dialog-title"
    >
      {project && (
        <div className="dialog-content">
          <button
            className="close-dialog"
            onClick={() => ref.current.close()}
            aria-label="Close project details"
            autoFocus
          >
            ×
          </button>
          <span className="eyebrow">PROJECT NOTES / 0{projectIndex + 1}</span>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="dialog-description">{project.description}</p>
          {projectIndex === 3 && (
            <span className="award">
              ✳ Best Project · Designing Energy Systems
            </span>
          )}
          {projectIndex === 0 && <AssessmentFlow />}
          <h3>Selected contributions & technical work</h3>
          <ul>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Built with</h3>
          <div className="tags">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          {project.link ? (
            <a
              className="button button-dark"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Explore the repository <Arrow diagonal />
            </a>
          ) : (
            <p className="project-note">
              A closer look at the work, from problem to implementation.
            </p>
          )}
        </div>
      )}
    </dialog>
  );
}
function GrowthWidget() {
  const [growth, setGrowth] = useState(0);
  const captions = [
    "Every idea starts somewhere.",
    "A little attention goes a long way.",
    "Good things take a little tending.",
    "Keep making room to grow.",
  ];
  return (
    <div className={`growth-widget growth-${growth}`}>
      <div className="growth-top mono">
        <span>PIXEL TERRARIUM</span>
        <span>0{growth + 1} / 04</span>
      </div>
      <div className="growth-art" aria-hidden="true">
        <svg viewBox="0 0 220 150" fill="none">
          <path d="M70 133h80" stroke="#24463f" strokeWidth="2" />
          <path d="M86 100h48v25h-8v8H94v-8h-8z" fill="#bd843d" />
          <path d="M82 98h56v9H82z" fill="#f7b955" />
          <path className="stem" d="M107 100V40h6v60z" fill="#54e3b4" />
          <path
            className="leaf leaf-one"
            d="M107 78H91V70H83V54h16v8h8z"
            fill="#36ba9a"
          />
          <path
            className="leaf leaf-two"
            d="M113 65h16v-8h8V41h-16v8h-8z"
            fill="#71f6c4"
          />
          <path
            className="leaf leaf-three"
            d="M107 45H91v-8h-8V21h16v8h8z"
            fill="#40cbb2"
          />
          <g className="growth-spark" stroke="#f7b955" strokeWidth="2">
            <path d="M156 53h12m-6-6v12M64 30h8m-4-4v8" />
          </g>
        </svg>
      </div>
      <p aria-live="polite">{captions[growth]}</p>
      <button
        className="text-button"
        onClick={() => setGrowth((growth + 1) % 4)}
      >
        {growth === 3 ? "Plant another idea" : "Give it a little care"}{" "}
        <span aria-hidden="true">{growth === 3 ? "↻" : "+"}</span>
      </button>
    </div>
  );
}

export default function PortfolioWebsite() {
  const [projectIndex, setProjectIndex] = useState(null);
  const [commandOpen, setCommandOpen] = useState(false);
  useEffect(() => {
    function shortcut(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (!document.querySelector(".project-dialog[open]"))
          setCommandOpen((value) => !value);
      }
    }
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);
  const [motion, setMotion] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [copied, setCopied] = useState(false);
  const copyTimeout = useRef(null);
  useEffect(() => () => clearTimeout(copyTimeout.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("rajeevbharath2@gmail.com");
      setCopied(true);
      clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = EMAIL;
    }
  }
  return (
    <div className={`portfolio ${motion ? "motion-on" : "motion-off"}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <a
            className="wordmark"
            href="#"
            aria-label="Bharath Rajeev, back to top"
          >
            br<span>_</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
          </nav>
          <button
            className="command-trigger"
            onClick={() => setCommandOpen(true)}
            aria-label="Open command menu"
          >
            <span aria-hidden="true">⌘</span> Quick access <kbd>⌘ / Ctrl K</kbd>
          </button>
          <a className="nav-contact" href="#contact">
            Let’s talk <Arrow diagonal />
          </a>
        </div>
      </header>
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> BHARATH RAJEEV / SINGAPORE
            </div>
            <h1 id="hero-heading">
              From code
              <br />
              to <em>real systems.</em>
            </h1>
            <p className="hero-intro">
              I’m Bharath. I build AI-powered applications, work with data, and
              turn engineering ideas into things you can use.
            </p>
            <p className="hero-detail">
              Computer Science & Design at SUTD.
              <br />
              Exploring the space between AI, data, software, and hardware.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <Arrow />
              </a>
              <a
                className="text-link"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow diagonal />
              </a>
            </div>
          </div>
          <ConnectionWidget />
          <div className="hero-bottom mono">
            <span>
              <span className="status-dot" /> CURRENTLY: DATA & AI ENGINEER
              INTERN @ UIC
            </span>
            <a href="#work">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
          </div>
        </section>
        <section
          id="work"
          className="work-section section-shell"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SELECTED WORK</span>
              <h2 id="work-heading">
                Selected <em>projects.</em>
              </h2>
            </div>
            <p>04 projects / software, mobile, hardware & energy</p>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((project, i) => {
              const Preview = PREVIEWS[i];
              return (
                <article
                  className={`project-card project-${i}`}
                  key={project.title}
                >
                  <button
                    className="project-visual-button"
                    onClick={() => setProjectIndex(i)}
                    aria-label={`Explore ${project.title}`}
                  >
                    <Preview />
                    <span className="visual-open" aria-hidden="true">
                      <Arrow diagonal />
                    </span>
                  </button>
                  <div className="project-info">
                    <div className="project-meta mono">
                      <span>{project.category}</span>
                      {i === 3 && (
                        <span className="award-inline">✳ BEST PROJECT</span>
                      )}
                    </div>
                    <h3>
                      <button onClick={() => setProjectIndex(i)}>
                        {CARD_TITLES[i]} <Arrow diagonal />
                      </button>
                    </h3>
                    <p>{CARD_DESCRIPTIONS[i]}</p>
                    <div className="project-info-bottom">
                      <span className="project-short-title">
                        {
                          [
                            "Node.js · MySQL · OpenAI API",
                            "Java · SQLite · DeepSeek API",
                            "FSM · Datapath · LED matrix",
                            "Solar PV · Sensors · Thermal testing",
                          ][i]
                        }
                      </span>
                      <div className="project-actions">
                        <button
                          className="text-button"
                          onClick={() => setProjectIndex(i)}
                        >
                          Project notes <span aria-hidden="true">+</span>
                        </button>
                        {project.link && (
                          <a
                            className="text-button project-repo-link"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${CARD_TITLES[i]}`}
                          >
                            GitHub repo <Arrow diagonal />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section
          id="experience"
          className="experience-section"
          aria-labelledby="experience-heading"
        >
          <div className="section-shell experience-layout">
            <div>
              <span className="eyebrow">02 / ALONG THE WAY</span>
              <h2 id="experience-heading">
                Experience &amp;
                <br />
                <em>toolkit.</em>
              </h2>
              <p className="section-description">
                Building with teams, learning from people, and putting the
                pieces together.
              </p>
              <a
                className="text-link"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                More on LinkedIn <Arrow diagonal />
              </a>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-date mono">
                  AUG 2026 — PRESENT <span className="status-dot" />
                </div>
                <h3>Data & AI Engineer Intern</h3>
                <p className="timeline-place">
                  UIC Asian Computer Services · Singapore
                </p>
                <p>
                  Preparing data and supporting AI-driven applications: from
                  Python and SQL pipelines to embeddings, retrieval, and NLP
                  workflows.
                </p>
                <div className="tags">
                  <span>Python & SQL</span>
                  <span>Microsoft Fabric</span>
                  <span>Azure OpenAI</span>
                  <span>RAG</span>
                </div>
                <details>
                  <summary>
                    A closer look <span>+</span>
                  </summary>
                  <ul>
                    <li>
                      Prepare, clean, transform, and validate HR datasets using
                      Pandas, NumPy, SQL, and Microsoft Fabric.
                    </li>
                    <li>
                      Support pipelines with Azure Blob Storage, vector
                      databases, and text embeddings.
                    </li>
                    <li>
                      Contribute to intent classification, prompt engineering,
                      and retrieval workflows.
                    </li>
                    <li>
                      Collaborate through Azure DevOps, sprint planning, and
                      version control.
                    </li>
                  </ul>
                </details>
              </article>
              <article className="timeline-item">
                <div className="timeline-date mono">MAY 2026 — AUG 2026</div>
                <h3>Teaching Assistant</h3>
                <p className="timeline-place">Data Driven World · SUTD</p>
                <p>
                  Helped students find their footing in Python, data analysis,
                  visualization, and introductory machine learning through
                  debugging, project consultations, and check-offs.
                </p>
                <div className="tags">
                  <span>Python</span>
                  <span>Data analysis</span>
                  <span>Project mentoring</span>
                </div>
              </article>
            </div>
            <div className="toolbox">
              <span className="eyebrow">THINGS I BUILD WITH</span>
              {SKILLS.map((group) => (
                <details key={group.group}>
                  <summary>
                    {group.group}
                    <span>+</span>
                  </summary>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          id="about"
          className="about-section section-shell"
          aria-labelledby="about-heading"
        >
          <div className="about-main">
            <span className="eyebrow">03 / THE PERSON BEHIND THE PROJECTS</span>
            <h2 id="about-heading">
              A bit <em>about me.</em>
            </h2>
            <p>
              I’m Bharath, a Computer Science and Design undergraduate at the
              Singapore University of Technology and Design.
            </p>
            <p>
              My work spans AI-powered applications, data engineering, mobile
              apps, and physical systems.
              I’m interested in how those disciplines meet—and what we can build
              when they do.
            </p>
            <div className="education-line">
              <span className="education-mark" aria-hidden="true">
                ↗
              </span>
              <div>
                <strong>B.Eng. Computer Science and Design</strong>
                <span>SUTD · CGPA 4.5 / 5.0</span>
              </div>
            </div>
          </div>
          <div className="about-aside">
            <GrowthWidget />
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="section-shell">
            <div className="contact-top">
              <span className="eyebrow">04 / WHAT’S NEXT?</span>
              <span className="contact-spark" aria-hidden="true">
                ✳
              </span>
            </div>
            <h2 id="contact-heading">
              Let’s build
              <br />
              <em>what’s next.</em>
            </h2>
            <div className="contact-bottom">
              <p>
                A project, an opportunity, or an interesting idea?
                <br />
                I’d love to hear about it.
              </p>
              <a className="button button-dark" href={EMAIL}>
                Say hello <Arrow diagonal />
              </a>
            </div>
            <div className="contact-links">
              <a href={EMAIL}>rajeevbharath2@gmail.com</a>
              <button
                className="copy-button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                <span aria-live="polite">
                  {copied ? "Copied ✓" : "Copy ↗"}
                </span>
              </button>
              <span className="contact-link-spacer" />
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <a className="wordmark" href="#" aria-label="Back to top">
          br<span>_</span>
        </a>
        <span>
          © {new Date().getFullYear()} Bharath Rajeev · Made with curiosity.
        </span>
        <button
          className="motion-toggle"
          onClick={() => setMotion(!motion)}
          aria-pressed={motion}
        >
          Motion {motion ? "on" : "off"}{" "}
          <span aria-hidden="true">{motion ? "◉" : "○"}</span>
        </button>
        <a href="#" className="back-top" aria-label="Back to top">
          ↑
        </a>
      </footer>
      {copied && (
        <div className="copy-toast" role="status">
          Email address copied <span aria-hidden="true">✓</span>
        </div>
      )}
      <CommandMenu
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
        onProject={setProjectIndex}
        onCopy={copyEmail}
        onMotion={() => setMotion((value) => !value)}
        motion={motion}
      />
      <ProjectDialog
        projectIndex={projectIndex}
        onClose={() => setProjectIndex(null)}
      />
    </div>
  );
}
