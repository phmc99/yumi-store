import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface ILocation {
  cep: string;
  logradouro: string;
  uf: string;
  localidade: string;
  bairro: string;
  gia: string;
}

interface ILocationProps {
  children: ReactNode;
}

interface LocationData {
  ceps: ILocation;
  cepNumber: any;
  setCepNumber: any;
  setCeps: any;
  handleSearch: (local: ILocation) => void;
}

const LocalizaCepContext = createContext<LocationData>({} as LocationData);

export const LocalizaCepProvider = ({ children }: ILocationProps) => {
  const [ceps, setCeps] = useState({} as ILocation);
  const [cepNumber, setCepNumber] = useState<string>("");

  const handleSearch = async () => {
    await axios
      .get(`https://viacep.com.br/ws/${cepNumber}/json/`)
      .then((res) => {
        setCeps(res.data);
      })
      .catch((err) => toast.error("Erro ao consultar cep"));
  };

  useEffect(() => {
    setCepNumber(cepNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocalizaCepContext.Provider
      value={{ ceps, setCepNumber, cepNumber, handleSearch, setCeps }}
    >
      {children}
    </LocalizaCepContext.Provider>
  );
};

export const useLocalizaCep = () => useContext(LocalizaCepContext);
