import styled from "styled-components";

export const ContainerProd = styled.div`
  display: flex;
  margin: 5%;
  border: 3px solid var(--dark-purple);
  padding: 2%;

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
  margin-top: 1rem;
  margin-left: 3rem;
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
  .stars {
    display: flex;
    flex-direction: row-reverse;
  }

  .favButton {
    background-color: initial;
    color: #f00;

    svg {
      font-size: 2.5rem;
    }
  }
`;
export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 23px;
  margin: 16%;
  margin-top: 8rem;

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
  h4 {
    margin-top: 2rem;
    font-weight: bold;
  }
  .club-price {
    margin-top: 0;
    font-family: "Merienda One", cursive;
    font-size: 23px;
    color: #8f4bc7;
  }
  .club-logo {
    color: black;
  }
`;
export const SideImage = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 8%;

  img {
    width: 100px;
  }
  img:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }
`;
export const MainImage = styled.div`
  cursor: pointer;
  margin-top: 8%;

  img:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }
`;
export const ContainerComment = styled.div`
  display: flex;
  margin-top: 8%;

  img:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }
`;
