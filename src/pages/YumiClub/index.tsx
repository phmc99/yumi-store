import "./style"
import brindeImg from "../../assets/brindeImg.png"
import econo1 from "../../assets/econo1.png"
import econo2 from "../../assets/econo2.png"
import econo3 from "../../assets/econo3.png"
import econo4 from "../../assets/econo4.png"
import yumiClub from "../../assets/yumiClub.png"
import {ContainerPage, Containersub, YumiClubSub, MainContainer} from "./style"
import { AiTwotoneStar } from "react-icons/ai";
import { MenuSearch } from "../../components/MenuSearch"
import Footer from "../../components/Footer"

const YumiClub = () => {
return(
    <div>
<MenuSearch/>
    <MainContainer>
        <ContainerPage>
        <h1> Yumi Club </h1>
         <h2>O Seu clube de assinaturas</h2> 
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
        <figure>
            <div className="circular-promo"><p>Brinde do mês</p></div>
            <img className="gift" src={brindeImg} alt="imagem"/>
        </figure>
    
    <Containersub>
        <div className="econ">
            <p> Economize em um ano até: R$ 900,00 </p>
        <div className="econ-sub">
        <img className="icons" src={econo1} alt="icons"/>
        <span> R$320,00 em Rações</span>
        </div>
        <div className="econ-sub">
        <img className="icons" src={econo2} alt="icons"/>
        <span> R$19,00 em Brinquedos</span>
        </div>
        <div className="econ-sub">
        <img className="icons" src={econo3} alt="icons"/>
        <span> R$319,00 em Medicamentos</span>
        </div>
        <div className="econ-sub">
        <img className="icons" src={econo4} alt="icons"/>
        <span> R$159,00 em Higiene/Beleza</span>
        </div>
        </div>
    </Containersub>
    </ContainerPage>
    <YumiClubSub>
    <img className="logo" src={yumiClub} alt="logo"/>
    <p> Assinatura Mensal YumiClub
    <div>
    <AiTwotoneStar color="yellow"/>
    <AiTwotoneStar color="yellow"/>
    <AiTwotoneStar color="yellow"/>
    <AiTwotoneStar color="yellow"/>
    <AiTwotoneStar color="yellow"/>
    </div>
    </p>
    <p>R$ 69,90</p>

    <button> Assine Agora </button>
    </YumiClubSub>
</MainContainer>
<Footer/>
    </div>
)
}
export default YumiClub