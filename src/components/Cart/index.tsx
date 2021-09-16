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

interface ICartProps {
  prod: IProductCart;
  type: string;
}

const Cart = ({ prod, type }: ICartProps) => {
  const { removeCart, cartProducts, updateTotal } = useCartContext();
  const [currentQuantity, setCurrentQuantity] = useState<number>(prod.quantity);

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
          <Image src={prod.product.image_url} alt="roupa" />
          <ParagrafoProduct>{prod.product.name}</ParagrafoProduct>
          <div className="input-quantity">
            {type === "cart" && (
              <Button onClick={() => handleSubQuantity(prod.product)}>
                <AiOutlineMinusSquare size="30px" color={"8F4BC7"} />
              </Button>
            )}
            {type === "finish" ? (
              <p>
                Quantidade: &nbsp;<b>{currentQuantity}</b>
              </p>
            ) : (
              <p>{currentQuantity}</p>
            )}
            {type === "cart" && (
              <Button onClick={() => handlePlusQuantity(prod.product)}>
                <AiOutlinePlusSquare size="30px" color={"8F4BC7"} />
              </Button>
            )}
          </div>
          <TitlePrice>
            R${" "}
            {(
              Number(prod.product.price.replace(",", ".")) * currentQuantity
            ).toFixed(2)}
          </TitlePrice>
          {type === "cart" && (
            <Button onClick={() => removeCart(prod)}>
              <BsTrash size="30px" />
            </Button>
          )}
        </ListCart>
      </Box>
    </>
  );
};

export default Cart;
