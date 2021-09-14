import styled from "styled-components";

export const Titulo = styled.h1`
  font-family: "Mulish", sans-serif;
  font-size: 1.05rem;
  margin: 6rem 0rem 0rem 2.5rem;
  width: 200px;
  font-weight: bold;
  @media (min-width: 760px) {
    font-size: 2.5rem;
    width: 300px;
    font-weight: bold;
    font-family: "Mulish", sans-serif;
    margin: 2.5rem 0rem 0rem 2.5rem;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 760px) {
  }
`;

export const Paragrafo = styled.p`
  display: flex;
  margin: 5.5rem 2.5rem 0rem 2.5rem;
  border: 2px solid #8f4bc7;
  width: 50vw;
  height: 45px;
  border-radius: 0.7rem;
  align-items: center;
  padding: 1rem;
  font-size: 0.8rem;
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
  margin: 2rem auto;
  width: 85vw;

  @media (min-width: 760px) {
  }
`;

export const ButtonPagamento = styled.button`
  width: 348px;
  height: 50px;
  border-radius: 13px;
  background-color: #8f4bc7;
  color: #fff;
  font-family: "Suez One", serif;
  font-size: 1.2rem;
  border: 0;
  cursor: pointer;
  margin: 0 auto;

  @media (min-width: 760px) {
    width: 220px;
    height: 40px;
    margin-right: 0%;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
`;
