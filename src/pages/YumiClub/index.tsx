import "./style";
import brindeImg from "../../assets/brindeImg.png";
import econo1 from "../../assets/econo1.png";
import econo2 from "../../assets/econo2.png";
import econo3 from "../../assets/econo3.png";
import econo4 from "../../assets/econo4.png";
import yumiClub from "../../assets/yumiClub.png";
import {
  ContainerPage,
  Containersub,
  YumiClubSub,
  MainContainer,
  YumiClubPage,
} from "./style";
import { AiTwotoneStar } from "react-icons/ai";
import { MenuSearch } from "../../components/MenuSearch";
import Footer from "../../components/Footer";
import toast from "react-hot-toast";
import { useProfile } from "../../providers/Profile";
import { useHistory } from "react-router";
import api from "../../services";

export const YumiClub = () => {
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("@yumi:token") || "null");

  const { userInfo } = useProfile();

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
          total_price: `69.90`,
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
          `https://yumistoreapi.herokuapp.com/payments/checkout/${
            resp.data.order._id
          }/${userInfo.email}/${"Assinatura Yumi Club"}/69.90`
        );
      })
      .catch(() => {
        toast.error("Ops, algo de errado aconteceu!");
      });

    await api.put(`/auth/user/${userInfo._id}`, { yumiClub: true });
  };

  return (
    <YumiClubPage>
      <MenuSearch />
      <MainContainer>
        <ContainerPage>
          <div className="title">
            <h1> Yumi Club </h1>
            <h2>O Seu clube de assinaturas</h2>
          </div>

          <div className="flex">
            <div className="left">
              <div className="boxes">
                <div className="announcement">
                  <h4> Na primeira compra </h4>
                  <h2> 50% off</h2>
                  <span> + </span>
                  <h2>Frete Gratis</h2>
                </div>

                <div className="announcement">
                  <h4> Sempre </h4>
                  <h2> 15% off</h2>
                  <span> + </span>
                  <h2>Brinde Exclusivo</h2>
                </div>
              </div>

              <Containersub>
                <div className="econ">
                  <p> Economize em um ano até: R$ 900,00 </p>
                  <div className="econ-sub-flex">
                    <div className="econ-sub">
                      <img className="icons" src={econo1} alt="icons" />
                      <span> R$320,00 em Rações</span>
                    </div>
                    <div className="econ-sub">
                      <img className="icons" src={econo2} alt="icons" />
                      <span> R$19,00 em Brinquedos</span>
                    </div>
                    <div className="econ-sub">
                      <img className="icons" src={econo3} alt="icons" />
                      <span> R$319,00 em Medicamentos</span>
                    </div>
                    <div className="econ-sub">
                      <img className="icons" src={econo4} alt="icons" />
                      <span> R$159,00 em Higiene/Beleza</span>
                    </div>
                  </div>
                </div>
              </Containersub>
            </div>
            <figure>
              <p>Brinde do mês</p>
              <img className="gift" src={brindeImg} alt="imagem" />
            </figure>
          </div>
        </ContainerPage>
        <YumiClubSub>
          <img className="logo" src={yumiClub} alt="logo" />
          <p>
            {" "}
            Assinatura Mensal YumiClub
            <div>
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
            </div>
          </p>
          <p>R$ 69,90</p>

          <button onClick={handlePayment}> Assine Agora </button>
        </YumiClubSub>
      </MainContainer>
      <Footer />
    </YumiClubPage>
  );
};
