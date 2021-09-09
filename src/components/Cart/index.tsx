import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useCartContext } from "../../providers/CartProvider";
import {
  ListCart,
  Image,
  ParagrafoProduct,
  Button,
  TitlePrice,
} from "./styles";

interface Products {
  name: string;
  image_url: string;
  price: number;
}

interface ProductsProps {
  products: Products;
}

const Cart = ({ products }: ProductsProps) => {
  const { removeCart, addCart } = useCartContext();

  const { name, price, image_url } = products;

  return (
    <>
      <div>
        <ListCart>
          <Image src={image_url} alt="roupa" />
          <ParagrafoProduct>{name}</ParagrafoProduct>
          <Button onClick={() => addCart(products)}>
            <AiOutlinePlusSquare size="25px" />
          </Button>
          1
          <Button onClick={() => removeCart(products)}>
            <AiOutlineMinusSquare size="25px" />
          </Button>
          <TitlePrice>R$ {price}</TitlePrice>
          <Button style={{ marginLeft: "7rem" }}>
            <BsTrash size="20px" />
          </Button>
        </ListCart>
      </div>
    </>
  );
};

export default Cart;
