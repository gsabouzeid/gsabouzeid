import { t } from "i18next";
import awsIcon from "../assets/aws-icon.svg";
import cssIcon from "../assets/css3-icon.svg";
import gitIcon from "../assets/git-icon.svg";
import html5Icon from "../assets/html5-icon.svg";
import jestIcon from "../assets/jest-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import pythonIcon from "../assets/python-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import tsIcon from "../assets/ts-icon.svg";

export const SKILLS = {
  languages: [
    {
      name: "JavaScript",
      image: {
        src: jsIcon,
        altText: t("skills.logoText.js"),
      },
    },
    {
      name: "TypeScript",
      image: {
        src: tsIcon,
        altText: t("skills.logoText.ts"),
      },
    },
    {
      name: "HTML5",
      image: {
        src: html5Icon,
        altText: t("skills.logoText.html"),
      },
    },
    {
      name: "CSS3",
      image: {
        src: cssIcon,
        altText: t("skills.logoText.css"),
      },
    },
    {
      name: "Python",
      image: {
        src: pythonIcon,
        altText: t("skills.logoText.python"),
      },
    },
  ],
  frameworks: [
    {
      name: "React.js",
      image: {
        src: reactIcon,
        altText: t("skills.logoText.react"),
      },
    },
    {
      name: "Jest",
      image: {
        src: jestIcon,
        altText: t("skills.logoText.jest"),
      },
    },
  ],
  misc: [
    {
      name: "Git",
      image: {
        src: gitIcon,
        altText: t("skills.logoText.git"),
      },
    },
    {
      name: "AWS",
      image: {
        src: awsIcon,
        altText: t("skills.logoText.aws"),
      },
    },
  ],
};
