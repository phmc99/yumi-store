import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useLocalizaCep } from "../../providers/CepProvider";
import { useProfile } from "../../providers/Profile";

import { BoxInfo, Titulo, Paragrafo, Bold, Button, PageInfo } from "./styles";

const InfoClient = () => {
  const history = useHistory();
  const { userInfo, getUser } = useProfile();
  const { ceps } = useLocalizaCep();

  const location = useLocation();

  const handleCart = () => {
    history.push("/cart");
  };

  const handleEdit = () => {
    history.push("/info");
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ceps]);

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
        {userInfo.address && (
          <div className="cep">
            <Paragrafo>
              <Bold>Endereço:</Bold> {userInfo.address.logradouro}
            </Paragrafo>
            <Paragrafo>
              <Bold>Bairro:</Bold> {userInfo.address.bairro}
            </Paragrafo>
            <Paragrafo>
              <Bold>Cidade/UF:</Bold> {userInfo.address.localidade}
              {userInfo.address.uf}
            </Paragrafo>
            <Paragrafo>
              <Bold>CEP:</Bold> {userInfo.address.cep}
            </Paragrafo>
          </div>
        )}

        {location.pathname === "/cart" ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleEdit}>Editar endereço</Button>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleCart}>Use esse endereço </Button>
          </div>
        )}
      </BoxInfo>
    </PageInfo>
  );
};

export default InfoClient;
