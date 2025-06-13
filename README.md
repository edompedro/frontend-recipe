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

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Ant Design (antd)](https://ant.design/) for UI components and styling
- [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) for testing

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