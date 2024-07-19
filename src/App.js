import Home from "./pages/Home.js";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
