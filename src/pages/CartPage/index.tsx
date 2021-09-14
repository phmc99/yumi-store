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
  const { cartProducts } = useCartContext();

  /* const total = cartProducts.reduce((a,b) => a + b.price, 0)
  console.log(cartProducts) */
  return (
    <div>
      <MenuSearch />
      <Div>
        <Titulo>Meu carrinho:</Titulo>
        <Paragrafo>
          Subtotal: R$ {}
        </Paragrafo>
      </Div>

      <DivPagamento>
        <ButtonPagamento>Confirmar pedido</ButtonPagamento>
      </DivPagamento>
      {cartProducts.map((item, index) => (
        <Cart product={item} key={index} />
      ))}
    </div>
  );
};

export default CartPage;
