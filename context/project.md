# Twalky — Project Context

Repos: `twalky-mobile` (React Native app) and `twalky-mobile-backend` (Node API), side by side under `C:\RN\twalky`.

## Confirmed decisions

### General
- TypeScript across frontend and backend.
- Previous implementations are kept as reference in `srcPre/` in each repo — not compiled, not migrated yet.
- Reusable notes live here: project-wide in `context/project.md`, feature-specific in `context/features/<feature-name>/`.

### Mobile (`twalky-mobile`)
- React Native 0.81.0, React 19.1.0, Yarn 1 (`yarn.lock`).
- State: TanStack React Query (server data) + Zustand (UI state). No Redux / RTK Query.
- Structure: features in `src/features/<feature-name>/` (subfolders like `screens`, `components`, `services`, `utils`, `types` only when needed); shared code directly under `src/`.
- `index.js` → `App.tsx` → `src/start.tsx` (Hello World foundation).
- `react-native-screens` pinned to exactly `4.19.0` (supports RN 0.81; newer needs RN ≥ 0.82).
- ESLint extends `@react-native`, ignores `srcPre/**`.

### Backend (`twalky-mobile-backend`)
- Runtime: Node 22 LTS (`engines: >=22`, `@types/node ^22`, TS target ES2023). npm (`package-lock.json`).
- ESM (`"type": "module"`), TypeScript `NodeNext`, strict; relative imports use `.js` extensions.
- Entry: `src/index.ts` (loads dotenv first) → `src/server.ts` (HTTP server, graceful shutdown) → `src/app.ts` (Express app).
- Config: `src/config/env.ts` validates `PORT` (default 5000). `.env.example` is the only tracked env file.
- Dev: `npm run dev` = nodemon (`nodemon.json`) running `tsx src/index.ts` with `NODE_ENV=development`.
- Logging: Morgan `dev` format only in development. Never log auth headers, tokens, passwords, or request bodies.
- Production: `npm run build` then `npm start` (no automatic prestart build). `dist/` is git-ignored.
- Structure: features in `src/modules/<feature-name>/` (routes, controllers, models, services, validation, types when needed); shared `config`, `utils`, `middlewares` directly under `src/`.
- Response shape: `{ success, message, data }`.

## Open questions
- Android native build with `react-native-screens@4.19.0` not yet verified on device/emulator.
- MongoDB, Socket.IO, meeting, and auth (Firebase) are not yet rebuilt in the new structure.
- No test setup yet (mobile has one Jest smoke test; backend has none).
