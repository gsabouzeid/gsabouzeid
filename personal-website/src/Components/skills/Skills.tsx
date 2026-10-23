import { useTranslation } from "react-i18next";
import { SKILLS } from "../../constants";
import SkillPill from "./SkillPill";
import "./styles.css";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="skillsContainer">
      <div className="categoryContainer">
        <h2 className="skillHeading">{t("skills.languages")}</h2>
        <div className="skillPillContainer">
          {SKILLS.languages.map((lan) => (
            <SkillPill key={lan.name} name={lan.name} image={lan.image} />
          ))}
        </div>
      </div>
      <div className="categoryContainer">
        <h2 className="skillHeading">{t("skills.frameworks")}</h2>
        <div className="skillPillContainer">
          {SKILLS.frameworks.map((fw) => (
            <SkillPill key={fw.name} name={fw.name} image={fw.image} />
          ))}
        </div>
      </div>
      <div className="categoryContainer">
        <h2 className="skillHeading">{t("skills.misc")}</h2>
        <div className="skillPillContainer">
          {SKILLS.misc.map((m) => (
            <SkillPill key={m.name} name={m.name} image={m.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
