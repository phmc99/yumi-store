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
  const { cartProducts } = useCartContext();

  const valorProducts = cartProducts.map((item) =>
    item.price.replace(",", ".")
  );

  const valorTotal = valorProducts.map(Number);

  return (
    <div>
      <MenuSearch />
      <Div>
        <Titulo>Meu carrinho:</Titulo>

        <Paragrafo>
          Subtotal: R$
          {valorTotal.reduce((acc, current) => acc + current, 0).toFixed(2)}
        </Paragrafo>
      </Div>

      <DivPagamento>
        <ButtonPagamento>Confirmar pedido</ButtonPagamento>
      </DivPagamento>
      {cartProducts.map((item, index) => (
        <Cart product={item} key={index} />
      ))}

      <Box>
        <InfoClient />
      </Box>
    </div>
  );
};

export default CartPage;
