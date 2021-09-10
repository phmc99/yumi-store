import { useProducts } from "../../providers/Products";
import {
  ContainerProd,
  ContainerCart,
  ContainerInfo,
  ContainerPrice,
} from "./style";
// import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

export const Products = () => {
  const { products } = useProducts();


  return (
    <div>
      {products.map((prod, index) => (
        <ContainerProd key={index}>
          <img src={prod.image_url} alt={prod.image_url} />
          <ContainerCart>
            <ContainerInfo>
              <h4>{prod.name}</h4>
              <p>
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
              <button>Comprar</button>
            </ContainerPrice>
          </ContainerCart>
          <p> {prod.comments}</p>
        </ContainerProd>
      ))}
    </div>
  );
};
