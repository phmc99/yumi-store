import { useHistory, useLocation } from "react-router";
import { useLocalizaCep } from "../../providers/CepProvider";
import { useProfile } from "../../providers/Profile";

import { BoxInfo, Titulo, Paragrafo, Bold, Button, PageInfo } from "./styles";

const InfoClient = () => {
  const history = useHistory();
  const { userInfo } = useProfile();
  const { ceps } = useLocalizaCep();

  const location = useLocation();

  const handleCart = () => {
    history.push("/cart");
  };

  const handleEdit = () => {
    history.push("/info");
  };

  return (
    <PageInfo>
      <BoxInfo>
        <div className="dados">
          <Titulo>Confirmar dados</Titulo>
          <Paragrafo>
            <Bold>Nome:</Bold> {userInfo.name}
          </Paragrafo>
          <Paragrafo>
            <Bold>E-mail:</Bold> {userInfo.email}
          </Paragrafo>
          <Paragrafo>
            <Bold>Telefone:</Bold> {userInfo.phone}
          </Paragrafo>
        </div>
        {ceps.map((address, index) => (
          <div className="cep" key={index}>
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

        {location.pathname === "/cart" ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleEdit}>Editar endereço</Button>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleCart}>Use Este Endereço </Button>
          </div>
        )}
      </BoxInfo>
    </PageInfo>
  );
};

export default InfoClient;
