import { useRef, useState } from "react";
import { PROJECTS } from "./data";

const ART = "/images/neon-world.webp";
const OPTIONS = [
  {
    name: "DAS",
    purpose: "AI-assisted dyslexia assessment review",
    headline: (
      <>
        AI-assisted assessment.
        <br />
        Educator-led review.
      </>
    ),
    summary:
      "Review written-assessment error patterns, edit findings and approve the final assessment. Human judgment stays in the loop.",
    tags: ["AI", "Review workflow", "Web"],
  },
  {
    name: "StayOnTrail",
    purpose: "Android task planner with AI task entry",
    headline: (
      <>
        Make a plan.
        <br />
        Stay on your trail.
      </>
    ),
    summary:
      "An Android task planner with AI task entry, focus timers and streaks. Progress grows your in-app forest.",
    tags: ["Android", "Java", "SQLite", "AI"],
  },
  {
    name: "Survivor",
    purpose: "FPGA arcade game on an LED matrix",
    headline: (
      <>
        An arcade game,
        <br />
        built in hardware.
      </>
    ),
    summary:
      "A survival shooter on a 16 × 16 LED display. Custom game logic, physical controls and a CAD enclosure bring the design together.",
    tags: ["FPGA", "Digital logic", "LED matrix"],
  },
  {
    name: "Solar Dehydrator",
    purpose: "Solar-powered food drying",
    headline: (
      <>
        Food drying,
        <br />
        powered by the sun.
      </>
    ),
    summary:
      "A low-cost solar dehydrator exploring heat transfer, airflow and battery-backed operation to reduce post-harvest spoilage.",
    tags: ["Heat transfer", "Solar", "Hardware"],
  },
];
function Arrow({ previous = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d={previous ? "M20 12H5m7-7-7 7 7 7" : "M4 12h15m-7-7 7 7-7 7"} />
    </svg>
  );
}

export default function ArcadeWorld({ onProject, motion }) {
  const [selected, setSelected] = useState(0);
  const [animate, setAnimate] = useState(false);
  const joystick = useRef(null);
  const option = OPTIONS[selected];
  function select(index, pointer = false) {
    const next = (index + OPTIONS.length) % OPTIONS.length;
    if (next === selected) return;
    setAnimate(pointer && motion);
    if (
      pointer &&
      motion &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      joystick.current
        ?.getAnimations()
        .forEach((animation) => animation.cancel());
      joystick.current?.animate(
        [
          { transform: "rotate(0deg)" },
          { transform: `rotate(${next > selected ? 22 : -22}deg)` },
          { transform: "rotate(0deg)" },
        ],
        { duration: 260, easing: "cubic-bezier(.23,1,.32,1)" },
      );
    }
    setSelected(next);
  }
  function keyboard(event) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    let next;
    if (event.key === "ArrowRight") next = selected + 1;
    else if (event.key === "ArrowLeft") next = selected - 1;
    else if (/^[1-4]$/.test(event.key)) next = Number(event.key) - 1;
    else return;
    event.preventDefault();
    select(next);
  }
  return (
    <section
      className="arcade-hero wrap"
      id="home"
      aria-labelledby="portfolio-title"
    >
      <div className="identity">
        <h1 id="portfolio-title">
          BHARATH <span>RAJEEV</span>
        </h1>
        <p>
          Developer working across
          <br />
          software, data and AI.
        </p>
      </div>
      <section
        className="cabinet"
        id="work"
        aria-labelledby="projects-title"
        onKeyDown={keyboard}
      >
        <div className="marquee">
          <h2 id="projects-title">SELECT A PROJECT</h2>
          <p>
            <span className="pixel-dot" aria-hidden="true" />4 projects to
            explore
          </p>
        </div>
        <div className="screen">
          <div className="map">
            <img
              src={ART}
              width="1536"
              height="1024"
              fetchPriority="high"
              alt="An illustrated arcade world: a reading library, forest trail, electronics workshop and solar greenhouse connected by pink paths."
            />
            {OPTIONS.map((item, index) => (
              <button
                className="map-label"
                data-project={index}
                key={item.name}
                aria-pressed={index === selected}
                aria-label={`Select ${item.name}, ${item.purpose}`}
                onClick={(event) => select(index, event.detail !== 0)}
              >
                {index === 3 ? "Solar" : item.name}
              </button>
            ))}
            <span className="art-caption">Illustrated project world</span>
          </div>
          <div className="readout" aria-live="polite" aria-atomic="true">
            <div
              className="readout-content"
              key={selected}
              data-motion={animate}
            >
              <p className="readout-status">PROJECT {selected + 1} / 4</p>
              <h3>{option.name}</h3>
              <p className="purpose">{option.headline}</p>
              <p className="description">{option.summary}</p>
              <div className="project-kind">
                {option.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="readout-actions">
                <button
                  className="project-link"
                  onClick={() => onProject(selected)}
                >
                  Explore project <Arrow />
                </button>
                {PROJECTS[selected].link && (
                  <a
                    className="repo-link"
                    href={PROJECTS[selected].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${option.name} GitHub repository`}
                  >
                    GitHub repo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="selection" role="group" aria-label="Choose a project">
          {OPTIONS.map((item, index) => (
            <button
              className="cartridge"
              data-project={index}
              key={item.name}
              aria-pressed={index === selected}
              onClick={(event) => select(index, event.detail !== 0)}
            >
              <span className="cartridge-art" aria-hidden="true">
                <img src={ART} alt="" width="174" height="116" />
              </span>
              <span>
                <strong>{item.name}</strong>
                <small>{item.purpose}</small>
              </span>
            </button>
          ))}
        </div>
        <div className="deck">
          <div className="deck-left">
            <div className="joystick" aria-hidden="true">
              <i className="stick" ref={joystick} />
            </div>
            <p className="deck-copy">
              <strong>YOUR MOVE.</strong>
              <span>Choose a project, or use ← → and keys 1–4.</span>
            </p>
          </div>
          <div className="deck-right">
            <div className="control prev">
              <button
                className="round-button"
                aria-label="Previous project"
                onClick={(event) => select(selected - 1, event.detail !== 0)}
              >
                <Arrow previous />
              </button>
              <span className="control-label">PREVIOUS</span>
            </div>
            <div className="control">
              <button
                className="round-button"
                aria-label="Next project"
                onClick={(event) => select(selected + 1, event.detail !== 0)}
              >
                <Arrow />
              </button>
              <span className="control-label">NEXT</span>
            </div>
            <div className="volume" aria-hidden="true">
              {Array.from({ length: 8 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <nav className="route-map" aria-label="Explore the portfolio paths">
        <p>Where next?</p>
        <svg
          className="route-lines"
          viewBox="0 0 1000 85"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M500 0V25H125V78M500 25H375V78M500 25H625V78M500 25H875V78" />
        </svg>
        <div className="route-destinations">
          {[
            ["Experience", "experience"],
            ["Toolkit", "skills"],
            ["About me", "about"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              <span className="route-point" aria-hidden="true" />
              <span>{label}</span>
              <span className="route-arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
}
