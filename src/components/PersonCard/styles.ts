import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 30px;
  filter: drop-shadow(2px 2px 5px black);

  .data {
    position: absolute;
    z-index: 2;
    margin-top: 125px;
    margin-left: -35px;

    h1 {
      width: 200px;
      font-size: 1.5rem;
      letter-spacing: -0.7px;
      font-variant: small-caps;
      color: var(--yellow);
      line-height: 20px;
    }

    h3 {
      font-size: 1.2rem;
      width: 150px;
      font-variant: small-caps;
      letter-spacing: -0.7px;
      color: var(--yellow);
      border-bottom: 5px solid var(--purple);
    }

    a {
      svg {
        font-size: 1.6rem;
        color: var(--yellow);
        margin: 0 10px;
      }
    }
  }

  .image {
    img {
      width: 250px;
      filter: grayscale(1) saturate(70%) brightness(80%) contrast(100%);
      border-radius: 20px;
    }
  }

  @media (min-width: 1024px) {
    .data {
      margin-top: 170px;
      margin-left: -75px;
    }
    .image {
      img {
        width: 300px;
      }
    }
  }
`;
