import { Link } from "react-router-dom";
import { useState } from "react";
import imageLogo from "../../assets/dogImage.png";
import { VscSearch, VscHeart } from "react-icons/vsc";
import { BsPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { StyledMenuBar, ContainerLogo, StyledRightNav, StyledBurger } from "./style"
import ProfileMenu from "../ProfileButtonMenu";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const [profileButtonClicked, setProfileButtonClicked] = useState<boolean>(false);

  const ActivateButtonMenu = () => {
    setOpen(false);
    setProfileButtonClicked(true);
  };

  return (
    <StyledMenuBar>
      <ContainerLogo>
        <img
          className="logo"
          style={{ height: "55px", width: "55px" }}
          src={imageLogo}
          alt="logo"
        ></img>
        <h1 className="titleMenu">Yumi</h1>
        <h1 className="titleMenu-2">Store</h1>
      </ContainerLogo>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      {profileButtonClicked && (
          <ProfileMenu setProfileButtonClicked={setProfileButtonClicked} />
        )}
      <StyledRightNav open={open}>
        <div>
          <li>
            <Link to="/">
              <VscSearch style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
          <li onClick={() => ActivateButtonMenu()}>
            <Link to={{}}>
              <BsPersonFill style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
          <li>
            <Link to={{}}>
              <VscHeart style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
          <li>
            <Link to={{}}>
              <HiShoppingCart style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
        </div>
      </StyledRightNav>
    </StyledMenuBar>
  );
};
