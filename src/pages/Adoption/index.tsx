import { MenuSearch } from "../../components/MenuSearch"
import "./style"
import apoio from "../../assets/apoio.png"
import {MainContainer} from "./style"
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
        <Footer/>
        </div>
    )
}
export default Adoption