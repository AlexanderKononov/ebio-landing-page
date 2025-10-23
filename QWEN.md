# Qwen Code - Project Context File

## Project Overview

**ebio-landing-page** is a React-based landing page application for eBio Ltd, created using Vite as the build tool. This is a personal/professional landing page for Alexander Kononov that showcases his professional presence across different platforms.

The application is built with:
- React 19.1.1
- Vite 7.1.7 as the build tool
- ES Modules for modern JavaScript
- CSS Modules for component styling
- ESLint for linting

The application features a header with the eBio logo and company information, along with links to Alexander's LinkedIn profile, Google Scholar, and Upwork profile.

## Project Structure

```
ebio-landing-page/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   │   └── pixel_green_flow_logo.png
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## Building and Running

### Development Server
To start the development server with hot module replacement:
```bash
npm run dev
```

### Building for Production
To build the application for production:
```bash
npm run build
```

### Linting
To run the linter:
```bash
npm run lint
```

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## Technology Stack

- **Frontend Framework**: React 19 (using JSX)
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Development Server**: Vite Dev Server with Hot Module Replacement (HMR)
- **Linting**: ESLint with React-specific plugins

## Key Files and Components

### Core Components
- `src/App.jsx`: Main application component that renders the header and links
- `src/components/Header.jsx`: Header component with company logo and information
- `src/components/Header.module.css`: Styles for the header component using CSS Modules

### Configuration Files
- `vite.config.js`: Vite configuration with React plugin
- `package.json`: Project dependencies, scripts, and metadata
- `eslint.config.js`: ESLint configuration for React development

### Entry Points
- `index.html`: HTML template with the root div
- `src/main.jsx`: React application entry point that renders the App component

## Development Conventions

- Uses React Hooks (useState) for state management
- Leverages Vite's fast development server and build capabilities
- Uses CSS Modules for component-scoped styling
- Follows ESLint best practices for React development
- Uses semantic HTML and proper accessibility attributes (alt tags)

## Dependencies

### Production Dependencies
- `react`: ^19.1.1
- `react-dom`: ^19.1.1

### Development Dependencies
- `@vitejs/plugin-react`: ^5.0.4
- `vite`: ^7.1.7
- `@eslint/js`: ^9.36.0
- `eslint`: ^9.36.0
- `eslint-plugin-react-hooks`: ^5.2.0
- `eslint-plugin-react-refresh`: ^0.4.22
- `globals`: ^16.4.0
- `@types/react`: ^19.1.16
- `@types/react-dom`: ^19.1.9

## Special Features

- Uses CSS Modules for component-scoped styling to avoid global CSS conflicts
- Implements React StrictMode in the main entry point for development warnings
- Includes external links to professional profiles (LinkedIn, Google Scholar, Upwork)
- Responsive design using flexbox layouts
- Modern React features and patterns