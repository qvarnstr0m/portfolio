import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { Filler, Footer, Navbar } from "./components";
import { About, Activities, Cv, Home, Portfolio, Wcag } from "./pages";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Wcag" element={<Wcag />} />
        <Route path="/Activities" element={<Activities />} />
      </Routes>
      <Filler />
      <Footer />
      </div>
      
    </Router>
  );
}

export default App;
