# Smart Fog-Based Accident Alert & Street Light System

A responsive hackathon demo by **Team Rebels**. It illustrates how a connected sensor network could detect an accident in fog and turn roadside lights red to warn approaching drivers.

## Open and run

1. Extract the ZIP and open the `smart-fog-accident-alert` folder in VS Code or Antigravity.
2. Install [Node.js 20.19+ or 22.12+](https://nodejs.org/) if it is not already installed.
3. In the editor terminal, run:

   ```sh
   npm install
   npm run dev
   ```

4. Open the local address printed by Vite (usually http://localhost:5173).

## Useful commands

- `npm run dev` — start the local development server.
- `npm run typecheck` — check the TypeScript source.
- `npm run build` — create a production-ready `dist/` folder.
- `npm run preview` — preview the production build locally.

## Project structure

- `src/App.tsx` — complete page content and accident simulation behavior.
- `src/index.css` — responsive layout, fog and signal animations, and visual theme.
- `src/main.tsx` — app entry point.
- `index.html` — page metadata and mount point.
- `vite.config.js` — Vite development and build configuration.

## Demo scope

This project is a frontend simulation only. It does not connect to ESP32/Raspberry Pi hardware, live sensors, GPS, or road infrastructure.
