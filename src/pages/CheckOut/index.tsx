import "./style"
import {Box, Paragrafo, CheckoutContainer, MainContainer} from "./style"
import mercadoLogo from "../../assets/mercadoLogo.png"
import {MenuSearch} from "../../components/MenuSearch"
import Footer from "../../components/Footer"
import Cart from "../../components/Cart"
import { useCartContext } from "../../providers/CartProvider";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { useProfile } from "../../providers/Profile";
import api from "../../services";


const Checkout= () =>{
const { cartProducts, total } = useCartContext();
const { userInfo } = useProfile();
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("@yumi:token") || "null");

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
        window.location.href = `https://yumistoreapi.herokuapp.com/payment/checkout/${
          resp.data.order._id
        }/${userInfo.email}/${"Pagamento Yumi Store"}/${total}`;
      })
      .catch(() => {
        toast.error("Ops, algo de errado aconteceu!");
      });
  };


    return (
<div>
<MenuSearch/>
    <MainContainer>
    <h1>Resumo do Pedido:</h1>

    <Box className="resume">
        {cartProducts.map((item, index) => (
                <Cart product={item.product} quantity={item.quantity} key={index} />
            ))}
    </Box>

    <CheckoutContainer className="check-out">
        <Paragrafo className="subtotal">Subtotal: R$ {total}</Paragrafo>
        <button onClick={handlePayment}>Finalizar Compra</button>
        <img className="logo" src={mercadoLogo} alt="imagem"/>
        </CheckoutContainer> 
</MainContainer>

<Footer />  
</div>
    )
}

export default Checkout

