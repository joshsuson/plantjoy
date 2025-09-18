# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Plant Joy is a SvelteKit-based marketing website for Plant Joy Ministries, a nonprofit supporting gospel ministry leaders. The site is focused on donation collection and information sharing about the ministry's mission.

## Key Commands

### Development
```bash
npm run dev              # Start development server
npm run dev -- --open   # Start dev server and open browser
```

### Build & Deploy
```bash
npm run build           # Create production build
npm run preview         # Preview production build locally
```

### Code Quality
```bash
npm run check           # Type check with svelte-check
npm run check:watch     # Type check in watch mode
npm run lint            # Check code formatting with Prettier
npm run format          # Format code with Prettier
```

### Dependencies
```bash
npm install             # Install all dependencies
```

## Architecture & Structure

### Technology Stack
- **Framework**: SvelteKit with Vite
- **Styling**: TailwindCSS with custom "christi" color palette (green theme)
- **Typography**: Lexend font family via Google Fonts
- **Language**: JavaScript (no TypeScript, but with JSDoc type checking)

### Component Architecture
The site follows a simple page-component structure:

- **Layout**: `src/routes/+layout.svelte` provides global structure with Header/Footer
- **Homepage**: `src/routes/+page.svelte` composes main sections
- **Components**: Located in `src/lib/components/` - each represents a page section:
  - `Hero.svelte` - Main hero section with donation CTA
  - `TheNeed.svelte` - Statistics about ministry leader challenges
  - `YourHelp.svelte` - Ways to help and needed commitments table
  - `Stephen.svelte` - About the founder section
  - `Header.svelte` - Navigation with logo and donate button
  - `Footer.svelte` - Site footer

### Donation Integration
The site integrates with RebelGive for donation processing:
- Flow ID: `4affbe190376d67f48ba`
- Script loaded in `+layout.svelte`
- Multiple CTAs throughout site link to `#givingflow` anchor

### Styling System
- Custom TailwindCSS theme with "christi" green color palette (50-900 shades)
- Lexend font family applied globally
- Responsive design using TailwindCSS breakpoints
- Custom CSS classes for donation buttons and cards

### Asset Management
Static assets stored in `src/lib/assets/`:
- `logo-black.png` - Plant Joy logo
- `stephen.png` - Founder photo
- `happy-pastor.jpg` - Ministry leader image
- `mesh-gradient*.png` - Background images

## Development Notes

### Key Features to Maintain
- Donation flow integration points (RebelGive script and links)
- Responsive design across all components
- Statistics and data accuracy in `TheNeed.svelte` and `YourHelp.svelte`
- Custom green color scheme consistency

### Content Areas
- Ministry statistics are hardcoded in component data
- Donation commitment levels are defined in `YourHelp.svelte`
- All copy focuses on supporting ministry leaders and donation CTAs

### Build Configuration
- Uses `@sveltejs/adapter-auto` for automatic platform detection
- Vite preprocessing enabled for modern build features
- PostCSS configured for TailwindCSS processing