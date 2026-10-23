import {
  CardList,
  HouseDoor,
  Lightbulb,
  List,
  Person,
} from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import "./styles.css";

interface NavProps {
  onToggleNav: () => void;
}

const Nav = ({ onToggleNav }: NavProps) => {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <h1 className="navTitle">GSA (website in progress)</h1>
      <div className="navItems">
        <Link to={ROUTES.HOME}>
          <div className="navItem">
            <HouseDoor />
            {t("nav.home")}
          </div>
        </Link>
        <Link to={ROUTES.ABOUT}>
          <div className="navItem">
            <Person />
            {t("nav.about")}
          </div>
        </Link>
        <Link to={ROUTES.PROJECTS}>
          <div className="navItem">
            <CardList />
            {t("nav.projects")}
          </div>
        </Link>
        <Link to={ROUTES.SKILLS}>
          <div className="navItem">
            <Lightbulb />
            {t("nav.skills")}
          </div>
        </Link>
      </div>
      <button
        className="navItemsButton"
        aria-label={t("nav.toggleNav")}
        onClick={onToggleNav}
      >
        <List />
      </button>
    </nav>
  );
};

export default Nav;
