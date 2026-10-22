import { EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import "./styles.css";

const LINKEDIN_LINK = "https://linkedin.com/in/garrett-a-2040a9191";
const GITHUB_LINK = "https://github.com/gsabouzeid";
const EMAIL = "gsabouzeid@gmail.com";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <p>{t("footer.createdAndMaintained")}</p>
      <p>{t("footer.copyrightNotice")}</p>
      <div className="footerIcons">
        <a
          className="footerLinkIcon"
          href={`mailto:${EMAIL}`}
          aria-label={t("footer.emailScreenReader")}
        >
          <EnvelopeFill />
        </a>
        <a
          className="footerLinkIcon"
          href={GITHUB_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label={t("footer.githubScreenReader")}
        >
          <Github />
        </a>
        <a
          className="footerLinkIcon"
          href={LINKEDIN_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label={t("footer.linkedinScreenReader")}
        >
          <Linkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
