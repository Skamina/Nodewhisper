# Nodewhisper Frontend

This is the frontend application for the Nodewhisper project.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development Setup](#development-setup)
- [Build Setup](#build-setup)
- [Styling](#styling)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### Prerequisites

- Node.js (v18.x or newer recommended)
- npm or yarn

Clone the repository and install dependencies:

```bash
git clone https://github.com/Skamina/Nodewhisper.git
cd Nodewhisper/Frontend
npm install
# or
yarn install
```

## Available Scripts

In the project directory, you can run:

- `npm start` / `yarn start`  
  Runs the app in the development mode.

- `npm run build` / `yarn build`  
  Builds the app for production to the `build` folder.

- `npm run lint` / `yarn lint`  
  Lints the codebase using your configured linter.

- `npm test` / `yarn test`  
  Launches the test runner.

## Development Setup

1. Install dependencies:  
   `npm install` or `yarn install`

2. Start the development server:  
   `npm start` or `yarn start`

3. Visit `http://localhost:3000` (or the port specified in your config).

## Build Setup

To create a production build, run:
```bash
npm run build
# or
yarn build
```

You’ll find the build output in the `build` directory.

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/).  
You can configure themes and custom styles in `tailwind.config.js`.

## Project Structure

```txt
Frontend/
├── README.md
├── package.json
├── tailwind.config.js
├── src/
│   ├── App.jsx
│   ├── index.js
│   ├── styles/
│   │   └── tailwind.css
│   └── ... (add components, pages, layouts, hooks, assets as needed)
├── utils/
│   ├── api.js
│   ├── format.js
│   └── constants.js
```

## Contributing

We welcome contributions! Please open an issue or pull request.  
Make sure to follow best practices and describe your changes clearly.

## License

This project is licensed under the MIT License.
