import { useProducts } from "../../providers/Products";
import { AiTwotoneStar } from 'react-icons/ai';
import { ContainerProd, CardDivisor, ContainerPrice, AddButton} from "./style"
// mistypeandfilter

export const ProductCard = () => {
    const { products } = useProducts();

    return(
    <ContainerProd>
        {products.map((prod, index) => (
        <CardDivisor>
        <div key={index}>
            <ContainerPrice>
                <img src={prod.image_url} alt={prod.image_url} /> 
                <h3>{prod.name}  <AiTwotoneStar color="var(--yellow)"/>  <AiTwotoneStar color="var(--yellow)"/> <AiTwotoneStar color="var(--yellow)"/> <AiTwotoneStar color="var(--yellow)"/> <AiTwotoneStar color="var(--yellow)"/> </h3>
                <h4>R${prod.price}</h4>
                <h4 className="club-price">R${prod.member_price}  <span className="club-logo"><span className="logo-tar">Yumi</span>Club</span></h4>
                <AddButton>Comprar</AddButton>
            </ContainerPrice>
        </div>
        </CardDivisor>
        ))}
    </ContainerProd>
    )}