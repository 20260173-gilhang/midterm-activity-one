import { Routes, Route } from "react-router";
import Students from "./pages/Students";
import About from "./pages/About";
import Navigation from "./components/nav";
import Home from "./pages/home";




function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
