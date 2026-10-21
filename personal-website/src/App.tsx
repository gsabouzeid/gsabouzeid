import { useEffect, useState } from "react";
import {
  CardList,
  EnvelopeFill,
  Github,
  HouseDoor,
  Lightbulb,
  Linkedin,
  List,
  Person,
} from "react-bootstrap-icons";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/about/About";
import BackgroundParticles from "./Components/BackgroundParticles";
import Home from "./Components/home/Home";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skills/Skills";

const HOME_ROUTE = `/`;
const ABOUT_ROUTE = `/about`;
const PROJECTS_ROUTE = `/projects`;
const SKILLS_ROUTE = `/skills`;

const LINKEDIN_LINK = "https://linkedin.com/in/garrett-a-2040a9191";
const GITHUB_LINK = "https://github.com/gsabouzeid";
const EMAIL = "gsabouzeid@gmail.com";

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

  function handleToggleNavigation() {
    setToggleNav((prevToggleNav) => !prevToggleNav);
  }

  return (
    <HashRouter>
      <BackgroundParticles />
      <div className="appContainer">
        <nav className="nav">
          <p className="navTitle">GSA (website in progress)</p>
          <div className="navItems">
            <Link to={HOME_ROUTE}>
              <div className="navItem">
                <HouseDoor />
                Home
              </div>
            </Link>
            <Link to={ABOUT_ROUTE}>
              <div className="navItem">
                <Person />
                About
              </div>
            </Link>
            <Link to={PROJECTS_ROUTE}>
              <div className="navItem">
                <CardList />
                Projects
              </div>
            </Link>
            <Link to={SKILLS_ROUTE}>
              <div className="navItem">
                <Lightbulb />
                Skills
              </div>
            </Link>
          </div>
          <button
            className="navItemsButton"
            aria-label="Toggle Navigation"
            onClick={handleToggleNavigation}
          >
            <List />
          </button>
        </nav>
        <nav className={`popoverNav ${!toggleNav ? "is-hidden" : ""}`}>
          <div className="popoverNavItems">
            <Link to={HOME_ROUTE} onClick={() => setToggleNav(false)}>
              <div className="popoverNavItem">
                <HouseDoor />
                Home
              </div>
            </Link>
            <Link to={ABOUT_ROUTE} onClick={() => setToggleNav(false)}>
              <div className="popoverNavItem">
                <Person />
                About
              </div>
            </Link>
            <Link to={PROJECTS_ROUTE} onClick={() => setToggleNav(false)}>
              <div className="popoverNavItem">
                <CardList />
                Projects
              </div>
            </Link>
            <Link to={SKILLS_ROUTE} onClick={() => setToggleNav(false)}>
              <div className="popoverNavItem">
                <Lightbulb />
                Skills
              </div>
            </Link>
          </div>
        </nav>
        <section>
          <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={ABOUT_ROUTE} element={<About />} />
            <Route path={PROJECTS_ROUTE} element={<Projects />} />
            <Route path={SKILLS_ROUTE} element={<Skills />} />
          </Routes>
        </section>
        <footer>
          <p>Created and Maintained by Garrett Abou-Zeid</p>
          <p>&copy; 2026 Garrett Abou-Zeid. All rights reserved.</p>
          <div className="footerIcons">
            <a className="footerLinkIcon" href={`mailto:${EMAIL}`}>
              <EnvelopeFill />
            </a>
            <a
              className="footerLinkIcon"
              href={GITHUB_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              className="footerLinkIcon"
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
