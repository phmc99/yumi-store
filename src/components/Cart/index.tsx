import { useState } from "react";
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
  Box,
} from "./styles";

interface ProductsProps {
  product: IProducts;
}

const Cart = ({ product }: ProductsProps) => {
  const { removeCart, addCart, cartProducts } = useCartContext();

  const [quantityValue, setQuantityValue] = useState(product.__v);

  const handlePlusQuantity = () => {
    setQuantityValue(quantityValue + 1);
    cartProducts.map((item) => {
      if (item._id === product._id) {
        item.__v++;
      }
      return item;
    });
  };

  const handleSubQuantity = () => {
    if (quantityValue !== 0) {
      setQuantityValue(quantityValue - 1);
      cartProducts.map((item) => {
        if (item._id === product._id) {
          item.__v--;
        }
        return item;
      });
    }
  };

  console.log(cartProducts);
  return (
    <>
      <Box>
        <ListCart>
          <Image src={product.image_url} alt="roupa" />
          <ParagrafoProduct>{product.name}</ParagrafoProduct>
          <Button onClick={handleSubQuantity}>
            <AiOutlineMinusSquare size="30px" color={"8F4BC7"} />
          </Button>
          <p>{product.__v}</p>
          <Button onClick={handlePlusQuantity}>
            <AiOutlinePlusSquare size="30px" color={"8F4BC7"} />
          </Button>
          <TitlePrice>R$ {parseInt(product.price) * quantityValue}</TitlePrice>
          <Button>
            <BsTrash size="30px" />
          </Button>
        </ListCart>
      </Box>

      {console.log(quantityValue)}
    </>
  );
};

export default Cart;
