import Cart from "../../components/Cart";
import { useCartContext } from "../../providers/CartProvider";
import {
  Div,
  Titulo,
  ButtonPagamento,
  DivPagamento,
  Paragrafo,
} from "./styles";

const CartPage = () => {
  const { cartProduct } = useCartContext();

  return (
    <div>
      <Div>
        <Titulo>Meu carrinho:</Titulo>
        <Paragrafo>
          Subtotal: R$
          {/* {cartProducts.reduce((acc, current) => acc + current.price, 0).toFixed(2)} */}
        </Paragrafo>
      </Div>

      <DivPagamento>
        <ButtonPagamento>Confirmar pedido</ButtonPagamento>
      </DivPagamento>
      {cartProduct.map((item, index) => (
        <Cart products={item} key={index} />
      ))}
    </div>
  );
};

export default CartPage;
