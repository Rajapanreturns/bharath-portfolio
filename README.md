# Bharath Rajeev — Portfolio

A React + Vite portfolio built around the approved Neon Arcade world. An original illustrated map connects four projects, while branching pixel paths lead into experience, toolkit, education, and contact. Text and controls are HTML; the illustration is decorative.

## Run locally

Use a Node.js version supported by Vite 8:

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

Production output is `dist/`. The existing Vercel project uses the Vite preset, `npm run build`, and `dist`.

## Editing

- `src/data.js`: preserved project descriptions, contributions, technologies, and skills.
- `src/ArcadeWorld.jsx`: illustrated project selector, keyboard controls, and section routes.
- `src/App.jsx`: navigation, experience, toolkit, education, contact, garden, and project dialogs.
- `src/arcade-world.css`: approved arcade world composition and responsive layout.
- `src/neon-portfolio.css`: full portfolio sections, dialogs, navigation, and responsive styles.
- `src/index.css` and `src/fonts.css`: shared reset and self-hosted fonts.
- `src/CommandMenu.jsx`: searchable Command+K / Control+K menu.
- `src/AssessmentFlow.jsx`: explicitly illustrative Analyze / Review / Approve workflow.

Earlier theme files are retained but are not imported by the current app.

## Interactions and accessibility

The project map, cartridge buttons, and previous/next controls select the same four projects. Left/right arrows switch projects only while focus is inside the cabinet; keyboard updates are immediate. Project dialogs use native modal focus containment and Escape dismissal. Survivor is a static hardware project with no playable game and no repository link.

The command menu supports search, arrow-key navigation, Enter, and Escape. Section navigation uses normal anchors, with a compact menu on phones. Email copy falls back to opening an email draft if clipboard access fails. The pixel garden progresses through four stages. Motion respects the system reduced-motion preference and the footer toggle.

## Assets

- `public/images/neon-world.webp`: original AI-generated pixel landscape from the approved Neon remix prototype; optimized to approximately 381 KB. Decorative artwork, not a project screenshot.
- `public/fonts/`: locally served DM Sans and Pixelify Sans font files, carried over from the approved prototype.
- `stayontrail-home.png` and `stayontrail-forest.png`: actual app images from the public [StayOnTrail poster](https://github.com/Rajapanreturns/StayOnTrail/blob/main/Stay%20On%20Trail%20Poster.pdf).
- `solar-collector.png`: collector design from the public [Heat-Exchanger presentation](https://github.com/Rajapanreturns/Heat-Exchanger/blob/main/Solar%20Oven/PPT.pdf).
- The DAS workflow is an original illustrative interface with fictional example content, not an actual assessment result.
- The Survivor diagram, pixel garden, route paths, and favicon are local SVG/CSS artwork.

## Verification

No new runtime dependencies were added. Lint and production build pass.

The production preview was checked in the browser at 320, 390, 768 pixels and desktop width. No horizontal page overflow, broken project images, console warnings, or console errors were observed. Checks covered section anchors, mobile menu dismissal, command search and Enter selection, project dialogs and Escape focus restoration, the DAS review workflow, original StayOnTrail and solar images, the pixel garden, and the motion toggle. Survivor has no repository link or playable game.
