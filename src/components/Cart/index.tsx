import { useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useCartContext } from "../../providers/CartProvider";
import { IProductCart, IProducts } from "../../types";
import {
  ListCart,
  Image,
  ParagrafoProduct,
  Button,
  TitlePrice,
  Box,
} from "./styles";

const Cart = ({ product, quantity }: IProductCart) => {
  const { removeCart, cartProducts, updateTotal } = useCartContext();
  const [currentQuantity, setCurrentQuantity] = useState<number>(quantity);

  const handlePlusQuantity = (p: IProducts) => {
    setCurrentQuantity(currentQuantity + 1);
    cartProducts.map((item) => {
      if (item.product._id === p._id) {
        item.quantity++;
      }
      return item;
    });
    updateTotal();
  };

  const handleSubQuantity = (p: IProducts) => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
      cartProducts.map((item) => {
        if (item.product._id === p._id) {
          item.quantity--;
        }
        return item;
      });

      updateTotal();
    }
  };

  return (
    <>
      <Box>
          <ListCart>
            <Image src={product.image_url} alt="roupa" />
            <ParagrafoProduct>{product.name}</ParagrafoProduct>
            <div className="input-quantity">
              <Button onClick={() => handleSubQuantity(product)}>
                <AiOutlineMinusSquare size="30px" color={"8F4BC7"} />
              </Button>
              <p>{currentQuantity}</p>
              <Button onClick={() => handlePlusQuantity(product)}>
                <AiOutlinePlusSquare size="30px" color={"8F4BC7"} />
              </Button>
            </div>
            <TitlePrice>
              R${" "}
              {(
                Number(product.price.replace(",", ".")) * currentQuantity
              ).toFixed(2)}
            </TitlePrice>
            <Button onClick={() => removeCart({ product, quantity: quantity })}>
              <BsTrash size="30px" />
            </Button>
          </ListCart>
      </Box>
    </>
  );
};

export default Cart;
