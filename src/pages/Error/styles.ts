import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    color: var(--purple);
    margin-top: 50px;
  }

  p {
    font-size: 1.3rem;
    margin: 0;
    color: var(--gray);
  }

  .more {
    color: var(--purple);
  }

  a {
    display: block;
    width: 220px;
    background-color: var(--purple);
    border: 1px solid var(--purple);
    border-radius: 10px;
    margin: 50px 0;
    padding: 10px;
    font-size: 1.3rem;
    text-align: center;
    color: var(--white);
    font-weight: bold;
  }

  img {
    width: 30%;
    min-width: 300px;
    max-width: 600px;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.7rem;
    }

    a {
    width: 380px;
  }
`;
