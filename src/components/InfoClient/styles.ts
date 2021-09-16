import styled from "styled-components";

export const PageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxInfo = styled.div`
  width: 90vw;
  height: auto;
  border: 2px solid #8f4bc7;
  border-radius: 12px;
  padding: 10px;

  .dados {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 974px) {
    width: 30vw;
    height: 565px;
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

  @media (min-width: 974px) {
    font-size: 1.75rem;
  }
`;

export const Paragrafo = styled.p`
  font-weight: bold;
  font-family: "Mulish";
  margin: 0.7rem;
  font-size: 1.2rem;

  @media (min-width: 974px) {
    font-size: 1.38rem;
  }
`;

export const Bold = styled.strong`
  color: #8f4bc7;
`;

export const Button = styled.button`
  background-color: var(--purple);
  color: var(--white);
  width: 75vw;
  height: 35px;
  border-radius: 12px;
  font-weight: bold;
  font-family: "Mulish";
  font-size: 1rem;

  @media (min-width: 974px) {
    width: 340px;
    font-size: 1.2rem;
  }
`;
