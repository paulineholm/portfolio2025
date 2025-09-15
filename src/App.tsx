import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavMenu from "./components/common/NavMenu";
import BurgerMenu from "./components/common/BurgerMenu";
import Footer from "./components/common/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Project from "./views/Project";
import Error from "./views/Error";

function App() {
  const [resViewport, setResViewport] = useState(window.innerWidth < 1200);
  //console.log(resViewport);
  //mobile&tablet
  const updateViewport = () => {
    setResViewport(window.innerWidth < 1200);
  };
  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);
  return (
    <div className="App">
      {resViewport ? <BurgerMenu /> : <NavMenu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
