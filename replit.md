# Portfolio Application

## Overview

This is a modern full-stack portfolio web application built with React, TypeScript, and Express. The application showcases a personal portfolio with animated sections, project galleries, achievements, and contact functionality. It uses a modern tech stack with shadcn/ui components, Tailwind CSS for styling, and is configured for deployment on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Component Structure**: Modular portfolio sections (hero, about, projects, achievements, contact)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety
- **Architecture Pattern**: RESTful API with modular route structure
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot reloading with Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless database
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: User management with username/password authentication
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Key Components

### Frontend Components
- **Portfolio Sections**: Hero, About, Projects, Achievements, Contact sections with smooth scrolling
- **UI Components**: Complete shadcn/ui component library including buttons, cards, modals, forms
- **Interactive Elements**: Project modals, contact forms, navigation with active section tracking
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts

### Backend Components
- **Route System**: Modular route registration with API prefix structure
- **Storage Layer**: Abstract storage interface supporting multiple implementations
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Development Tools**: Custom logging and development banner integration

### Configuration Files
- **TypeScript**: Unified configuration for client, server, and shared code
- **Vite**: Modern build tooling with React, path aliases, and development plugins
- **Tailwind**: Custom design system with CSS variables and component styling
- **Drizzle**: Database configuration with PostgreSQL dialect

## Data Flow

1. **Client Requests**: Frontend makes API calls through React Query for caching and state management
2. **Server Processing**: Express routes handle requests with proper error handling and logging
3. **Database Operations**: Drizzle ORM manages database interactions with type safety
4. **Response Handling**: Structured API responses with consistent error handling
5. **State Updates**: React Query automatically updates UI based on server responses

## External Dependencies

### UI and Styling
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast bundling for production builds

### Database and Backend
- **Neon Database**: Serverless PostgreSQL database
- **Drizzle ORM**: Type-safe database operations
- **Express.js**: Web application framework

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles TypeScript server code to `dist/index.js`
- **Database**: Drizzle migrations ensure schema consistency

### Environment Configuration
- **Development**: Hot reloading with Vite middleware integration
- **Production**: Optimized builds with static file serving
- **Database**: Environment-based connection string configuration

### Replit Integration
- **Development Banner**: Automatic development environment detection
- **Runtime Error Handling**: Replit-specific error overlay for development
- **Cartographer Plugin**: Code mapping for better debugging experience

The application is designed to be easily deployable on Replit with automatic environment detection and proper development/production mode handling.