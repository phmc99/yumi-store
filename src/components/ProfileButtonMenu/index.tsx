import { ModalProfile } from "./style";
import { GrFormClose } from "react-icons/gr"
import { useHistory } from "react-router";
 
interface CloseButton{
  setProfileButtonClicked: (toggle: boolean) => void;
}

const ProfileMenu = ({ setProfileButtonClicked }: CloseButton) => {

  const history = useHistory()

  const token = localStorage.getItem("token");

  const GoToLogin = () => {
    history.push("/login")
  }

  const GoToRegister = () => {
    history.push("/register")
  }

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <ModalProfile>
      {token !== null ? (
        <>
          <p>logado</p>
          <button onClick={() => handleLogout()}></button>
      </>

      ) : (
        <>
        <div>
        <p className="first">Já possui uma conta?</p>
          <p className="first">Acesse Aqui!</p>
        </div>
        <button onClick={() => GoToLogin()}>Entrar</button>
        <p className="ou">ou</p>
        <p className="aqui">Cadastre-se Aqui!</p>
        <button onClick={() => GoToRegister()}>Nova Conta</button>
        </>
      )}
      <button className="close" onClick={() => setProfileButtonClicked(false)}><GrFormClose style={{height: '20px', width: '20px'}} /></button>
    </ModalProfile>
  );
};

export default ProfileMenu;
