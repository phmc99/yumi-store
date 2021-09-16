import styled from "styled-components";

export const StyledMenuBar = styled.nav`
  width: 100%;
  height: 65px;
  background-color: transparent;
  padding: 0 20px 0 5px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  .logo {
    margin-top: 0;
    width: 50px;
    height: 50px;
  }
`;

export const ContainerLogo = styled.div`
  cursor: pointer;

  .logo-button {
    display: flex;
    h1 {
      font-family: "Merienda", cursive;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 52px;
      margin-top: 5px;
    }
    .titleMenu-2 {
      color: #8f4bc7;
    }
  }
`;

export const StyledRightNav = styled.ul<{ open: boolean }>`
  div {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
  }

  li {
    padding: 18px 10px;
    width: 50px;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid #0d2538;
      cursor: pointer;
      @media (max-width: 414px) {
        border: none;
      }
    }

    a {
      display: flex;
      gap: 7px;
      color: black;
      @media (max-width: 414px) {
        font-size: 1.5rem;
        gap: 20px;
        width: 30px;
      }

      &:visited {
        color: black;
      }
    }

    i {
      height: 27px;
      width: 27px;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 414px) {
    div {
      display: flex;
      background-color: transparent;
      height: 50px;
      width: 100vw;
      justify-content: space-between;
    }
    flex-flow: row nowrap;
    background-color: transparent;
    justify-content: space-between;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 40px;
    background-color: transparent;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

export const StyledBurger = styled.div<{ open: boolean }>`
  width: 1.5rem;
  height: 2rem;
  position: relative;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  margin-top: 4px;

  @media (max-width: 414px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 10px;
    right: 0;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#5f6874" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
