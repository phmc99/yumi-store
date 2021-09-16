import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    color: var(--purple);
    margin-top: 50px;
    text-shadow: 4px 4px 3px rgb(150 150 150);
  }

  p {
    font-size: 1.3rem;
    margin: 0;
    color: var(--gray);
    text-shadow: 3px 3px 4px rgb(150 150 150);
  }

  .more {
    color: var(--purple);
  }

  a {
    display: block;
    width: 220px;
    background-color: var(--purple);
    border: 1px solid transparent;
    border-radius: 10px;
    margin: 50px 0;
    padding: 10px;
    font-size: 1.3rem;
    text-align: center;
    color: var(--white);
    font-weight: bold;

    :hover {
      background: linear-gradient(
        to bottom,
        var(--purple) 5%,
        var(--dark-purple) 100%
      );
    }

    :active {
      position: relative;
      top: 2px;
    }
  }

  img {
    display: none;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    img {
      display: flex;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
      width: 30%;
      min-width: 300px;
      max-width: 600px;
    }

    p {
      font-size: 1.7rem;
    }

    a {
      width: 380px;
    }
  }
`;
