# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `pnpm dev` - Start development server on port 5173
- `pnpm build` - Build for production (TypeScript check + Vite build)
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check formatting without modifying files

### Maintenance
- `pnpm clean:install` - Clean install (removes dist, lock file, node_modules, then reinstalls)

## Architecture Overview

This is a React portfolio website built with Vite and TypeScript, featuring a unique "Matrix" theme variant.

### Key Technologies
- **React 18** with TypeScript
- **Vite** for build tooling and dev server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **Tailwind CSS** for styling with custom dark theme
- **Framer Motion** for animations
- **React Helmet Async** for SEO meta tags

### Core Structure

#### Routing & Pages
- Routes defined in `src/App.tsx` using Wouter
- Three main routes: `/` (home), `/projects`, `/curriculum-vitae`
- Matrix-themed variants of pages (e.g., `HomePageMatrix.tsx`)

#### Component Architecture
```
src/components/
├── layouts/          # MainLayout and MainLayoutMatrix
├── homePage/         # Home page sections (Hero, About, Experience, etc.)
├── projectsPage/     # Projects page components
├── cvPage/           # CV/Resume page components
├── ui/               # Reusable UI components (Button, Card, etc.)
├── seo/              # SEO components
└── svg/              # Logo components
```

#### Data Management
- Static data stored in `src/data/` directory
- Separate data files for different pages (home.ts, projects.ts, cv.ts)
- Matrix-themed data variants (e.g., `home.matrix.ts`)

#### Styling System
- **Dark theme**: Custom Tailwind colors (`bg-main`, `bg-main-light`, `text-primary`)
- **Matrix effect**: Custom hook `useMatrixEffect` creates animated background
- **Responsive design**: Mobile-first approach

### Matrix Theme System

The site features two visual variants:
1. **Standard theme**: Clean, minimal design
2. **Matrix theme**: Animated matrix-style background with green text effects

#### Matrix Implementation
- `useMatrixEffect` hook (`src/hooks/useMatrixt.tsx`) creates animated canvas background
- Matrix characters: alphanumeric + symbols with falling animation
- Used in `MainLayoutMatrix.tsx` and `NotFoundPage.tsx`

### Build Configuration

#### Vite Setup
- Manual chunk splitting for optimization:
  - `vendor`: React core libraries
  - `layout`: Layout components
  - `home`: Home page components
  - `cv`: CV page components
- Source maps enabled for debugging
- Bundle visualization available

#### Performance Optimizations
- Code splitting by page/section
- Lazy loading with Suspense boundaries
- Component memoization with `React.memo`
- Manual chunk control for better caching

### Development Notes

#### File Naming Conventions
- Matrix variants append "Matrix" to component names
- Page components in `src/screens/`
- Reusable components organized by feature in `src/components/`

#### SEO Implementation
- `HeadSEO` component manages meta tags per page
- Sitemap and robots.txt in public directory
- Page-specific titles and descriptions

#### Custom Hooks
- `useMatrixEffect`: Matrix animation canvas management
- `useAnimatedCounter`: Counter animations for stats

This codebase emphasizes performance, clean architecture, and unique visual design with the Matrix theme system providing an engaging user experience.