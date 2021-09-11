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
  Box
} from "./styles";

interface ProductsProps {
  product: IProducts;
}

const Cart = ({ product }: ProductsProps) => {
  const { removeCart, addCart } = useCartContext();

  return (
    <>
      <Box>
        <ListCart>
          <Image src={product.image_url} alt="roupa" />
          <ParagrafoProduct>{product.name}</ParagrafoProduct>
          <Button onClick={() => addCart(product)}>
            <AiOutlinePlusSquare size="30px" color={"8F4BC7"} />
          </Button>
          1
          <Button onClick={() => removeCart(product)}>
            <AiOutlineMinusSquare size="30px" color={"8F4BC7"}/>
          </Button>
          <TitlePrice>R$ {product.price}</TitlePrice>
          <Button>
            <BsTrash size="30px" />
          </Button>
        </ListCart>
      </Box>
    </>
  );
};

export default Cart;
