import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/Aboutus/About.jsx";
import Service from "./pages/Service/Service.jsx"; // Assuming Service component exists
import Contact from "./pages/Contact/Contact.jsx"; // Assuming Contact component exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
