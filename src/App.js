
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";

import ScrollToTop from "./utils/scrollToTop";
import ArowUp from "./components/arow/ArowUp"

import "./styles/media.css"
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Footer />
        <ArowUp/>
      </Router>
    </div>
  );
}

export default App;
