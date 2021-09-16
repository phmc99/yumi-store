import { ModalProfile } from "./style";
import { useHistory } from "react-router";
import { useProfile } from "../../providers/Profile";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import toast from "react-hot-toast";

interface CloseButton {
  profileButtonClicked: boolean;
  setProfileButtonClicked: (toggle: boolean) => void;
}

const ProfileMenu = ({
  profileButtonClicked,
  setProfileButtonClicked,
}: CloseButton) => {
  const history = useHistory();

  const { userInfo } = useProfile();

  const token = localStorage.getItem("@yumi:token");

  const GoToLogin = () => {
    history.push("/login");
  };

  const GoToRegister = () => {
    history.push("/register");
  };

  const handleLogout = () => {
    localStorage.clear();
    toast(<b>Até a próxima!</b>, {
      icon: "👋",
    });
    history.push("/");
  };

  return (
    <ModalProfile
      onMouseLeave={() => setProfileButtonClicked(false)}
      onMouseEnter={() => setProfileButtonClicked(true)}
      profileButtonClicked={profileButtonClicked}
    >
      {token !== null ? (
        <>
          <div className="engloba-nome">
            <BsPersonFill style={{ height: "70px", width: "70px" }} />
            <div className="nome">
              <h2>Olá,</h2>
              <h2>{userInfo.name}</h2>
            </div>
          </div>
          <div className="logado">
            <Link to="/info">
              Meus Dados <IoIosArrowForward className="icone" />
            </Link>
            <Link to="/favorite">
              Favoritos <IoIosArrowForward className="icone" />
            </Link>
            <Link to={{}} onClick={() => handleLogout()}>
              Sair
              <IoIosArrowForward className="icone" />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="deslogado">
            <p className="first">Já possui uma conta?</p>
            <p className="first">Acesse Aqui!</p>
          </div>
          <button onClick={() => GoToLogin()}>Entrar</button>
          <p className="ou">ou</p>
          <p className="aqui">Cadastre-se Aqui!</p>
          <button onClick={() => GoToRegister()}>Nova Conta</button>
        </>
      )}
    </ModalProfile>
  );
};

export default ProfileMenu;
