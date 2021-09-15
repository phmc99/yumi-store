import Footer from "../../components/Footer";
import { MenuSearch } from "../../components/MenuSearch";
import PersonCard from "../../components/PersonCard";
import { Container } from "./styles";

const AboutUs = () => {
  return (
    <>
      <MenuSearch />

      <Container>
        <h1 className="about">Quem somos</h1>
        <ul>
          <li>
            <PersonCard
              name="João Pedro da Silva Santos"
              role="Quality Assurance"
              gitHub="JoaoPedro2021"
              linkedin="jo%C3%A3o-pedro-1196281a8"
              image="https://ca.slack-edge.com/TQZR39SET-U01P21B1YD7-28cedf666933-512"
            />
          </li>
          <li>
            <PersonCard
              name="Luiz Victor Bispo Oliveira"
              role="Quality Assurance"
              gitHub="luizvictor19"
              linkedin="luiz-victor-bispo-oliveira-bb6007170"
              image="https://ca.slack-edge.com/TQZR39SET-U01SCCZS11T-26bf72c9a4b0-512"
            />
          </li>
          <li>
            <PersonCard
              name="Mein Mieko Chang"
              role="Product Owner"
              gitHub="mein-chang"
              linkedin="meinmiekochang"
              image="https://ca.slack-edge.com/TQZR39SET-U01SANRJK6U-53c89c71fc54-512"
            />
          </li>
          <li>
            <PersonCard
              name="Pedro Henrique Moraes da Costa"
              role="Tech Leader"
              gitHub="phmc99"
              linkedin="phmc99"
              image="https://ca.slack-edge.com/TQZR39SET-U01S3U1TWVD-569be651d7ed-512"
            />
          </li>
          <li>
            <PersonCard
              name="Rafael Monteiro de Oliveira"
              role="Quality Assurance"
              gitHub="raf2019"
              linkedin="rafael-oliveira-0a917981"
              image="https://ca.slack-edge.com/TQZR39SET-U01R32Q7L06-b502988eedd9-512"
            />
          </li>
          <li>
            <PersonCard
              name="Weslley Bastos"
              role="Scrum Master"
              gitHub="WeslleyBastos"
              linkedin="wessbastos"
              image="https://ca.slack-edge.com/TQZR39SET-U01K02CQG3T-7d49db876efb-512"
            />
          </li>
        </ul>
      </Container>

      <Footer />
    </>
  );
};

export default AboutUs;
