# Bharath Rajeev — Portfolio

A responsive React + Vite portfolio styled as Midnight Lab: graphite panels, cyan and amber accents, a compact project gallery, an interactive discipline diagram, an illustrative DAS workflow, accessible project dialogs, a keyboard command menu, and a pixel terrarium. Survivor is presented as a static project; there is no playable game.

## Run locally

Use a Node.js version supported by Vite 8, then run:

```sh
npm ci
npm run dev
```

For a production build:

```sh
npm run build
npm run preview
```

The production output is `dist/`. The Vercel project uses its Vite preset, `npm run build`, and the `dist` output directory.

## Editing

- `src/data.js`: project descriptions, contributions, and skills, preserved from the original portfolio.
- `src/App.jsx`: page sections, illustration components, and interactive widgets.
- `src/App.css`: foundational component layout and responsive styles.
- `src/midnight.css`: Midnight Lab theme, compact layout, and responsive refinements.
- `src/CommandMenu.jsx`: searchable command menu (Command+K / Control+K).
- `src/AssessmentFlow.jsx`: illustrative Analyze / Review / Approve workflow.
- `src/index.css`: foundational styles.
- `public/images/`: project images described below.

The interactive diagram and illustrative workflow use buttons with selected states. The command menu supports search, arrow-key navigation, Enter selection, and Escape dismissal. Project notes open in native modal dialogs with focus containment and Escape dismissal. Animations respect the system reduced-motion preference and can also be disabled with the footer's Motion control. The email Copy button uses the Clipboard API, with a mailto fallback when unavailable. No new runtime dependencies were added.

## Visual asset provenance

- `stayontrail-home.png` and `stayontrail-forest.png`: actual app images extracted from the public [StayOnTrail poster](https://github.com/Rajapanreturns/StayOnTrail/blob/main/Stay%20On%20Trail%20Poster.pdf).
- `solar-collector.png`: collector design extracted from the public [Heat-Exchanger presentation](https://github.com/Rajapanreturns/Heat-Exchanger/blob/main/Solar%20Oven/PPT.pdf).
- The DAS card is an original illustrative interface with fictional example content, explicitly labeled on the card. It is not an actual application screenshot or assessment result.
- The Survivor card is an original static concept diagram, not a screenshot or game simulation.
- The interactive diagram, plant, and favicon are local SVG/CSS artwork.

## Verification

- Production build completed successfully.
- Midnight Lab browser checks covered desktop and 320 / 390 / 768 pixel layouts. No horizontal page overflow was observed at the measured narrow widths.
- All four project dialogs were opened and dismissed; the initial focus is placed on the close button.
- The original topic selector and plant progression were preserved. Midnight Lab checks covered workflow-stage selection; command search, empty results, automatic search focus, arrow-key navigation, Enter selection, section jumps, project opening, and Escape dismissal.
- Command-menu email copy displayed its confirmation toast. Command-menu Motion off disabled the animated signal path.
- All three project images loaded successfully.

Dependencies are unchanged from the original repository. The existing dependency audit is separate from this visual redesign.
