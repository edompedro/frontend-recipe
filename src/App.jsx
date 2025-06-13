import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "./pages/Home";
import FavoritePage from "./pages/Favorite";

function App() {
  return (
    <Router>
      <Layout
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "white",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
