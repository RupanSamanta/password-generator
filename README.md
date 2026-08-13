# Password Generator

![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&logoColor=white)
![Made with Vite](https://img.shields.io/badge/Made%20with-Vite-646CFF?logo=vite&logoColor=white)
![Node](https://img.shields.io/badge/node-%3E%3D16-339933?logo=node.js&logoColor=white)

A lightweight, secure, and customizable password generator built with React and Vite. Generate strong, random passwords directly in the browser — no data ever leaves your machine.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development Notes](#development-notes)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🔐 Generate random passwords with configurable length
- ⚙️ Toggle character categories — lowercase, uppercase, numbers, symbols
- 📋 One-click copy to clipboard
- ♿ Minimal, accessible UI components

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)

## Prerequisites

- Node.js >= 16
- npm or yarn

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

Runs the app locally with hot module reload:

```bash
npm run dev
```

By default, the app is available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Usage

1. Open the app in your browser while the dev server is running.
2. Set the desired password length.
3. Enable or disable character categories (lowercase, uppercase, numbers, symbols).
4. Click **Generate** to create a password.
5. Click **Copy** to copy it to your clipboard.

## Project Structure

```
.
├── public/                  # Static assets
└── src/
    ├── main.jsx              # App entry point
    ├── App.jsx                # Main app component
    ├── lib/
    │   └── utils.js             # Password generation logic
    └── components/
        └── ui/                   # Presentational components (input, button, checkbox, etc.)
```

> Looking for the password logic? It lives in [`src/lib/utils.js`](./src/lib/utils.js).

## Development Notes

- Keep components small, stateless, and reusable where possible.
- Unit tests aren't included by default — consider adding tests for `lib/utils.js` if you extend the generation logic.

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes with a clear message
4. Open a pull request describing what changed and why

For larger changes, please open an issue first to discuss what you'd like to do.
