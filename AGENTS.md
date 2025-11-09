# AGENTS.md

## Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- No test framework configured

## Code Style Guidelines

### Imports & Paths
- Use `@/*` path aliases for src imports (e.g., `@/components/ui/button`)
- Group imports: external libraries first, then internal imports
- Use `import type` for type-only imports

### TypeScript & Components
- Strict TypeScript enabled - always type props and returns
- Functional components with React 19+ patterns
- PascalCase for components, camelCase for functions/variables
- Use `Readonly<>` for props when appropriate

### Styling
- Tailwind CSS for all styling
- Use `cn()` utility from `@/lib/utils` for class merging
- Follow existing component patterns in `src/components/ui/`

### Database & API
- Drizzle ORM with PostgreSQL
- API routes use Next.js App Router patterns
- Error handling: try-catch with proper HTTP status codes
- Use `NextResponse.json()` for API responses

### File Structure
- App Router: `src/app/` with route groups
- Components: `src/components/` for reusable UI
- Database: `src/db/` for schema and connections
- Lib: `src/lib/` for utilities