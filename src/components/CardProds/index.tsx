import { AiTwotoneStar } from "react-icons/ai";
import { GiBrokenHeart } from "react-icons/gi";
import {
  ContainerProd,
  CardDivisor,
  ContainerInfo,
  ContainerPrice,
  AddButton,
} from "./styles";
import { useProducts } from "../../providers/Products";
import { IProducts } from "../../types";
import { useFavoriteContext } from "../../providers/Favorites";

interface ICardProdsProps {
  prod: IProducts;
  favorite?: boolean;
}

const CardProds = ({ prod, favorite = false }: ICardProdsProps) => {
  const { addProduct } = useProducts();
  const { handleRemoveFavorite } = useFavoriteContext();

  return (
    <ContainerProd>
      <CardDivisor>
        <div key={prod._id}>
          <ContainerInfo>
            <img src={prod.image_url} alt={prod.image_url} />
            <h3>{prod.name}</h3>
          </ContainerInfo>
          <ContainerPrice>
            <p>
              <AiTwotoneStar color="var(--yellow)" />
              <AiTwotoneStar color="var(--yellow)" />
              <AiTwotoneStar color="var(--yellow)" />
              <AiTwotoneStar color="var(--yellow)" />
              <AiTwotoneStar color="var(--yellow)" />
            </p>
            <h4>R${prod.price}</h4>
            <h4 className="club-price">
              R${prod.member_price}
              <span className="club-logo">
                <span className="logo-tar">&nbsp; Yumi</span>Club
              </span>
            </h4>
            {favorite ? (
              <button
                className="favButton"
                onClick={() => handleRemoveFavorite(prod)}
              >
                <GiBrokenHeart />
                <p>Remover dos favoritos</p>
              </button>
            ) : (
              <AddButton onClick={() => addProduct(prod)}>Comprar</AddButton>
            )}
          </ContainerPrice>
        </div>
      </CardDivisor>
    </ContainerProd>
  );
};

export default CardProds;
