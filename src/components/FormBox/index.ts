import styled from "styled-components";

export const FormBox = styled.div`
  @media (max-width: 414px) {
    @media (max-height: 736px) {
      margin-top: 70px;
    }
  }
  @media (max-width: 320px) {
    @media (max-height: 568px) {
      margin-top: 110px;
    }
  }
  width: 100%;
  max-width: 460px;
  padding: 10px;
  text-align: center;

  h1 {
    font-size: 2.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: var(--gray);
    font-size: 1.1rem;
    a {
      font-size: 1.1rem;

      color: var(--purple);
      text-decoration: none;
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    max-width: 520px;
    h1 {
      font-size: 3rem;
    }
  }
`;

export const FormBoxLogin = styled.div`
  width: 100%;
  max-width: 460px;
  padding: 10px;
  text-align: center;

  h1 {
    font-size: 2.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: var(--gray);
    font-size: 1.1rem;
    a {
      font-size: 1.1rem;

      color: var(--purple);
      text-decoration: none;
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    max-width: 520px;
    h1 {
      font-size: 3rem;
    }
  }
`;

export const FormPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;

  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .error-message {
      color: var(--red);
      font-size: 0.7rem;
      margin-bottom: 5px;
    }
  }

  .illustration {
    display: none;
  }

  @media (min-width: 768px) {
    .form {
      width: 50%;
      position: static;
      top: 0;
      left: 0;
      transform: none;

      margin: 0 auto;
    }
    .register-illustration {
      width: 50%;
      display: flex;
      justify-content: center;
      img {
        width: 70%;
      }
    }
    .login-illustration {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      img {
        width: 85%;
      }
    }
  }
`;

export const Load = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 60%);
  position: fixed;

  top: 0;

  .spinner {
    margin-top: 40vh;
  }
`;
