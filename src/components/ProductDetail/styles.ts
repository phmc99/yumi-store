import styled from "styled-components";

export const ContainerProd = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  padding: 2%;

  img {
    margin: 5%;
    max-height: 220px;
  }

  .images {
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: center;
    max-width: 470px;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    margin: 1%;
    padding: 2%;
  }

  @media (min-width: 1200px) {
    .all {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 0%;
      align-items: flex-start;
      height: 480px;
    }
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 15px 0;
    font-size: 1.5rem;
    font-weight: bold;
    font-variant-caps: small-caps;
  }

  .text-description {
    font-size: 1rem;
    text-align: justify;
    width: 300px;
  }

  .favButton {
    display: block;
    background-color: initial;
    color: #f00;
    margin-top: 20px;

    :hover {
      color: #d20000;
    }

    :active {
      position: relative;
      top: 2px;
    }

    svg {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 1200px) {
    width: 70%;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;

  h4 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    border: 1px solid gray;
    padding: 3%;
  }

  .span-price {
    color: #000;
  }

  button {
    font-weight: bold;
  }

  .stars {
    margin: 0 0 10px;
    text-align: left;
    display: inline;
  }

  .rating {
    display: inline-block;
    font-size: 0.7rem;
    margin-left: 8px;
  }
`;

export const ContainerPrice = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  font-size: 2rem;

  button {
    width: 200px;
    height: 40px;
    border-radius: 13px;
    background-color: #8f4bc7;
    color: #ffffff;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Suez One", sans-serif;
    margin: 20px auto;
  }

  h4 {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .club {
    display: flex;
  }
  .club-price {
    margin-top: 0;
    color: #8f4bc7;
  }

  .club-span {
    margin-left: 14px;
    font-family: "Merienda", cursive;
    color: var(--purple);
    font-size: 1.5rem;

    .club-logo {
      color: black;
    }
  }
`;

export const SideImage = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 25vw;
    max-width: 150px;
  }
  img:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }
`;

export const MainImage = styled.div`
  cursor: pointer;

  img {
    width: 70vw;
    max-width: 310px;
    max-height: 310px;
  }

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
