import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const REPO_NAME = "gsabouzeid";
const HOME_ROUTE = `/${REPO_NAME}`;
const ABOUT_ROUTE = `/${REPO_NAME}/about`;
const PROJECTS_ROUTE = `/${REPO_NAME}/projects`;
const SKILLS_ROUTE = `/${REPO_NAME}/skills`;

function App() {
  return (
    <BrowserRouter>
      <nav className="navClass">
        <p className="navTitleClass">Garrett Abou-Zeid</p>
        <div className="navItemsClass">
          <Link to={HOME_ROUTE}>Home</Link>
          <Link to={ABOUT_ROUTE}>About</Link>
          <Link to={PROJECTS_ROUTE}>Projects</Link>
          <Link to={SKILLS_ROUTE}>Skills</Link>
        </div>
      </nav>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
        <Route path={PROJECTS_ROUTE} element={<Projects />} />
        <Route path={SKILLS_ROUTE} element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
