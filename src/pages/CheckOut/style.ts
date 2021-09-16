import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Paragrafo = styled.p`
  display: flex;
  margin: 2rem 2.5rem 0rem 2.5rem;
  border: 2px solid #8f4bc7;
  width: 70%;
  height: 45px;
  border-radius: 0.7rem;
  align-items: center;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;

  @media (min-width: 760px) {
    margin: 3.5rem 2.5rem 0rem 2.5rem;
    width: 350px;
    font-weight: bold;
    font-size: 1rem;
    justify-content: center;
  }
`;
export const CheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 320px;
  max-height: 380px;
  justify-content: center;
  margin: 0 auto;
  border: solid 4px var(--purple);
  border-radius: 15px;

  img {
    width: 260px;
    height: 170px;
  }
  button {
    width: 250px;
    height: 40px;
    font-family: "Suez One", sans-serif;
    border-radius: 13px;
    background-color: var(--purple);
    color: var(--white);
    font-size: 15px;
    text-transform: uppercase;
    margin: 2rem 1rem;
  }
  &:hover {
    border: solid 4px var(--blue);
    transition: all 0.5s;

    button {
      background: rgb(105, 204, 227);
      background: linear-gradient(
        84deg,
        rgba(105, 204, 227, 1) 0%,
        rgba(25, 32, 103, 1) 26%,
        rgba(25, 32, 103, 1) 73%,
        rgba(106, 144, 225, 1) 100%
      );
    }
    .subtotal {
      border: solid 2px var(--blue);
    }
  }
`;
export const MainContainer = styled.div`
  @media (min-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 1800px;
    .resume {
      width: 55vw;
    }
    h1 {
      margin-left: 60px;
      position: absolute;
    }
    .check-out {
      margin-top: 4rem;
    }
  }
`;
