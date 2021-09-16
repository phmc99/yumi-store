import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import Cart from "../../components/Cart";
import Footer from "../../components/Footer";
import { Load } from "../../components/FormBox";
import InfoClient from "../../components/InfoClient";
import { MenuSearch } from "../../components/MenuSearch";
import { useCartContext } from "../../providers/CartProvider";
import { useLocalizaCep } from "../../providers/CepProvider";
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
  const history = useHistory();
  const { getUser } = useProfile();
  const { ceps } = useLocalizaCep();
  const [loading, setLoading] = useState<boolean>(false);

  const token = JSON.parse(localStorage.getItem("@yumi:token") || "null");

  const handlePayment = async () => {
    if (token === null) {
      history.push("/login");
      toast.error("Faça o login para concluir a compra!");
    }

    setLoading(true);

    await api
      .post(
        "/orders",
        {
          cart: cartProducts,
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
        toast.success("Pedido solicitado! Agora conclua o pagamento.");
        history.push(`/checkout/${resp.data.order._id}`);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);

        toast.error("Ops, algo de errado aconteceu!");
      });
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ceps]);

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
                <Cart prod={item} type="cart" key={index} />
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
          <Footer />
        </>
      ) : (
        <Div>
          <Titulo>Carrinho vazio</Titulo>
          <Link to="/">Voltar as compras</Link>
        </Div>
      )}

      {loading && (
        <Load>
          <div className="spinner">
            <FadeLoader
              loading={loading}
              color="var(--purple)"
              height={30}
              radius={8}
              width={7}
              margin={7}
            />
          </div>
        </Load>
      )}
    </div>
  );
};

export default CartPage;
