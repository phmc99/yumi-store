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

      {ceps.map((cep, index) => {
        return (
          <Box key={index}>
            <Info>CEP: {cep.cep}</Info>

            <span>Logradouro:</span>
            <InputForm
              placeholder="Digite o logradouro"
              value={cep.logradouro}
            />

            <span>Cidade:</span>
            <InputForm placeholder="Digite o cidade" value={cep.localidade} />

            <span>Estado:</span>
            <InputForm placeholder="Digite o estado" value={cep.uf} />

            <span>Bairro:</span>
            <InputForm placeholder="Digite o bairro" value={cep.bairro} />
          </Box>
        );
      })}
    </Container>
  );
};
