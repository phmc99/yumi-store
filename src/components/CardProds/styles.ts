import styled from "styled-components";

export const ContainerProd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--white);
  cursor: auto;

  img {
    margin: 6%;
    max-width: 150px;
    height: 150px;
  }
`;
export const CardDivisor = styled.div`
  padding: 4%;
  margin: 20px;
  width: 215px;
  height: 465px;
  border: solid 1px var(--gray);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px #a0a0a0;
  display: flex;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContainerInfo = styled.div`
  font-size: 17px;
  padding: 3%;

  h3 {
    height: 70px;
    font-size: 15px;
    font-family: "Mulish", serif;
    text-align: left;
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
    display: inline;
  }

  .number {
    display: inline-block;
    font-size: 0.7rem;
    margin-left: 8px;
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
    justify-content: space-evenly;

    svg {
      font-size: 1.5rem;
      color: #f00;

      :hover {
        color: #d20000;
      }

      :active {
        position: relative;
        top: 2px;
      }
    }
    p {
      font-size: 0.85rem;
      color: #f00;
      margin: 0;

      :hover {
        color: #d20000;
      }
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
  margin-left: 7px;
  margin-top: 10px;

  &:hover {
    filter: brightness(0.85);
    transition: all 0.4s;
  }
`;
