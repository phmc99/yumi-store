import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useCartContext } from "../../providers/CartProvider";
import { IProducts } from "../../types";
import {
  ListCart,
  Image,
  ParagrafoProduct,
  Button,
  TitlePrice,
} from "./styles";

interface ProductsProps {
  product: IProducts;
}

const Cart = ({ product }: ProductsProps) => {
  const { removeCart, addCart } = useCartContext();

  return (
    <>
      <div>
        <ListCart>
          <Image src={product.image_url} alt="roupa" />
          <ParagrafoProduct>{product.name}</ParagrafoProduct>
          <Button onClick={() => addCart(product)}>
            <AiOutlinePlusSquare size="25px" />
          </Button>
          1
          <Button onClick={() => removeCart(product)}>
            <AiOutlineMinusSquare size="25px" />
          </Button>
          <TitlePrice>R$ {product.price}</TitlePrice>
          <Button style={{ marginLeft: "7rem" }}>
            <BsTrash size="20px" />
          </Button>
        </ListCart>
      </div>
    </>
  );
};

export default Cart;
