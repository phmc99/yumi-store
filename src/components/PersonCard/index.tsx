import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { Card } from "./styles";

interface IDataProps {
  name: string;
  role: string;
  gitHub: string;
  linkedin: string;
  image: string;
}

const PersonCard = ({ name, role, gitHub, linkedin, image }: IDataProps) => {
  return (
    <Card>
      <div className="data">
        <h1>{name}</h1>
        <h3>{role}</h3>
        <a
          href={`https://github.com/${gitHub}`}
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className="image">
        <img src={`${image}`} alt={`${name}`} />
      </div>
    </Card>
  );
};

export default PersonCard;
