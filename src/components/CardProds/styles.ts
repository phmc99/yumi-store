import styled from "styled-components";

export const ContainerProd = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--white);

  img {
    margin: 6%;
    width: 150px;
  }
`;
export const CardDivisor = styled.div`
  padding: 4%;
  margin: 20px;
  width: 210px;
  height: 450px;
  border: solid 1px var(--gray);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px #a0a0a0;
`;

export const ContainerPrice = styled.div`
  text-align: left;
  font-size: 17px;
  padding: 3%;

  p {
    margin: 10px 0;
    text-align: left;
  }

  h3 {
    font-size: 15px;
    font-family: "Mulish", serif;
    margin: 4% 0 4% 0;
  }

  h4 {
    font-weight: bolder;
  }
  .club-price {
    font-weight: bolder;
    color: var(--purple);
  }
  .club-logo {
    font-family: "Merienda", cursive;
    color: black;
  }
  .logo-tar {
    color: var(--purple);
  }
`;

export const AddButton = styled.button`
  background-color: var(--purple);
  color: var(--white);
  padding: 5px;
  border-radius: 10px;
  width: 170px;
  font-family: "Suez One", serif;
  margin-top: 10px;

  &:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }
`;
