import InfoClient from "../../components/InfoClient";
import { CepCard } from "../../components/CepSearch";
import { Container } from "./styles";

const InfoPage = () => {
    
  return (
    <>
      <Container>
          <InfoClient />
          <CepCard />
      </Container>
    </>
  );
};

export default InfoPage;
