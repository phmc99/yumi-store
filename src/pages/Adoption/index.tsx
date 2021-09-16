import { MenuSearch } from "../../components/MenuSearch"
import "./style"
import apoio from "../../assets/apoio.png"
import sos from "../../assets/sos.png"
import {MainContainer, MainContainer2} from "./style"
import Footer from "../../components/Footer"

const Adoption = () => {
    return (
        <div>
    <MenuSearch/>
        <MainContainer>
           <h1>Yumi Apoia</h1>
           <h3>Acolher é um ato de amor!</h3>
           
        <div className="centered-cart">
           <img className="ong" src={apoio} alt="icons"/>
           <p className="description"> A ONG SOS CIDADANIA ANIMAL é uma organização não-governamental, sem fins lucrativos, 
               fundada em janeiro de 2009 para oferecer auxílio aos animais necessitados que estão
               abandonados à sua própria sorte. Nossa missão sempre foi a de mudar a realidade destes
               que muitas vezes estão completamente indefesos, vítimas da crueldade e do abuso, enquanto
               tentam sobreviver sem proteção.
               </p>
            <div className="contact">
                <p>Rua Espírito Santo - 746 
                   Bairro Cerâmica - 
                   São Caetano do Sul - SP.
                   Segunda a Sexta, 
                   das 9h às 17h30 - 
                   Sábados, das 9h às 16h.
                   (11) 3755-3001 / 
                   (11) 9.7077-5863
                   <button className="btn-info"><a rel="noreferrer" target={"_blank"} href={"https://ongsoscidadaniaanimal.org/"}> Saiba mais </a></button>
                </p>
            </div>
        </div>
        </MainContainer>
        <MainContainer2>
           
        <div className="centered-cart-2">
           <img className="ong-2" src={sos} alt="icons"/>
                <p className="description-2"> 
                Desde 1989, a SOS Vida Animal promove um trabalho para 
                a comunidade de Londrina e região, mantido por voluntários que se dedicam 
                à causa animal.Nós não acolhemos animais, e sim promovemos o bem-estar de 
                cães e gatos, através de eventos para adoções e campanhas de conscientização. As Feiras de Adoção de Cães e Gatos, promovidas pela SOS Vida Animal, são realizadas
                para que você encontre o seu novo melhor amigo.
                Elas acontecem todos os sábados (exceto em feriados). Adotar é um gesto de amor,
                e os nossos animais estão esperando por você! Confira o calendário das feirinhas e apareça por lá.
                </p>
            <div className="contact-2">
                <p>
                Doações: Banco Itaú | Agência 4019 | Conta Corrente 07820-5
                Doações: Banco do Brasil | Agência 5047-4 | Conta Corrente 7507-8
                   <button className="btn-info-2"><a rel="noreferrer" target={"_blank"} href={"https://www.sosvidaanimal.org.br/"}> Saiba mais </a></button>
                </p>
            </div>
        </div>
        </MainContainer2>
        <Footer/>
        </div>
    )
}
export default Adoption