import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/Aboutus/About.jsx"
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;