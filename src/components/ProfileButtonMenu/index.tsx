import { ModalProfile } from "./style";
import { useHistory } from "react-router";
import { useProfile } from "../../providers/Profile";
import { Link } from "react-router-dom";

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
    history.push("/login");
  };

  return (
    <ModalProfile
      onMouseLeave={() => setProfileButtonClicked(false)}
      onMouseEnter={() => setProfileButtonClicked(true)}
      profileButtonClicked={profileButtonClicked}
    >
      {token !== null ? (
        <>
          <h2>{userInfo.user.name}</h2>
          <Link to={{}}>Meus Dados</Link>
          <button onClick={() => handleLogout()}>Sair</button>
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
    </ModalProfile>
  );
};

export default ProfileMenu;
