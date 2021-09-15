import Cart from "../../components/Cart";
import InfoClient from "../../components/InfoClient";
import { MenuSearch } from "../../components/MenuSearch";
import { useCartContext } from "../../providers/CartProvider";
import {
  Div,
  Titulo,
  ButtonPagamento,
  DivPagamento,
  Paragrafo,
  Box
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

      <Box>
        <InfoClient />
      </Box>
    </div>
  );
};

export default CartPage;
