import styled from "styled-components";

export const Container = styled.div`
  .about {
    font-size: 3rem;
    text-align: center;
    margin: 20px;
    color: var(--purple);
    text-shadow: 3px 3px 3px rgb(144 144 144);
    font-variant: small-caps;
    letter-spacing: 2px;
  }

  ul {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
  }

  @media (min-width: 500px) {
    .about {
      font-size: 4rem;
    }
    ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`;
