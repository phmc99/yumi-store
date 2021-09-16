import styled from "styled-components";

export const StyledMenuBar = styled.nav`
  width: 100%;
  height: 65px;
  background-color: transparent;
  padding: 0 20px 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
  .logo {
    margin-top: 0;
    width: 50px;
    height: 50px;
  }
  @media (max-width: 414px) {
    align-items: flex-start;
  }
`;

export const ContainerLogo = styled.div<{ open: boolean }>`
  cursor: pointer;

  .logo-button {
    width: ${({ open }) => (open ? "0" : "100%")};
    height: ${({ open }) => (open ? "0" : "100%")};
    transition: opacity 1.5s;
    opacity: ${({ open }) => (open ? "0" : "100%")};
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
  .right-nav {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    height: 60px;
    margin: 0;
  }
  li {
    cursor: pointer;
    padding: 18px 10px;
    width: 50px;
    border-bottom: 3px solid transparent;

    sup {
      background-color: var(--purple);
    }

    &:hover {
      border-bottom: 3px solid #0d2538;
      @media (max-width: 414px) {
        border: none;
      }
    }

    a {
      display: flex;
      gap: 7px;
      color: black;
      width: 50px;
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
      background-color: white;
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
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: var(--black);
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

export const Search = styled.div<{ open: boolean }>`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 30px;
  height: 45px;
  width: 45vw;
  padding: 0 0 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    height: 30px;
    width: calc(45vw - 50px);
    margin: 0;
    padding: 0;
    border: none;
    font-size: 20px;
  }
  div:hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    transition: opacity 2s;
    transition: width 1.5s;
    transition: margin 1.5s;
    opacity: ${({ open }) => (open ? "100%" : "0")};
    width: ${({ open }) => (open ? "80%" : "0")};
    margin: ${({ open }) => (open ? "10px" : "0")};
    z-index: 9999;
    div {
      transition: width 1.5s;
      transition: margin-left 1.5s;
      transition: opacity 1.5s;
      transition: height 1.5s;
      opacity: ${({ open }) => (open ? "100%" : "0")};
      height: ${({ open }) => (open ? "35px" : "0")};
      width: ${({ open }) => (open ? "25px" : "0")};
      margin-left: ${({ open }) => (open ? "5" : "0")};
    }
    input {
      transition: opacity 1.5s;
      transition: width 1.5s;
      transition: height 1.5s;
      opacity: ${({ open }) => (open ? "100%" : "0")};
      height: ${({ open }) => (open ? "80%" : "0")};
      width: ${({ open }) => (open ? "86%" : "0")};
    }
  }
`;

export const BottomMenu = styled.ul<{ open: boolean }>`
  list-style: none;

  button {
    &:hover {
      filter: none;
    }
  }

  div {
    transition: opacity 0.2s;
    opacity: ${({ open }) => (open ? "0" : "100%")};
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    .item {
      height: 30px;
      display: flex;
      align-items: center;
      border-bottom: 3px solid transparent;
      border-top: none;
      border-right: none;
      border-left: none;
    }
    .item:hover {
      border-bottom: 3px solid black;
      border-top: none;
      border-right: none;
      border-left: none;
    }
    @media (max-width: 414px) {
      height: 100px;
      .item {
        width: 30vw;
        height: 40px;
        display: flex;
        justify-content: center;
      }
      .item {
        font-size: 15px;
      }
    }
    .item {
      text-decoration: none;
      font-family: Suez One;
      font-style: normal;
      font-weight: normal;
      line-height: 39px;
      color: black;
    }
  }
`;
