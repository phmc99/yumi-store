import { useEffect } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Cart from "../../components/Cart";
import Footer from "../../components/Footer";
import InfoClient from "../../components/InfoClient";
import { MenuSearch } from "../../components/MenuSearch";
import { useCartContext } from "../../providers/CartProvider";
import { useProfile } from "../../providers/Profile";
import api from "../../services";
import {
  Div,
  Titulo,
  ButtonPagamento,
  DivPagamento,
  Paragrafo,
  Box,
} from "./styles";

const CartPage = () => {
  const { cartProducts, total } = useCartContext();
  const { userInfo, getUser } = useProfile();
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("@yumi:token") || "null");

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handlePayment = async () => {
    if (token === null) {
      history.push("/login");
      toast.error("Faça o login para concluir a compra!");
    }

    await api
      .post(
        "/orders",
        {
          cart: [],
          total_price: `${total}`,
          payment: {
            isPaid: false,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => {
        window.open(
          `https://yumistoreapi.herokuapp.com/payment/checkout/${
            resp.data.order._id
          }/${userInfo.email}/${"Pagamento Yumi Store"}/${total}`
        );
      })
      .catch(() => {
        toast.error("Ops, algo de errado aconteceu!");
      });
  };

  return (
    <div>
      <MenuSearch />
      {cartProducts.length !== 0 ? (
        <>
          <Div>
            <Titulo>Meu carrinho</Titulo>
          </Div>
          <Box>
            <div>
              {cartProducts.map((item, index) => (
                <Cart
                  product={item.product}
                  quantity={item.quantity}
                  key={index}
                />
              ))}
            </div>

            <div>
              <DivPagamento>
                <Paragrafo>Subtotal: R$ {total}</Paragrafo>

                <InfoClient />
                <ButtonPagamento onClick={handlePayment}>
                  Confirmar pedido
                </ButtonPagamento>
              </DivPagamento>
            </div>
          </Box>
        </>
      ) : (
        <Div>
          <Titulo>Carrinho vazio</Titulo>
          <Link to="/">Voltar as compras</Link>
        </Div>
      )}
      <Footer />
    </div>
  );
};

export default CartPage;
