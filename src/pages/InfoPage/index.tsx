import InfoClient from "../../components/InfoClient";
import { CepCard } from "../../components/CepSearch";
import { Container } from "./styles";
import Footer from "../../components/Footer";
import { MenuSearch } from "../../components/MenuSearch";

const InfoPage = () => {
  return (
    <>
      <MenuSearch />
      <Container>
        <InfoClient />
        <CepCard />
      </Container>
      <Footer />
    </>
  );
};

export default InfoPage;
