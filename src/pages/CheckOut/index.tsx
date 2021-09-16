import "./style";
import { Box, Paragrafo, CheckoutContainer, MainContainer } from "./style";
import mercadoLogo from "../../assets/mercadoLogo.png";
import { MenuSearch } from "../../components/MenuSearch";
import Footer from "../../components/Footer";
import Cart from "../../components/Cart";
import { useCartContext } from "../../providers/CartProvider";
import toast from "react-hot-toast";
import { Redirect, useHistory, useParams } from "react-router";
import { useProfile } from "../../providers/Profile";
import api from "../../services";
import { Load } from "../../components/FormBox";
import { FadeLoader } from "react-spinners";
import { useState } from "react";

const Checkout = () => {
  const { cartProducts, total, resetCart } = useCartContext();
  const { userInfo } = useProfile();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState<boolean>(false);

  const token = JSON.parse(localStorage.getItem("@yumi:token") || "null");

  if (!token) {
    return <Redirect to="/" />;
  }

  const handlePayment = async () => {
    setLoading(true);

    if (token === null) {
      history.push("/login");
      toast.error("Faça o login para concluir a compra!");
    }

    window.open(
      `https://yumistoreapi.herokuapp.com/payments/checkout/${id}/${
        userInfo.email
      }/${"Pagamento Yumi Store"}/${total}`
    );

    console.log(token);

    await api
      .put(
        `/orders/${id}`,
        {
          payment: {
            isPaid: true,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        setLoading(false);
        toast.success("Seu pagamento foi enviado com sucesso!");
      })
      .catch(() => {
        setLoading(false);
      });

    resetCart();
    history.push("/");
  };

  return (
    <div>
      <MenuSearch />
      <MainContainer>
        <h1>Resumo do Pedido:</h1>

        <Box className="resume">
          {cartProducts.map((item, index) => (
            <Cart prod={item} type="finish" key={index} />
          ))}
        </Box>

        <CheckoutContainer className="check-out">
          <Paragrafo className="subtotal">Subtotal: R$ {total}</Paragrafo>
          <button onClick={handlePayment}>Finalizar Compra</button>
          <img className="logo" src={mercadoLogo} alt="imagem" />
        </CheckoutContainer>
      </MainContainer>

      <Footer />

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

export default Checkout;
