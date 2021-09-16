import styled from "styled-components";

export const Titulo = styled.h1`
  font-family: "Mulish", sans-serif;
  font-size: 2.05rem;
  margin: 0;
  font-weight: bold;
  @media (min-width: 760px) {
    font-size: 2.5rem;
    width: 300px;
    font-weight: bold;
    font-family: "Mulish", sans-serif;
    margin: 2rem 0;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Paragrafo = styled.p`
  display: flex;
  margin: 5.5rem 2.5rem 0rem 2.5rem;
  border: 2px solid #8f4bc7;
  width: 100%;
  height: 45px;
  border-radius: 0.7rem;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;

  @media (min-width: 760px) {
    margin: 3.5rem 2.5rem 0rem 2.5rem;
    width: 350px;
    font-weight: bold;
    font-size: 1.3rem;
    justify-content: center;
  }
`;

export const DivPagamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 974px) {
    width: 25vw;
  }
`;

export const ButtonPagamento = styled.button`
  width: 348px;
  height: 50px;
  border-radius: 13px;
  background-color: #8f4bc7;
  font-family: "Suez One", serif;
  font-size: 1.2rem;
  border: 0;
  cursor: pointer;
  margin: 0 auto;
  width: 220px;

  color: #fff;

  @media (min-width: 974px) {
    width: 280px;
    height: 50px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 974px) {
    width: 95vw;
    flex-direction: initial;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

