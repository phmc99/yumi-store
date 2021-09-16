import { useLocalizaCep } from "../../providers/CepProvider";
import { Container, Info, Box, InputForm, ButtonSearch, Input } from "./styles";

export const CepCard = () => {
  const { ceps, cepNumber, setCepNumber, handleSearch } = useLocalizaCep();

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
        Buscar
      </ButtonSearch>



          <Box>
            <Info>CEP: {ceps.cep}</Info>

            <span>Logradouro:</span>
            <InputForm
              placeholder="Digite o logradouro"
              value={ceps.logradouro}
            />

            <span>Cidade:</span>
            <InputForm placeholder="Digite o cidade" value={ceps.localidade} />

            <span>Estado:</span>
            <InputForm placeholder="Digite o estado" value={ceps.uf} />

            <span>Bairro:</span>
            <InputForm placeholder="Digite o bairro" value={ceps.bairro} />
          </Box>
     
 
    </Container>
  );
};
