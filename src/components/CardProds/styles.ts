import styled from "styled-components";

export const ContainerProd = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--white);
  cursor: auto;

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
  display: flex;
`;

export const ContainerInfo = styled.div`
  text-align: left;
  font-size: 17px;
  padding: 3%;

  h3 {
    height: 70px;
    font-size: 15px;
    font-family: "Mulish", serif;
    margin: 4% 0 4% 0;
  }
`;

export const ContainerPrice = styled.div`
  text-align: left;
  font-size: 17px;
  padding: 3%;

  .rating {
    margin: 0 0 10px;
    text-align: left;
  }

  h4 {
    font-weight: bolder;
  }
  .club-price {
    font-weight: bolder;
    color: var(--purple);
    width: 200px;
  }
  .club-logo {
    font-family: "Merienda", cursive;
    color: black;
  }
  .logo-tar {
    color: var(--purple);
  }

  .favButton {
    width: 100%;
    display: flex;
    background: initial;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 1.5rem;
      color: #f00;
    }
    p {
      font-size: 0.85rem;
      color: #f00;
      margin: 0;
    }
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
