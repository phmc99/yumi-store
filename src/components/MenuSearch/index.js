import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import imageLogo from "../../assets/dogImage.png";
import { VscSearch, VscHeart } from "react-icons/vsc";
import { BsPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import ProfileMenu from "../ProfileButtonMenu";

const StyledMenuBar = styled.nav`
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

const ContainerLogo = styled.div`
  display: flex;
  cursor: pointer;
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
`;

const StyledRightNav = styled.ul`
  div {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
  }

  li {
    padding: 18px 10px;
    width: 50px;
    border-bottom: 3px solid transparent;

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
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const StyledBurger = styled.div`
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

const Search = styled.div`
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
  @media (max-width: 414px) {
    height: 0;
    width: 0;
    margin: 0;
    padding: 0;
    border: none;
    div {
      height: 0;
      width: 0;
      margin: 0;
      padding: 0;
      border: none;
      color: transparent;
    }
    input {
      height: 0;
      width: 0;
      margin: 0;
      padding: 0;
      border: none;
    }
  }
`;

const BottomMenu = styled.ul`
  list-style: none;

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
    li {
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: 3px solid transparent;
    }
    li:hover {
      border-bottom: 3px solid black;
      a {
        filter: drop-shadow(2px 2px 2px #a9a9a9);
      }
    }
    @media (max-width: 414px) {
      height: 100px;
      li {
        width: 30vw;
        height: 40px;
        display: flex;
        justify-content: center;
      }
      li a {
        font-size: 15px;
      }
    }
    li a {
      text-decoration: none;
      font-family: Suez One;
      font-style: normal;
      font-weight: normal;
      line-height: 39px;
      color: black;
    }
  }
`;

const ProfileLogged = styled.div`
  height: 20px;
  width: 20px;
  background-color: green;
  position: absolute;
`;

const ProfileNotLogged = styled.div`
  height: 20px;
  width: 20px;
  background-color: red;
  position: absolute;
`;

export const MenuSearch = () => {
  const [open, setOpen] = useState(false);
  //   const history = useHistory();

  //   const handleLogout = () => {
  //     localStorage.clear();
  //     history.push("/");
  //   };

  const [profileButtonClicked, setProfileButtonClicked] = useState(false);

  const token = localStorage.getItem("token");
  const ActivateButtonMenu = () => {
    setOpen(false);
    setProfileButtonClicked(true);
  };

  return (
    <div>
      <StyledMenuBar>
        <ContainerLogo>
          <img
            style={{ height: "55px", width: "55px" }}
            className="logo"
            src={imageLogo}
            alt="logo"
          ></img>
          <h1 className="titleMenu">Yumi</h1>
          <h1 className="titleMenu-2">Store</h1>
        </ContainerLogo>
        <Search>
          <input placeholder="Exemplo: Cama para cachorros"></input>
          <div>
            <VscSearch style={{ height: "25px", width: "25px" }} />
          </div>
        </Search>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </StyledBurger>
        {profileButtonClicked && (
          <ProfileMenu close={setProfileButtonClicked} isLogged={token} />
        )}
        <StyledRightNav open={open}>
          <div>
            {open && (
              <li onClick={() => setOpen(false)}>
                <Link to="/login">
                  <VscSearch style={{ height: "30px", width: "30px" }} />
                </Link>
              </li>
            )}
            <li onClick={() => ActivateButtonMenu()}>
              <Link to="/login">
                <BsPersonFill style={{ height: "30px", width: "30px" }} />
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/login">
                <VscHeart style={{ height: "30px", width: "30px" }} />
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/login">
                <HiShoppingCart style={{ height: "30px", width: "30px" }} />
              </Link>
            </li>
          </div>
        </StyledRightNav>
      </StyledMenuBar>

      <BottomMenu open={open}>
        <div>
          <li>
            <Link to="/login">Cachorros</Link>
          </li>

          <li>
            <Link to="/login">Gatos</Link>
          </li>

          <li>
            <Link to="/login">Outros pets</Link>
          </li>

          <li>
            <Link to="/login">Saúde</Link>
          </li>

          <li>
            <Link to="/login">Outlet</Link>
          </li>

          <li>
            <Link to="/login">Adote</Link>
          </li>
        </div>
      </BottomMenu>
    </div>
  );
};
