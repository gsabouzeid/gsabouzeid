import { useCallback, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/about/About";
import BackgroundParticles from "./Components/BackgroundParticles";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import MobileNav from "./Components/mobileNav/MobileNav";
import Nav from "./Components/nav/Nav";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skills/Skills";
import { ROUTES } from "./constants";

function App() {
  const [toggleNav, setToggleNav] = useState(false);

  // Close mobile nav if screen size expands
  useEffect(() => {
    const handleResize = () => {
      const shouldBeDesktop = window.innerWidth > 768;

      if (shouldBeDesktop) {
        setToggleNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleNavigation = useCallback(() => {
    setToggleNav((prevToggleNav) => !prevToggleNav);
  }, []);

  const handleDismissToggle = useCallback(() => {
    setToggleNav(false);
  }, []);

  return (
    <HashRouter>
      <BackgroundParticles />
      <div className="appContainer">
        <Nav onToggleNav={handleToggleNavigation} />
        <MobileNav
          toggleNav={toggleNav}
          onDismissToggle={handleDismissToggle}
        />
        <section className="mainSection">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />
            <Route path={ROUTES.SKILLS} element={<Skills />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
