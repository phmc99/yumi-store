import { useProducts } from "../../providers/Products";
import {
  ContainerProd,
  ContainerCart,
  ContainerInfo,
  ContainerPrice,
  Pesquisou,
} from "./style";
import { useLocation } from "react-router-dom";
import { MenuSearch } from "../../components/MenuSearch";

export const FilteredProducts = () => {
  const { products, addProduct } = useProducts();
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

  return (
    <>
      <MenuSearch />
      <div>
        <Pesquisou>
          <h2>Você pesquisou por:</h2>
          <p>{location.state}</p>
        </Pesquisou>
        {filteredProducts.map((prod, index) => (
          <ContainerProd key={index}>
            <img src={prod.image_url} alt={prod.image_url} />
            <ContainerCart>
              <ContainerInfo>
                <h4>{prod.name}</h4>
                <p>
                  {" "}
                  Descrição: <br></br>
                  <br></br>
                  {prod.description}
                </p>
              </ContainerInfo>
              <ContainerPrice>
                {/* {products.map((prod, index) => (
                    <button key={index}>
                        {prod.sizes} 
                    </button>
                ))} */}
                <h4>R${prod.price}</h4>
                <h4 className="club-price">
                  R${prod.member_price} <span className="club-logo">Yumi</span>
                  Club
                </h4>
                <button onClick={() => addProduct(prod)}>Comprar</button>
              </ContainerPrice>
            </ContainerCart>
            <p> {prod.rating.comments}</p>
          </ContainerProd>
        ))}
      </div>
    </>
  );
};
