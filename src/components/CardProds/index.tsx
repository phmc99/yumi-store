import { AiTwotoneStar } from "react-icons/ai";
import {
  ContainerProd,
  CardDivisor,
  ContainerInfo,
  ContainerPrice,
  AddButton,
} from "./styles";
import { useProducts } from "../../providers/Products";
import { IProducts } from "../../types";

interface ICardProdsProps {
  prod: IProducts;
}

const CardProds = ({ prod }: ICardProdsProps) => {
  const { addProduct } = useProducts();

  return (
    <ContainerProd>
      <CardDivisor>
        <div key={prod.id}>
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
            <AddButton onClick={() => addProduct(prod)}>Comprar</AddButton>
          </ContainerPrice>
        </div>
      </CardDivisor>
    </ContainerProd>
  );
};

export default CardProds;
