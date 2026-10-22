import {
  CardList,
  HouseDoor,
  Lightbulb,
  List,
  Person,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import "./styles.css";

interface NavProps {
  onToggleNav: () => void;
}

const Nav = ({ onToggleNav }: NavProps) => {
  return (
    <nav className="nav">
      <p className="navTitle">GSA (website in progress)</p>
      <div className="navItems">
        <Link to={ROUTES.HOME}>
          <div className="navItem">
            <HouseDoor />
            Home
          </div>
        </Link>
        <Link to={ROUTES.ABOUT}>
          <div className="navItem">
            <Person />
            About
          </div>
        </Link>
        <Link to={ROUTES.PROJECTS}>
          <div className="navItem">
            <CardList />
            Projects
          </div>
        </Link>
        <Link to={ROUTES.SKILLS}>
          <div className="navItem">
            <Lightbulb />
            Skills
          </div>
        </Link>
      </div>
      <button
        className="navItemsButton"
        aria-label="Toggle Navigation"
        onClick={onToggleNav}
      >
        <List />
      </button>
    </nav>
  );
};

export default Nav;
