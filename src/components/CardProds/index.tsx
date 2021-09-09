import { AiTwotoneStar } from "react-icons/ai";
import {
  ContainerProd,
  CardDivisor,
  ContainerPrice,
  AddButton,
} from "./styles";

const CardProds = ({ prod }: any) => {
  return (
    <ContainerProd>
      <CardDivisor>
        <div key={prod.index}>
          <ContainerPrice>
            <img src={prod.image_url} alt={prod.image_url} />
            <h3>
              {prod.name}
              <p>
                <AiTwotoneStar color="var(--yellow)" />
                <AiTwotoneStar color="var(--yellow)" />
                <AiTwotoneStar color="var(--yellow)" />
                <AiTwotoneStar color="var(--yellow)" />
                <AiTwotoneStar color="var(--yellow)" />
              </p>
            </h3>
            <h4>R${prod.price}</h4>
            <h4 className="club-price">
              R${prod.member_price}
              <span className="club-logo">
                <span className="logo-tar">&nbsp; Yumi</span>Club
              </span>
            </h4>
            <AddButton>Comprar</AddButton>
          </ContainerPrice>
        </div>
      </CardDivisor>
    </ContainerProd>
  );
};

export default CardProds;
