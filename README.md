# Movies Collection App

A responsive React application for browsing and searching movies, featuring a modern UI with dark mode support.

## Features

- 🎬 Browse movie collections with pagination
- 🔍 Search functionality
- 🌓 Dark/Light mode toggle
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

git clone https://github.com/yourusername/movies-app.git
cd movies-app

2. Install dependencies

npm install

3. Start the development server

npm run dev
The app will be available at `http://localhost:5173`

### Building for Production

npm run build
The built files will be in the `dist` directory.

## Project Structure

movies-app/
├── src/
│ ├── components/ # React components
│ ├── context/ # React context providers
│ ├── hooks/ # Custom React hooks
│ ├── icons/ # SVG icon components
│ ├── lib/ # Utility functions
│ └── utils/ # Type definitions
├── public/ # Static assets
└── index.html # HTML entry point

## Deployment

The project is configured for GitHub Pages deployment using GitHub Actions. Any push to the main branch will trigger an automatic deployment.

## Project Status

1. Bugs

2. Improvements

- React router for pagination
