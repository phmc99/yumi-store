import { useProfile } from "../../providers/Profile";     
import { Box, Titulo, Paragrafo, Bold, Button } from "./styles";

const InfoClient = () => {        

  return (
    <>
      <Box>
        <Titulo>Confirmar dados</Titulo>
        <Paragrafo>
          <Bold>Nome:</Bold> Weslley Bastos
        </Paragrafo>
        <Paragrafo>
          <Bold>CPF:</Bold> 111.111.111-11
        </Paragrafo>
        <Paragrafo>
          <Bold>E-mail:</Bold> wessbastos@gmail.com
        </Paragrafo>
        <Paragrafo>
          <Bold>Telefone:</Bold> (xx) x xxxx-xxxx
        </Paragrafo>
        <Paragrafo>
          <Bold>Endereço:</Bold> Rua X, número 2 - Jd PaulistaSão Paulo-SP
        </Paragrafo>
        <Paragrafo>
          <Bold>Cidade/UF:</Bold> São Paulo/SP
        </Paragrafo>
        <Paragrafo>
          <Bold>CEP:</Bold> 010.101.010-11
        </Paragrafo>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button>Editar dados</Button>
        </div>

      </Box>
    </>
  );
};

export default InfoClient;
/* function ola(ola: any) {
  throw new Error("Function not implemented.");
}
 */
