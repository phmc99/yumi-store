import { useProducts } from "../../providers/Products";
import { Category, More, Pesquisou } from "./style";
import { useLocation, Link } from "react-router-dom";
import { MenuSearch } from "../../components/MenuSearch";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import CardProds from "../../components/CardProds";

export const FilteredProducts = () => {
  const { products } = useProducts();
  const location = useLocation<string>();

  const filteredProducts = products.filter(({ name }) =>
    name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        location.state
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );
  const [NotFinded, setNotFinded] = useState<boolean>(false);

  if (filteredProducts.length === 0) {
    setNotFinded(true);
  }

  return (
    <>
      <MenuSearch />
      <Pesquisou>
        <h2>Você pesquisou por:</h2>
        <p>{location.state}</p>
        {NotFinded && <p>Não encontrado...</p>}
      </Pesquisou>
      <Category>
        {filteredProducts.map((item) => (
          <li key={item._id}>
            <CardProds prod={item} />
          </li>
        ))}
        <More>
          <Link to="/">
            <AiOutlinePlus />
          </Link>
        </More>
      </Category>
    </>
  );
};
