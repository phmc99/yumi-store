import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 974px) {
    margin: 1rem;
    width: 50vw;
  }
`;
export const ListCart = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  margin: 2rem 0rem 0rem 0.6rem;
  padding: 0.5rem;

  .input-quantity {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
    }
  }

  @media (min-width: 974px) {
    display: flex;
    margin: 2rem 0rem 0rem 1rem;
    width: 50vw;
  }
`;

export const Image = styled.img`
  width: 107px;
  height: 107px;

  @media (min-width: 974px) {
    width: 127px;
    height: 127px;
  }
`;

export const ParagrafoProduct = styled.p`
  margin: 10px;
  font-family: "Mulish", sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;

  @media (min-width: 974px) {
    font-size: 1.1rem;
    text-align: start;
    padding: 1.2rem;
    width: 280px;
    margin-top: 1rem;
  }
`;

export const Button = styled.button`
  background-color: white;
  border: 0;
  cursor: pointer;
  outline: none;
  margin: 0.5rem;

  &:hover {
    filter: none;
  }

  @media (min-width: 974px) {
    padding: 0.6rem;
    margin-top: 1rem;
  }
`;

export const TitlePrice = styled.p`
  font-family: "Mulish", sans-serif;
  font-weight: bold;
  font-size: 1.3rem;

  @media (min-width: 974px) {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    width: 150px;
    font-size: 1.3rem;
    justify-content: center;
  }
`;
