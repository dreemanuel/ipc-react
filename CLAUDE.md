# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## BMAD Framework Integration

**IMPORTANT**: When opening this codebase, the first action should be to refer to `bmad-agent/ide-bmad-orchestrator.md` to initialize the BMAD framework. This framework provides specialized AI personas and structured workflows for software development, architecture, and project management.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (TypeScript compilation + Vite build)
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

This is a React e-commerce application for a cocoa/chocolate business built with:
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **React Router DOM** for client-side routing
- **Sass/SCSS** for styling with organized architecture
- **Zustand** for state management (dependency present but not actively used yet)

### Project Structure

- **Pages**: Route-level components in `src/pages/` (HomePage, ProductsPage, CartPage, etc.)
- **Layout Components**: Shared layout in `src/components/layout/` (Navbar, Footer, Header, Wrapper)
- **Section Components**: Homepage sections in `src/components/sections/` (Hero, Features, About, etc.)
- **UI Components**: Reusable components in `src/components/ui/` (buttons, cards, gallery, etc.)
- **Styling**: SCSS architecture in `src/styles/scss/` organized by utils, base, layout, and components

### Routing Structure

The app uses React Router with these main routes:
- `/` - HomePage (multiple sections: Hero, Features, About, Testimonials, Products, Socials, Contact, FinalCta)
- `/shop` - ProductsPage  
- `/cart` - CartPage
- `/signup` - SignupPage
- `/contact` - ContactPage
- `*` - NotFoundPage (404)

### Styling Architecture

SCSS follows a modular structure:
- **Utils**: Variables and mixins
- **Base**: Reset, typography, animations
- **Layout**: Grid, navigation, header, footer
- **Components**: Individual component styles

All styles are imported through `src/styles/scss/main.scss` and compiled to `src/styles/css/main.css`.

## Important Notes

- TypeScript configuration uses project references (tsconfig.app.json, tsconfig.node.json)
- ESLint configured for React with hooks and refresh plugins
- Images stored in `src/assets/` (mostly cocoa/chocolate themed)
- No test framework currently configured