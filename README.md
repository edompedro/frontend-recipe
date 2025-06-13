# frontend-recipe

A React + Vite frontend for the Recipe app, styled with [Ant Design (antd)](https://ant.design/).

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/edompedro/frontend-recipe.git
cd frontend-recipe
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure the API URL

Create a `.env` file in the root of the `frontend-recipe` folder.  
Copy the example file and edit as needed:

```sh
cp .env.example .env
```

Edit `.env` and set your backend API URL:

```
VITE_BASE_URL="http://localhost:3000/api"
```

> This URL should point to your backend server.

---

## Scripts

- **Start development server:**
  ```sh
  npm run dev
  ```
- **Build for production:**
  ```sh
  npm run build
  ```
- **Preview production build:**
  ```sh
  npm run preview
  ```
- **Run tests:**
  ```sh
  npx vitest
  ```

---

## Overview of Packages and Third-Party Libraries

| Package                        | Purpose & Reasoning                                                                                  |
|---------------------------------|------------------------------------------------------------------------------------------------------|
| **react** / **react-dom**       | Core library for building user interfaces.                                                           |
| **vite**                        | Fast, modern build tool and dev server for React, enabling instant reloads and fast builds.          |
| **react-router-dom**            | Declarative routing for React apps, allowing navigation between pages.                              |
| **antd**                        | Ant Design UI library provides a rich set of high-quality, customizable components for rapid UI development and a consistent, modern look. |
| **@testing-library/react**      | Encourages testing components from the user's perspective, making tests more reliable and maintainable. |
| **@testing-library/jest-dom**   | Provides custom DOM matchers for more expressive assertions in tests.                               |
| **vitest**                      | Fast, Vite-native test runner with Jest-compatible API, for seamless integration and fast feedback.  |
| **axios** (if used)             | Promise-based HTTP client for making API requests (optional, check `package.json`).                 |

**Why these choices?**
- **Ant Design** was chosen for its comprehensive set of ready-to-use, well-documented components, which speeds up development and ensures a professional UI.
- **Vite** and **Vitest** offer a modern, fast development and testing experience, with minimal configuration.
- **React Router** is the standard for routing in React applications.
- **Testing Library** tools promote best practices by focusing on user interactions and accessibility.

---

## Project Structure

- `src/` — Main source code
  - `pages/` — Page components (Home, Favorite)
  - `components/` — Reusable UI components (e.g., Card)
  - `container/` — Containers for lists and complex UI
  - `context/` — React context for global state (recipes)
  - `api/` — API configuration
- `.env` — Environment variables (API URL)
- `vite.config.js` — Vite and Vitest configuration

---

## Notes

- Make sure your backend is running and accessible at the URL specified in `.env`.
- Ant Design is used for consistent and modern UI styling.

---

## License

MIT License