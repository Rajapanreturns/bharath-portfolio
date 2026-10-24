import { useState } from "react";
const STAGES = [
  {
    label: "Analyze",
    text: "AI suggests a possible letter-order pattern in “brid”. This is fictional sample content.",
  },
  {
    label: "Review",
    text: "An educator checks the suggested pattern and edits the analysis before it is saved.",
  },
  {
    label: "Approve",
    text: "The educator approves the reviewed assessment. Human review stays part of the workflow.",
  },
];
export default function AssessmentFlow() {
  const [stage, setStage] = useState(0);
  return (
    <div className="assessment-flow">
      <span className="mono flow-label">
        EXPLORE THE WORKFLOW / ILLUSTRATIVE
      </span>
      <div className="flow-stages">
        {STAGES.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setStage(i)}
            aria-pressed={stage === i}
          >
            <span className="stage-num">0{i + 1}</span>
            {item.label}
            <span aria-hidden="true">{i < 2 ? "→" : "✓"}</span>
          </button>
        ))}
      </div>
      <p aria-live="polite">{STAGES[stage].text}</p>
    </div>
  );
}
