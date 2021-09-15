import { Container, Support } from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { useHistory } from "react-router";

//Images
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import FooterImage from "../../assets/footer.png";

const Footer = () => {
  const history = useHistory();

  return (
    <Container>
      <Support>
        <h2>Yumi Apoia</h2>
        <div className="text">
          <img
            src="https://ongsoscidadaniaanimal.org/images/site/logo-ong-cidadania-animal.png"
            alt="ONG SOS Cidadania Animal"
          />
          <p>
            Parte do valor de cada compra é revertido em doações para SOS
            Cidadania Animal. Seja você também um apoiador!
          </p>
        </div>
        <button onClick={() => history.push("/adoption")}>
          Saiba como ajudar
        </button>
      </Support>

      <div className="socialMedia">
        <h3>Onde estamos</h3>
        <div>
          <img src={Instagram} alt="Instagram" />
          <img src={Facebook} alt="Facebook" className="face" />
          <img src={Twitter} alt="Twitter" />
        </div>
      </div>

      <div className="institutional">
        <h3>Institucional</h3>
        <div>
          <p>Empresa</p>
          <p>Termos e condições de uso</p>
          <p>Canal de ética e conduta</p>
          <p>Trabalhe conosco</p>
        </div>
      </div>

      <div className="attendance">
        <h3>Atendimento</h3>
        <div>
          <p>Central de atendimento</p>
          <Link to="/aboutus">
            <p className="aboutus">Assessoria de imprensa</p>
          </Link>
          <p>
            <AiOutlineMail /> &nbsp; yumi@sac.com
          </p>
        </div>
      </div>

      <img src={FooterImage} alt="Pug" />
    </Container>
  );
};

export default Footer;
