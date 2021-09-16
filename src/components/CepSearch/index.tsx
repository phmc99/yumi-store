import { useEffect } from "react";
import { useHistory } from "react-router";
import { useLocalizaCep } from "../../providers/CepProvider";
import { useProfile } from "../../providers/Profile";
import api from "../../services";
import { Container, Info, Box, InputForm, ButtonSearch, Input } from "./styles";

export const CepCard = () => {
  const { ceps, cepNumber, setCepNumber, handleSearch } = useLocalizaCep();
  const { setUserInfo, userInfo, getUser } = useProfile();

  const id = JSON.parse(localStorage.getItem("@yumi:id") || "null");
  const history = useHistory();
  const editCep = async (address: Object) => {
    await api.put(`/auth/user/${id}/`, { address: address });
  };

  const handleCart = async () => {
    history.push("/cart");
    editCep(ceps);

    await api.get(`/auth/user/${id}/`).then((resp) => {
      setUserInfo(resp.data.user);
      console.log(userInfo);
    });
  };

  useEffect(() => {
    getUser();
  }, [userInfo, getUser]);

  return (
    <Container>
      <Input
        placeholder=" CEP:"
        onChange={(evt) => setCepNumber(evt.target.value)}
      />
      <ButtonSearch
        disabled={!cepNumber}
        onClick={() => handleSearch(cepNumber)}
      >
        Buscar pelo CEP
      </ButtonSearch>

      <Box>
        <span>CEP:</span>
        <Info>{ceps.cep}</Info>

        <span>Logradouro:</span>
        <InputForm placeholder="Digite o logradouro" value={ceps.logradouro} />
        <span>Bairro:</span>
        <InputForm placeholder="Digite o bairro" value={ceps.bairro} />

        <span>Cidade:</span>
        <InputForm placeholder="Digite o cidade" value={ceps.localidade} />

        <span>Estado:</span>
        <InputForm placeholder="Digite o estado" value={ceps.uf} />

        <button className="newAdress" onClick={handleCart}>
          Usar esse novo endereço
        </button>
      </Box>
    </Container>
  );
};
