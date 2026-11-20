import { useEffect, useRef, useState } from "react";
import { PROJECTS, SKILLS } from "./data";
import ArcadeWorld from "./ArcadeWorld";
import AssessmentFlow from "./AssessmentFlow";
import CommandMenu from "./CommandMenu";
import "./arcade-world.css";
import "./neon-portfolio.css";

const EMAIL = "rajeevbharath2@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/bharath-rajeev-9a5b40311/";
const GITHUB = "https://github.com/Rajapanreturns";
const NAMES = ["DAS", "StayOnTrail", "Survivor", "Fire Record Atlas"];
const PURPOSES = [
  "AI-assisted dyslexia assessment review",
  "Android task planning with AI",
  "An FPGA arcade game",
  "Satellite fire data & harmonization",
];
const DESTINATIONS = [
  ["Projects", "work"],
  ["Experience", "experience"],
  ["Toolkit", "skills"],
  ["About", "about"],
  ["Contact", "contact"],
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
        strokeWidth="1.6"
      />
    </svg>
  );
}
function PixelMark() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 2h16v6h6v16h-6v6H8v-6H2V8h6zm0 10v8h5v5h6v-5h5v-8h-5V7h-6v5z"
      />
    </svg>
  );
}
function PathDivider({ branch = false }) {
  return (
    <div
      className={`path-divider ${branch ? "path-divider-branch" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1000 110" preserveAspectRatio="none">
        <path d={branch ? "M740 0v34H250v76M250 58H70" : "M250 0v35H740v75"} />
        <rect x={branch ? "243" : "733"} y="92" width="14" height="14" />
      </svg>
    </div>
  );
}
function SkillGlyph({ type }) {
  const paths = [
    "M12 6 4 16l8 10M24 6l8 10-8 10M21 3l-6 26",
    "M5 24h5V14H5zM15 24h5V8h-5zM25 24h5V3h-5z",
    "M9 3h18v28H9zM15 27h6M14 7h8",
    "M8 8h20v20H8zM13 13h10v10H13zM12 2v6M24 2v6M12 28v6M24 28v6M2 12h6M2 24h6M28 12h6M28 24h6",
  ];
  return (
    <svg
      viewBox="0 0 36 36"
      width="36"
      height="36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d={paths[type]} />
    </svg>
  );
}
function HardwareDiagram() {
  return (
    <div className="hardware-proof">
      <svg
        viewBox="0 0 520 210"
        role="img"
        aria-label="Hardware architecture: physical controls connect to the FSM and datapath, which drive the LED matrix and seven-segment display."
      >
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="65" width="110" height="80" />
          <rect x="193" y="30" width="132" height="150" />
          <rect x="398" y="65" width="110" height="80" />
          <path d="M120 105h73M325 105h73M193 105h132" />
        </g>
        <g
          fill="currentColor"
          fontFamily="DM Sans,sans-serif"
          textAnchor="middle"
          fontSize="14"
        >
          <text x="65" y="98">
            Physical
          </text>
          <text x="65" y="119">
            controls
          </text>
          <text x="259" y="74">
            FSM
          </text>
          <text x="259" y="141">
            Datapath
          </text>
          <text x="453" y="98">
            LED matrix
          </text>
          <text x="453" y="119">
            & displays
          </text>
        </g>
      </svg>
      <p>System architecture · FPGA project</p>
    </div>
  );
}

function ProjectDialog({ projectIndex, onClose }) {
  const ref = useRef(null);
  const project = projectIndex !== null ? PROJECTS[projectIndex] : null;
  useEffect(() => {
    if (projectIndex === null) return;
    const dialog = ref.current;
    if (!dialog.open) dialog.showModal();
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
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      aria-labelledby="project-dialog-title"
    >
      {project && (
        <div className="dialog-content">
          <div className="dialog-bar">
            <span>Project details</span>
            <button
              onClick={() => ref.current.close()}
              aria-label="Close project details"
              autoFocus
            >
              Close <span aria-hidden="true">×</span>
            </button>
          </div>
          <h2 id="project-dialog-title">{NAMES[projectIndex]}</h2>
          <p className="dialog-purpose">{PURPOSES[projectIndex]}</p>
          <p className="dialog-description">{project.description}</p>
          {projectIndex === 0 && <AssessmentFlow />}
          {projectIndex === 1 && (
            <figure className="project-screens">
              <div>
                <img
                  src="/images/stayontrail-home.png"
                  alt="StayOnTrail home screen showing today's tasks"
                  width="276"
                  height="604"
                />
                <img
                  src="/images/stayontrail-forest.png"
                  alt="StayOnTrail streak view with a growing forest"
                  width="269"
                  height="601"
                />
              </div>
              <figcaption>
                Actual app screens · Task planning and the streak forest
              </figcaption>
            </figure>
          )}
          {projectIndex === 2 && <HardwareDiagram />}
          {projectIndex === 3 && (
            <figure className="atlas-proof">
              <img
                src="/images/fire-record-atlas.png"
                alt="Fire Record Atlas home screen showing a globe of March fire detections, nine study regions and a seasonality chart"
                width="1440"
                height="900"
              />
              <figcaption>
                Fire Record Atlas · Global hotspots and seasonal patterns
              </figcaption>
            </figure>
          )}
          <h3>Contributions & technical work</h3>
          <ul className="contribution-list">
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
          {project.link && (
            <div className="project-actions">
              <a
                className="solid-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub repository <Arrow diagonal />
              </a>
              {project.demo && (
                <a
                  className="solid-link"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live atlas <Arrow diagonal />
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
function PixelGarden() {
  const [growth, setGrowth] = useState(0);
  return (
    <div className={`pixel-garden garden-${growth}`}>
      <div className="garden-top">
        <span>Pixel garden</span>
        <span>{growth + 1} / 4</span>
      </div>
      <svg
        viewBox="0 0 260 190"
        role="img"
        aria-label={`Pixel plant, growth stage ${growth + 1} of 4`}
      >
        <path d="M35 159h190" stroke="#52334c" strokeWidth="2" />
        <path d="M97 126h66v28h-9v9h-48v-9h-9z" fill="#bd5085" />
        <path d="M91 121h78v13H91z" fill="#ff76b8" />
        <g className="garden-stem">
          <path d="M126 125V47h8v78z" fill="#79d9bd" />
          <path
            className="garden-leaf-one"
            d="M126 98h-21V87H94V66h21v11h11z"
            fill="#59ad9d"
          />
          <path
            className="garden-leaf-two"
            d="M134 78h21V67h11V46h-21v11h-11z"
            fill="#9ce8c2"
          />
          <path
            className="garden-leaf-three"
            d="M126 54h-21V43H94V22h21v11h11z"
            fill="#7cdeb9"
          />
        </g>
        <g className="garden-bloom" fill="#ffd4e9">
          <path d="M119 13h20v8h8v20h-8v8h-20v-8h-8V21h8z" />
          <path fill="#f5a7ce" d="M123 25h12v12h-12z" />
        </g>
      </svg>
      <p aria-live="polite">
        {
          [
            "A seedling, for now.",
            "A new leaf.",
            "Room for one more.",
            "Fully grown. Start again?",
          ][growth]
        }
      </p>
      <button
        className="garden-button"
        onClick={() => setGrowth((value) => (value + 1) % 4)}
      >
        {growth === 3 ? "Plant again" : "Water the plant"}
        <span aria-hidden="true">{growth === 3 ? "↻" : "+"}</span>
      </button>
    </div>
  );
}

export default function PortfolioWebsite() {
  const [projectIndex, setProjectIndex] = useState(null);
  const [commandOpen, setCommandOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [motion, setMotion] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [copied, setCopied] = useState(false);
  const copyTimeout = useRef(null);
  useEffect(() => () => clearTimeout(copyTimeout.current), []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    DESTINATIONS.forEach(([, id]) => {
      const target = document.getElementById(id);
      if (target) observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function preferenceChanged(event) {
      if (event.matches) setMotion(false);
    }
    preference.addEventListener("change", preferenceChanged);
    function shortcut(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (!document.querySelector(".project-dialog[open]"))
          setCommandOpen((value) => !value);
      }
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", shortcut);
    return () => {
      window.removeEventListener("keydown", shortcut);
      preference.removeEventListener("change", preferenceChanged);
    };
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }
  return (
    <div className={`portfolio ${motion ? "motion-on" : "motion-off"}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a
            className="site-wordmark"
            href="#home"
            aria-label="Bharath Rajeev, back to top"
          >
            <PixelMark />
            <span>Bharath Rajeev</span>
          </a>
          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            id="main-navigation"
            aria-label="Main navigation"
          >
            {DESTINATIONS.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="command-trigger"
              onClick={() => setCommandOpen(true)}
              aria-label="Open quick access"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="6" />
                <path d="m15 15 6 6" />
              </svg>
              <kbd>⌘ / Ctrl K</kbd>
            </button>
            <button
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <ArcadeWorld onProject={setProjectIndex} motion={motion} />
        <section
          className="experience-section section-shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="experience-intro">
            <div className="section-heading">
              <span className="section-node" aria-hidden="true" />
              <h2 id="experience-title">Experience</h2>
            </div>
            <p className="section-lead">
              Working with data.
              <br />
              Learning with people.
            </p>
            <div className="world-window forest-window" aria-hidden="true">
              <img
                src="/images/neon-world.webp"
                alt=""
                width="1536"
                height="1024"
                loading="lazy"
              />
            </div>
            <a
              className="inline-link"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              More on LinkedIn <Arrow diagonal />
            </a>
          </div>
          <div className="experience-log">
            <article className="experience-entry">
              <p className="entry-date">Aug 2026 — Present</p>
              <h3>Data & AI Engineer Intern</h3>
              <p className="entry-place">
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
              <details className="work-details">
                <summary>
                  A closer look<span aria-hidden="true">+</span>
                </summary>
                <ul>
                  <li>
                    Prepare, clean, transform, and validate HR datasets using
                    Pandas, NumPy, SQL, and Microsoft Fabric.
                  </li>
                  <li>
                    Support pipelines with Azure Blob Storage, vector databases,
                    and text embeddings.
                  </li>
                  <li>
                    Contribute to intent classification, prompt engineering, and
                    retrieval workflows.
                  </li>
                  <li>
                    Collaborate through Azure DevOps, sprint planning, and
                    version control.
                  </li>
                </ul>
              </details>
            </article>
            <article className="experience-entry">
              <p className="entry-date">May 2026 — Aug 2026</p>
              <h3>Teaching Assistant</h3>
              <p className="entry-place">Data Driven World · SUTD</p>
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
        </section>
        <PathDivider />
        <section
          className="toolkit-section section-shell"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="section-heading">
            <span className="section-node" aria-hidden="true" />
            <h2 id="skills-title">Toolkit</h2>
            <p>
              From the data pipeline
              <br />
              to the physical interface.
            </p>
          </div>
          <div className="inventory">
            {SKILLS.map((group, index) => (
              <article className="inventory-group" key={group.group}>
                <div className="inventory-title">
                  <SkillGlyph type={index} />
                  <h3>{group.group}</h3>
                </div>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="toolkit-foot">
            <span>Software, data, mobile, and physical systems.</span>
            <a className="inline-link" href="#work">
              Explore the work <Arrow />
            </a>
          </div>
        </section>
        <PathDivider branch />
        <section
          className="about-section section-shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-copy">
            <div className="section-heading">
              <span className="section-node" aria-hidden="true" />
              <h2 id="about-title">About me</h2>
            </div>
            <p className="about-introduction">
              I’m Bharath, a Computer Science and Design undergraduate at the
              Singapore University of Technology and Design.
            </p>
            <p>
              My work spans AI-powered applications, data engineering, mobile
              apps, and physical systems. I’m interested in how those
              disciplines meet, and what we can build when they do.
            </p>
            <div className="education">
              <span className="education-pixel" aria-hidden="true">
                <PixelMark />
              </span>
              <div>
                <h3>B.Eng. Computer Science and Design</h3>
                <p>SUTD · CGPA 4.38 / 5.0</p>
              </div>
            </div>
          </div>
          <aside className="about-garden" aria-label="Interactive pixel garden">
            <PixelGarden />
          </aside>
        </section>
        <PathDivider />
        <section
          className="contact-section section-shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-panel">
            <div className="contact-heading">
              <div className="section-heading">
                <span className="section-node" aria-hidden="true" />
                <h2 id="contact-title">Get in touch.</h2>
              </div>
              <p>
                A project, an opportunity, or an interesting idea?
                <br />
                I’d love to hear about it.
              </p>
            </div>
            <div className="contact-terminal">
              <a className="email-address" href={`mailto:${EMAIL}`}>
                {EMAIL}
                <Arrow diagonal />
              </a>
              <div className="contact-actions">
                <a className="solid-link" href={`mailto:${EMAIL}`}>
                  Send an email <Arrow diagonal />
                </a>
                <button
                  className="outline-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  <span aria-live="polite">
                    {copied ? "Copied" : "Copy address"}
                  </span>
                </button>
              </div>
            </div>
            <div className="contact-social">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
                <Arrow diagonal />
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
                <Arrow diagonal />
              </a>
              <a href="#home">
                <span>Back to the arcade</span>
                <span aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <a className="footer-mark" href="#home" aria-label="Back to top">
          <PixelMark />
        </a>
        <p>© {new Date().getFullYear()} Bharath Rajeev</p>
        <button
          className="motion-toggle"
          aria-pressed={motion}
          onClick={() => setMotion((value) => !value)}
        >
          Motion {motion ? "on" : "off"}
          <span aria-hidden="true" className={motion ? "toggle-on" : ""} />
        </button>
        <a className="footer-top" href="#home">
          Back to top ↑
        </a>
      </footer>
      {copied && (
        <div className="copy-toast" role="status">
          Email address copied
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
