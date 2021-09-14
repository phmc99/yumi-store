import Cart from "../../components/Cart";
import { MenuSearch } from "../../components/MenuSearch";
import { useCartContext } from "../../providers/CartProvider";
import {
  Div,
  Titulo,
  ButtonPagamento,
  DivPagamento,
  Paragrafo,
} from "./styles";

const CartPage = () => {
  const { cartProducts, total } = useCartContext();

  return (
    <div>
      <MenuSearch />
      <Div>
        <Titulo>Meu carrinho:</Titulo>

        <Paragrafo>Subtotal: R$ {total}</Paragrafo>
      </Div>

      <DivPagamento>
        <ButtonPagamento>Confirmar pedido</ButtonPagamento>
      </DivPagamento>
      {cartProducts.map((item, index) => (
        <Cart product={item.product} quantity={item.quantity} key={index} />
      ))}
    </div>
  );
};

export default CartPage;
