import { CardList, HouseDoor, Lightbulb, Person } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import "./styles.css";

interface MobileNavProps {
  toggleNav: boolean;
  onDismissToggle: () => void;
}

const MobileNav = ({ toggleNav, onDismissToggle }: MobileNavProps) => {
  const { t } = useTranslation();

  return (
    <nav className={`popoverNav ${!toggleNav ? "is-hidden" : ""}`}>
      <div className="popoverNavItems">
        <Link to={ROUTES.HOME} onClick={onDismissToggle}>
          <div className="popoverNavItem">
            <HouseDoor />
            {t("nav.home")}
          </div>
        </Link>
        <Link to={ROUTES.ABOUT} onClick={onDismissToggle}>
          <div className="popoverNavItem">
            <Person />
            {t("nav.about")}
          </div>
        </Link>
        <Link to={ROUTES.PROJECTS} onClick={onDismissToggle}>
          <div className="popoverNavItem">
            <CardList />
            {t("nav.projects")}
          </div>
        </Link>
        <Link to={ROUTES.SKILLS} onClick={onDismissToggle}>
          <div className="popoverNavItem">
            <Lightbulb />
            {t("nav.skills")}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
