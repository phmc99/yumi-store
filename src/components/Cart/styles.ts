import styled from "styled-components";

export const Box = styled.div`
  width: 70vw;
  margin: 0 auto;

  @media (min-width: 760px) {
    margin: 1rem;
  }
`;
export const ListCart = styled.ul`
  text-align: center;
  border-bottom: 1px solid black;
  margin: 2rem 0rem 0rem 0.6rem;
  padding: 0.5rem;

  @media (min-width: 760px) {
    display: flex;
    margin: 2rem 0rem 0rem 2.6rem;
    width: 50vw;
  }
`;

export const Image = styled.img`
  width: 107px;
  height: 107px;

  @media (min-width: 760px) {
    width: 127px;
    height: 127px;
  }
`;

export const ParagrafoProduct = styled.p`
  margin: 10px;
  font-family: "Mulish", sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
  text-align: center;

  @media (min-width: 760px) {
    font-size: 1.2rem;
    text-align: start;
    padding: 1.5rem;
    width: 350px;
    margin-top: 1rem;
  }
`;

export const Button = styled.button`
  background-color: white;
  border: 0;
  cursor: pointer;
  outline: none;
  margin: 0.5rem;

  @media (min-width: 760px) {
    padding: 0.6rem;
    margin-top: 1rem;
  }
`;

export const TitlePrice = styled.p`
  font-family: "Mulish", sans-serif;
  font-weight: bold;

  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    width: 200px;
    font-size: 1.3rem;
    justify-content: center;
  }
`;
