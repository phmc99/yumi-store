import { useState } from "react";
import { useLocalizaCep } from "../../providers/CepProvider";
import { Container, Input, Info, Box, InputForm, ButtonSearch } from "./styles";

export const CepCard = () => {
  const { ceps, cepNumber, setCepNumber, handleSearch, setCeps } =
    useLocalizaCep();

  console.log(ceps);

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
            <Info>Logradouro: {cep.logradouro}</Info>
            <Info>Estado: {cep.uf}</Info>
            <Info>Cidade: {cep.localidade}</Info>
            <Info>Bairro: {cep.bairro}</Info>
            <div style={{ display: "flex" }}>
              <InputForm placeholder="logradouro:" value={cep.logradouro} />
              <InputForm placeholder="Cidade:" value={cep.localidade} />
            </div>
            <div style={{ display: "flex" }}>
              <InputForm placeholder="Estado:" value={cep.uf} />
              <InputForm placeholder="bairro:" value={cep.bairro} />
            </div>
          </Box>
        );
      })}
    </Container>
  );
};
