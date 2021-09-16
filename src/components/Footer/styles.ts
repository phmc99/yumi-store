import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  padding: 10px;
  margin: 50px auto 5px;
  background-color: var(--purple);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 30px;
    width: 50%;
    max-width: 150px;
  }

  .socialMedia {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5px;

    h3 {
      margin: 20px 0 10px;
      font-size: 1.5rem;
      color: var(--white);
    }
    img {
      width: 40px;
      margin: 0 10px;
    }

    .face {
      padding: 3px;
    }
  }

  .institutional {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
    margin: 15px auto;
    padding-bottom: 20px;
    border-top: 1px solid var(--white);
    border-bottom: 1px solid var(--white);

    h3 {
      margin: 20px 0 10px;
      font-size: 1.5rem;
      color: var(--white);
    }

    p {
      margin: 5px 0;
      font-weight: bold;
      cursor: not-allowed;
    }
  }

  .attendance {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
    padding: 0 10px;

    h3 {
      margin: 20px 0 10px;
      font-size: 1.5rem;
      color: var(--white);
    }

    p {
      margin: 5px 0;
      font-weight: bold;
      cursor: not-allowed;
    }

    a {
      color: var(--yellow);
      font-size: 1.3rem;
      font-weight: bold;
      letter-spacing: -1.7px;

      .aboutus {
        cursor: pointer;
      }
    }
  }

  @media (min-width: 691px) {
    width: 99%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .institutional {
      margin: 15px 0;
      padding: 0 3%;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      border-left: 1px solid var(--white);
      border-right: 1px solid var(--white);
    }

    h3 {
      font-size: 3rem;
    }
  }
`;

export const Support = styled.div`
  background-color: var(--yellow);
  text-align: center;
  border-radius: 20px;
  padding: 10px;

  h2 {
    font-variant: small-caps;
  }

  .text {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
    }

    p {
      width: 65%;
      font-size: 0.9rem;
      text-align: center;
    }
  }

  button {
    width: 60%;
    height: 30px;
    margin-top: 10px;
    background-color: var(--purple);
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--white);
  }

  @media (min-width: 650px) {
    h2 {
      font-size: 2rem;
    }

    .text {
      img {
        margin-top: 0;
        margin-left: 5px;
        width: 135px;
        height: 135px;
      }
      p {
        font-size: 1.1rem;
      }
    }

    button {
      font-size: 1rem;
    }
  }

  @media (min-width: 900px) {
    width: 30vw;
    max-width: 480px;
  }
`;
