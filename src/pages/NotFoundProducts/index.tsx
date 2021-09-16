import { Pesquisou, AfterPesquisou } from "./style";
import { useLocation, Link } from "react-router-dom";
import { MenuSearch } from "../../components/MenuSearch";
import Footer from "../../components/Footer";

export const NotFoundFilteredProducts = () => {
  const location = useLocation<string>();

  return (
    <>
      <MenuSearch />
      <Pesquisou>
        <h2>Você pesquisou por:</h2>
        <p>{location.state}</p>
      </Pesquisou>
      <AfterPesquisou>
        <h2>Não encontrado...</h2>
        <Link to="/">Voltar as compras</Link>
      </AfterPesquisou>
      <Footer />
    </>
  );
};
