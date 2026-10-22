import { EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";
import "./styles.css";

const LINKEDIN_LINK = "https://linkedin.com/in/garrett-a-2040a9191";
const GITHUB_LINK = "https://github.com/gsabouzeid";
const EMAIL = "gsabouzeid@gmail.com";

const Footer = () => {
  return (
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
  );
};

export default Footer;
