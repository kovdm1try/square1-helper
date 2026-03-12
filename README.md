# Square-1 Helper

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI_v7-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

A web app for Square-1 speedcubing enthusiasts. Provides a reference for OBL (Orient Both Layers) algorithms, shape naming, and a built-in solve timer.

> Currently in active development — more features coming soon.

---

## Features

- **Solve Timer** — keyboard & touchscreen timer with scramble generator (powered by [cubing.js](https://github.com/cubing/cubing.js))
- **Dark / Light theme** — system-aware with manual toggle
- **Responsive** — works on desktop and mobile
- Algorithms(Coming soon...)
---

## Tech Stack

| Technology | Description |
|---|---|
| React 19 | UI framework |
| TypeScript 5 | Static typing |
| Vite 7 + SWC | Build tool & fast refresh |
| MUI v7 | Component library |
| SCSS Modules + Emotion | Styling |
| Redux Toolkit | State management |
| React Router v7 | Client-side routing |
| cubing.js | Cube scramble generation & logic |
| Fontsource (Tektur) | Variable font |
| ESLint 9 + Prettier | Linting & formatting |
| GitHub Pages | Deployment |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## Project Structure

```
src/
├── components/       # Reusable UI components
├── context/          # React context (theme)
├── layouts/          # Page layouts
├── lib/              # Utility libraries (timer logic, etc.)
├── navigation/       # App routing
├── pages/            # Page components (About, Timer, OBL)
├── store/            # Redux store & slices
├── styles/           # Global styles & MUI theme
├── types/            # TypeScript declarations
└── utils/            # Helper functions
```

---

## Contributing

Contributions are welcome! If you find the project interesting, feel free to open an issue or submit a PR.

Give the repo a star if you find it useful — it means a lot!
