# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev           # Start Next.js dev server with Turbopack on port 9002
npm run build         # Production build
npm run lint          # Run ESLint
npm run typecheck     # TypeScript type checking (tsc --noEmit)
npm run genkit:dev    # Start Genkit AI dev server
npm run genkit:watch  # Start Genkit AI dev server with file watching
```

## Architecture

This is a Next.js 15 application called "Caddie Connect" - a scheduling and communication platform for golf caddies.

### Tech Stack
- **Framework**: Next.js 15 with App Router (using Turbopack)
- **UI**: Tailwind CSS with shadcn/ui components (Radix UI primitives)
- **AI**: Genkit with Google AI (Gemini 2.5 Flash)
- **Forms**: react-hook-form with Zod validation
- **Charts**: Recharts

### Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/ui/` - shadcn/ui component library (Radix-based primitives)
- `src/components/` - App-specific components (Header, AvailabilityForm, ScheduleView, Announcements)
- `src/ai/` - Genkit AI configuration and flows
  - `genkit.ts` - AI instance setup with Google AI plugin
  - `dev.ts` - Entry point for Genkit dev server (import flows here for side effects)
- `src/lib/` - Utilities and data (`utils.ts` for cn() helper, `data.ts` for mock data)
- `src/hooks/` - Custom React hooks (use-toast, use-mobile)

### Path Aliases
- `@/*` maps to `./src/*`

### Styling
- Uses CSS variables for theming (defined in globals.css)
- Font: PT Sans
- Dark mode support via class-based toggling
