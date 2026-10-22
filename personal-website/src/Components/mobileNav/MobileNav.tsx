import { CardList, HouseDoor, Lightbulb, Person } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import "./styles.css";

interface MobileNavProps {
  toggleNav: boolean;
  onDismissToggle: () => void;
}

const MobileNav = ({ toggleNav, onDismissToggle }: MobileNavProps) => {
  return (
    <nav className={`popoverNav ${!toggleNav ? "is-hidden" : ""}`}>
      <div className="popoverNavItems">
        <Link to={ROUTES.HOME} onClick={onDismissToggle}>
          <div className="popoverNavItem">
            <HouseDoor />
            Home
          </div>
        </Link>
        <Link to={ROUTES.ABOUT} onClick={onDismissToggle}>
          <div className="popoverNavItem">
            <Person />
            About
          </div>
        </Link>
        <Link to={ROUTES.PROJECTS} onClick={onDismissToggle}>
          <div className="popoverNavItem">
            <CardList />
            Projects
          </div>
        </Link>
        <Link to={ROUTES.SKILLS} onClick={onDismissToggle}>
          <div className="popoverNavItem">
            <Lightbulb />
            Skills
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
