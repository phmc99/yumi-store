import styled from "styled-components";

export const ContainerProd = styled.div`
  display: flex;
  margin: 5%;

  img {
    margin: 5%;
    max-height: 220px;
  }
`;
export const ContainerCart = styled.div`
  display: flex;
  font-family: "Mulish", sans-serif;
  font-weight: bold;
`;

export const ContainerInfo = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
  width: 40vw;

  h4 {
    width: 300px;
    color: #0a0a09;
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 20px;
  }
  p {
    border: 1px solid gray;
    padding: 3%;
    width: 350px;
  }

  .span-price {
    color: #000;
  }

  button {
    font-weight: bold;
  }
`;
export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  margin: 10%;
  margin-top: 13rem;

  button {
    width: 200px;
    height: 40px;
    border-radius: 13px;
    background-color: #8f4bc7;
    color: #ffffff;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Suez One", sans-serif;
    margin-top: 2rem;
  }

  .club-price {
    font-family: "Merienda One", cursive;
    font-size: 19px;
    color: #8f4bc7;
  }
  .club-logo {
    color: black;
  }
`;
