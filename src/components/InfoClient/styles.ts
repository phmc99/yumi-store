import styled from "styled-components";

export const Box = styled.div`
  width: 90vw;
  height: 420px;
  border: 2px solid #8f4bc7;
  border-radius: 12px;

  @media (min-width: 760px) {
    width: 535px;
    height: 545px;
    margin-right: 1rem;
    margin: 10px;
  }
`;

export const Titulo = styled.h2`
  text-align: center;
  margin: 1rem;
  font-weight: bold;
  font-family: "Mulish";
  font-size: 1.5rem;

  @media (min-width: 760px) {
    font-size: 2rem;
  }
`;

export const Paragrafo = styled.p`
  font-weight: bold;
  font-family: "Mulish";
  margin: 0.7rem;
  font-size: 1.2rem;

  @media (min-width: 760px) {
    font-size: 1.5rem;
  }
`;

export const Bold = styled.strong`
  color: #8f4bc7;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 2px solid #8f4bc7;
  width: 75vw;
  height: 35px;
  border-radius: 12px;
  font-weight: bold;
  font-family: "Mulish";
  font-size: 1rem;

  @media (min-width: 760px) {
    width: 340px;
    font-size: 1.2rem;
  }
`;
