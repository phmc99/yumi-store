import { AiTwotoneStar } from "react-icons/ai";
import { GiBrokenHeart } from "react-icons/gi";
import {
  ContainerProd,
  CardDivisor,
  ContainerInfo,
  ContainerPrice,
  AddButton,
} from "./styles";
import { IProducts } from "../../types";
import { useFavoriteContext } from "../../providers/Favorites";
import Rating from "react-rating";
import { useHistory } from "react-router";

interface ICardProdsProps {
  prod: IProducts;
  favorite?: boolean;
}

const CardProds = ({ prod, favorite = false }: ICardProdsProps) => {
  const { handleRemoveFavorite } = useFavoriteContext();

  const history = useHistory();

  const seeMore = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <ContainerProd>
      <CardDivisor>
        <div key={prod._id} className="card">
          <ContainerInfo>
            <img src={prod.image_url} alt={prod.image_url} />
            <h3>{prod.name}</h3>
          </ContainerInfo>
          <ContainerPrice>
            <p className="rating">
              <Rating
                initialRating={
                  prod.rating.grades.reduce((sum, num) => sum + num, 0) /
                  prod.rating.grades.length
                }
                readonly
                emptySymbol={<AiTwotoneStar color="var(--gray)" />}
                placeholderSymbol={<AiTwotoneStar color="var(--yellow)" />}
                fullSymbol={<AiTwotoneStar color="var(--yellow)" />}
              />
            </p>
            <span className="number">({prod.rating.grades.length})</span>
            <h4>R${prod.price}</h4>
            <h4 className="club-price">
              R${prod.member_price}
              <span className="club-logo">
                <span className="logo-tar">&nbsp; Yumi</span>Club
              </span>
            </h4>
            {favorite && (
              <button
                className="favButton"
                onClick={() => handleRemoveFavorite(prod)}
              >
                <GiBrokenHeart />
                <p>Remover dos favoritos</p>
              </button>
            )}

            <AddButton onClick={() => seeMore(prod._id)}>Ver mais</AddButton>
          </ContainerPrice>
        </div>
      </CardDivisor>
    </ContainerProd>
  );
};

export default CardProds;
