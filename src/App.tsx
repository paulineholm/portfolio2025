import { Routes, Route } from "react-router-dom";
import { useBreakpoint } from "./utils/useBreakpoint";
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
  const { isDesktop } = useBreakpoint();
  return (
    <div className="flex flex-col min-h-screen">
      {isDesktop ? <NavMenu /> : <BurgerMenu />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
