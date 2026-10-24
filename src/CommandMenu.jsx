import { useEffect, useRef, useState } from "react";

const PROJECT_NAMES = [
  "DAS — Dyslexia assessment tool",
  "StayOnTrail — Android task planner",
  "Survivor — FPGA arcade game",
  "Solar-powered food dehydrator",
];

export default function CommandMenu({
  open,
  onClose,
  onProject,
  onCopy,
  onMotion,
  motion,
}) {
  const dialog = useRef(null);
  const pending = useRef(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (open && !dialog.current.open) {
      dialog.current.showModal();
      dialog.current.querySelector("input").focus();
    }
    if (!open && dialog.current.open) dialog.current.close();
  }, [open]);
  const commands = [
    ...PROJECT_NAMES.map((label, index) => ({
      label,
      group: "PROJECT",
      action: () => onProject(index),
    })),
    ...[
      ["Selected work", "work"],
      ["Experience", "experience"],
      ["About Bharath", "about"],
      ["Contact", "contact"],
    ].map(([label, id]) => ({
      label,
      group: "JUMP TO",
      action: () => {
        window.location.hash = id;
      },
    })),
    { label: "Copy email address", group: "CONTACT", action: onCopy },
    {
      label: "Open GitHub profile",
      group: "EXTERNAL",
      href: "https://github.com/Rajapanreturns",
    },
    {
      label: `Turn motion ${motion ? "off" : "on"}`,
      group: "PREFERENCE",
      action: onMotion,
    },
  ].filter((command) =>
    `${command.label} ${command.group}`
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  function select(command) {
    pending.current = command.action;
    dialog.current.close();
  }
  function handleKeys(event) {
    if (!["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) return;
    const buttons = [...dialog.current.querySelectorAll(".command-result")];
    if (!buttons.length) return;
    const index = buttons.indexOf(document.activeElement);
    if (event.key === "Enter") {
      if (index === -1 && document.activeElement.tagName === "INPUT") {
        event.preventDefault();
        buttons[0].click();
      }
      return;
    }
    event.preventDefault();
    buttons[
      index === -1
        ? event.key === "ArrowDown"
          ? 0
          : buttons.length - 1
        : (index + (event.key === "ArrowDown" ? 1 : -1) + buttons.length) %
          buttons.length
    ].focus();
  }
  return (
    <dialog
      className="command-dialog"
      ref={dialog}
      aria-labelledby="command-title"
      onKeyDown={handleKeys}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      onClose={() => {
        onClose();
        setQuery("");
        const action = pending.current;
        pending.current = null;
        action?.();
      }}
    >
      <div className="command-panel">
        <div className="command-heading">
          <span id="command-title">QUICK ACCESS</span>
          <button
            onClick={() => dialog.current.close()}
            aria-label="Close command menu"
          >
            ESC ×
          </button>
        </div>
        <div className="command-search">
          <span aria-hidden="true">&gt;_</span>
          <input
            autoFocus
            aria-label="Search commands"
            placeholder="Find a project or jump somewhere…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="command-results" aria-label="Commands">
          {commands.map((command) =>
            command.href ? (
              <a
                className="command-result"
                key={command.label}
                href={command.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => dialog.current.close()}
              >
                <span>{command.label}</span>
                <small>{command.group} ↗</small>
              </a>
            ) : (
              <button
                className="command-result"
                key={command.label}
                onClick={() => select(command)}
              >
                <span>{command.label}</span>
                <small>{command.group}</small>
              </button>
            ),
          )}
          {!commands.length && (
            <p className="command-empty">
              No matches. Try “DAS”, “email”, or “experience”.
            </p>
          )}
        </div>
        <div className="command-help">
          ↑ ↓ navigate <span>↵ select</span>
          <span>esc close</span>
          <span aria-live="polite">{commands.length} results</span>
        </div>
      </div>
    </dialog>
  );
}
