import { Link } from "react-router-dom";
import ErrorPug from "../../assets/error.png";
import { Container } from "./styles";
import { MenuSearch } from "../../components/MenuSearch";

const Error = () => {
  return (
    <>
      <MenuSearch />
      <Container>
        <h1>Error 404</h1>
        <p>É, não encontramos</p>
        <p className="more">nada para esta busca...</p>
        <Link to="/">Bora voltar para as compras!</Link>
        <img src={ErrorPug} alt="Pug" />
        <div className="space"></div>
      </Container>
    </>
  );
};

export default Error;
