import styled from "styled-components";

export const Images = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 30px;

  img {
    height: 80vw;
    margin: 6px 0;
  }

  @media (min-width: 600px) {
    img {
      height: 45vw;
      max-height: 510px;
    }
  }
`;

export const HoverText = styled.div`
  position: relative;
  cursor: pointer;
  filter: drop-shadow(2px 4px 6px black);

  img {
    opacity: 1;
    display: block;
    transition: 0.5s ease;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  .text {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

    h3 {
      font-size: 1.5rem;
      color: var(--white);
      font-variant: petite-caps;
      font-weight: 100;
    }
  }

  :hover {
    img {
      filter: brightness(0.45);
    }

    .text {
      opacity: 1;
    }
  }

  :active {
    position: relative;
    top: 3px;
  }

  @media (min-width: 800px) {
    .text {
      h3 {
        font-size: 2rem;
      }
    }
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fdb1ac;
  margin-top: 30px;
  padding: 20px 0;

  .info {
    margin: 5px auto;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 20vw;
      max-width: 85px;
    }

    h3 {
      margin-left: 20px;
      font-size: 1.3rem;
      font-variant-caps: petite-caps;
      line-height: 0.9;
      font-weight: 100;
    }
  }

  @media (min-width: 450px) {
    flex-direction: row;

    img {
      width: 10vw;
    }

    .info {
      width: 20vw;
      flex-direction: column;
      justify-content: center;

      h3 {
        text-align: center;
        margin-left: 0;
        margin-top: 10px;
        font-weight: 100;
      }
    }
  }

  @media (min-width: 1000px) {
    .info {
      h3 {
        font-size: 1.6rem;
        font-weight: 100;
      }
    }
  }
`;

export const Category = styled.div`
  h1 {
    font-size: 3rem;
    font-variant: small-caps;
    text-align: center;
    margin: 45px auto 0;
    color: var(--purple);
  }
  li {
    list-style: none;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    text-decoration: none;
  }
`;

export const More = styled.div`
  width: 210px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    font-size: 9rem;
    color: var(--purple);
  }
`;

export const Pesquisou = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 25px;
  }
  p {
    margin-left: 5px;
    margin-top: 10px;
  }
  font-size: 25px;
`;
