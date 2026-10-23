import "./styles.css";

interface Image {
  src: string;
  altText: string;
}

interface SkillPillProps {
  name: string;
  image: Image;
}

const SkillPill = ({ name, image }: SkillPillProps) => {
  return (
    <div className="skillPill">
      <img src={image.src} width={25} height={25} alt={image.altText} />
      <p>{name}</p>
    </div>
  );
};

export default SkillPill;
