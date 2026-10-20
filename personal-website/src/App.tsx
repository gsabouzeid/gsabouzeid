import {
  CardList,
  EnvelopeFill,
  Github,
  HouseDoor,
  Lightbulb,
  Linkedin,
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
  return (
    <HashRouter>
      <BackgroundParticles />
      <div className="appContainer">
        <nav className="navClass">
          <p className="navTitleClass">GSA (website in progress)</p>
          <div className="navItemsClass">
            <Link to={HOME_ROUTE}>
              <div className="navItemClass">
                <HouseDoor />
                Home
              </div>
            </Link>
            <Link to={ABOUT_ROUTE}>
              <div className="navItemClass">
                <Person />
                About
              </div>
            </Link>
            <Link to={PROJECTS_ROUTE}>
              <div className="navItemClass">
                <CardList />
                Projects
              </div>
            </Link>
            <Link to={SKILLS_ROUTE}>
              <div className="navItemClass">
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
