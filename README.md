# Password Generator

A small React + Vite app that generates secure, customizable passwords in the browser.

This repository is a minimal frontend project built with Vite and React. It includes a simple UI to choose the password length and character set, and instantly produces a copyable, strong password.

## Features

- Generate random passwords with configurable length
- Options for lowercase, uppercase, numbers, and symbols
- Copy password to clipboard with one click
- Minimal, accessible UI components

## Prerequisites

- Node.js >= 16
- npm or yarn

## Quick start

Install dependencies:

```
npm install
```

Start the development server with hot reload:

```
npm run dev
```

Build for production:

```
npm run build
```

Locally preview the production build:

```
npm run preview
```

## Usage

1. Open the app in the browser while the dev server is running (usually at `http://localhost:5173`).
2. Choose the desired password length and enable/disable character categories.
3. Click `Generate` to create a password; click the `Copy` button to copy it to the clipboard.

## Project structure

- `src/` — application source code
	- `main.jsx` — app entry
	- `App.jsx` — main app component
	- `lib/utils.js` — password generation helper
	- `components/ui/` — small presentational components (input, button, checkbox, etc.)
- `public/` — static assets

If you want to find the password logic, see `src/lib/utils.js`.

## Development notes

- Keep components small and stateless where possible.
- Unit tests are not included by default; consider adding tests for `lib/utils.js` if you add logic.

## Contributing

Contributions are welcome. Open an issue or a pull request describing your change.
