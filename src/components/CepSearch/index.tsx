import { useHistory } from "react-router";
import { useLocalizaCep } from "../../providers/CepProvider";
import { useProfile } from "../../providers/Profile";
import api from "../../services";
import { Container, Info, Box, InputForm, ButtonSearch, Input } from "./styles";

export const CepCard = () => {
  const { ceps, cepNumber, setCepNumber, handleSearch } = useLocalizaCep();
  const { getUser } = useProfile();

  const id = JSON.parse(localStorage.getItem("@yumi:id") || "null");
  const history = useHistory();

  const editCep = async (address: Object) => {
    await api.put(`/auth/user/${id}/`, { address: address });
  };

  const handleCart = async () => {
    history.push("/cart");
    editCep(ceps);
    getUser();
  };

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
        <InputForm placeholder="Logradouro" value={ceps.logradouro} />
        <span>Bairro:</span>
        <InputForm placeholder="Bairro" value={ceps.bairro} />

        <span>Cidade:</span>
        <InputForm placeholder="Cidade" value={ceps.localidade} />

        <span>Estado:</span>
        <InputForm placeholder="Estado" value={ceps.uf} />

        <button className="newAdress" onClick={handleCart}>
          Usar esse novo endereço
        </button>
      </Box>
    </Container>
  );
};
