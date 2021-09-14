import { useState } from "react";
import { useHistory } from "react-router";
import { useLocalizaCep } from "../../providers/CepProvider";
import { useProfile } from "../../providers/Profile";
import { Box, Titulo, Paragrafo, Bold, Button } from "./styles";

const InfoClient = () => {
  const [btn, setBtn] = useState(false);

  const history = useHistory();
  const { userInfo } = useProfile();
  const { ceps } = useLocalizaCep();

  const handleBtn = () => {
    setBtn(true);
    history.push("/info");
  };
  const handleBtn1 = () => {
    setBtn(false);
    history.push("/cart");
  };

  return (
    <>
      {userInfo.map((user, index) => (
        <Box key={index}>
          <Titulo>Confirmar dados</Titulo>
          <Paragrafo>
            <Bold>Nome:</Bold> {user.name}
          </Paragrafo>
          <Paragrafo>
            <Bold>E-mail:</Bold> {user.email}
          </Paragrafo>
          <Paragrafo>
            <Bold>Telefone:</Bold> {user.phone}
          </Paragrafo>
          {ceps.map((address) => (
            <div key={index}>
              <Paragrafo>
                <Bold>Endereço:</Bold> {address.logradouro}
              </Paragrafo>
              <Paragrafo>
                <Bold>Cidade/UF:</Bold> {address.localidade}
              </Paragrafo>
              <Paragrafo>
                <Bold>CEP:</Bold> {address.cep}
              </Paragrafo>
              <Paragrafo>
                <Bold>Bairro:</Bold> {address.bairro}
              </Paragrafo>

            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {btn ? (
              <Button onClick={handleBtn1}>Use Este Endereço </Button>
            ) : (
              <Button onClick={handleBtn}>Editar dados</Button>
            )}
          </div>
        </Box>
      ))}
    </>
  );
};

export default InfoClient;
/* function ola(ola: any) {
  throw new Error("Function not implemented.");
}
 */
