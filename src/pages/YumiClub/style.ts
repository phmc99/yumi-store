import styled from "styled-components";

export const ContainerPage = styled.div`
  width: 100vw;
  max-height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-purple);
  font-family: "Suez-one", serif;
  text-align: center;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h1 {
      color: var(--purple);
      text-transform: uppercase;
    }
    h2 {
      color: var(--purple);
      font-family: "Mulish";

      text-transform: uppercase;
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    height: 100%;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      gap: 10px;

      .boxes {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        .announcement {
          display: flex;
          flex-direction: column;
          padding: 0% 10%;
          max-width: 70vw;
          height: 275px;
          background-color: var(--purple);
          border-radius: 5px;

          h4 {
            margin-top: 10px;
            color: var(--white);
            font-family: "Mulish";
            font-weight: 600;
            text-transform: uppercase;
            border-bottom: 2px solid var(--white);
          }

          h2 {
            margin-top: 10px;
            color: var(--white);
            text-transform: uppercase;
            width: 200px;
            font-size: 1.7rem;
            font-family: "Suez One";
          }
          span {
            padding: 0;
            color: var(--white);
            font-size: 40px;
            font-weight: bold;
          }
        }
      }
    }
  }

  figure {
    border-radius: 100%;
    width: 33%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-purple);
    margin-left: 20px;
    .gift {
      width: 70%;
      max-width: 280px;
    }

    p {
      color: var(--purple);
      font-size: 1.8rem;
      font-family: "Suez one", serif;
      margin-top: 10px;
    }
  }

  @media (min-width: 768px) {
    margin: 0;
    max-width: 1400px;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    max-height: 1080px;

    h1 {
      font-size: 45px;
      width: 100%;
    }
    h2 {
      font-size: 35px;
      width: 100%;
    }
    .flex {
      flex-direction: row;
      justify-content: center;

      .left {
        flex-direction: column;

        .boxes {
          flex-direction: row;

          .announcement {
            flex-direction: column;
            width: 70%;
            padding: 0 25px;
          }
        }
      }
    }
  }

  @media (min-width: 1300px) {
    figure {
      display: flex;
    }
  }
`;
export const Containersub = styled.div`
  .econ {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    background-color: var(--purple);
    color: var(--white);
    border-radius: 5px;
    padding: 10px;

    p {
      font-size: 22px;
      font-family: "Suez one", serif;
      font-weight: 600;
    }

    .econ-sub-flex {
      display: flex;
      flex-direction: column;
    }

    .icons {
      width: 70px;
      height: 70px;
    }

    span {
      font-size: 15px;
      font-family: "Suez one", serif;
      font-weight: 600;
    }
  }
  @media (min-width: 1000px) {
    .econ {
      width: 41.5vw;
      max-width: 800px;

      .econ-sub-flex {
        flex-direction: row;
        align-items: center;
        height: 50%;

        .econ-sub {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-around;
          span {
            font-size: 12px;
            font-weight: 400;
          }
        }
      }
    }
  }
`;
export const YumiClubSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background-color: var(--white);
  border: solid 2px var(--light-purple);
  width: 80vw;
  height: 70vh;
  max-height: 800px;
  margin-left: 20px;
  padding: 10px;

  .logo {
    width: 80%;
  }
  p {
    font-family: "Mulish", sans-serif;
    font-weight: bold;
    font-size: 1.2em;
  }
  button {
    width: 200px;
    height: 40px;
    font-family: "Suez One", sans-serif;
    border-radius: 13px;
    background-color: var(--purple);
    color: var(--white);
    font-size: 15px;
    text-transform: uppercase;
    margin: 1rem;
  }

  @media (min-width: 1000px) {
    width: 20vw;
    height: 90vh;

    .logo {
    }
    p {
      margin-top: 3rem;
      font-size: 1.8rem;
    }
    button {
      width: 80%;
      max-width: 320px;
    }
  }
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (min-width: 1000px) {
    flex-direction: row;
    margin: 0 10px;
    gap: 0;
  }
`;

export const YumiClubPage = styled.div``;
