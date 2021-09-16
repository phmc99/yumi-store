import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services";

interface IUserInfo {
  yumiClub: boolean;
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: IAdress;
}
interface IAdress {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

interface IProfileContextData {
  userInfo: IUserInfo;
  setUserInfo: (item: IUserInfo) => void;
  getUser: () => void;
}

interface IProviderProps {
  children: ReactNode;
}

const ProfileContext = createContext<IProfileContextData>(
  {} as IProfileContextData
);

export const ProfileProvider = ({ children }: IProviderProps) => {
  const [userInfo, setUserInfo] = useState({} as IUserInfo);

  const id = JSON.parse(localStorage.getItem("@yumi:id") || "null");

  const getUser = async () => {
    const resp = await api.get(`/auth/user/${id}`);
    setUserInfo(resp.data.user);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <ProfileContext.Provider value={{ userInfo, setUserInfo, getUser }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
