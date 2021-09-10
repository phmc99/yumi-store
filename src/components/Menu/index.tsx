import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import imageLogo from "../../assets/dogImage.png";
import { VscSearch, VscHeart } from "react-icons/vsc";
import { BsPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import {
  StyledMenuBar,
  ContainerLogo,
  StyledRightNav,
  StyledBurger,
} from "./style";
import ProfileMenu from "../ProfileButtonMenu";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const [profileButtonClicked, setProfileButtonClicked] =
    useState<boolean>(false);

  const ActivateButtonMenu = () => {
    setOpen(false);
    setProfileButtonClicked(true);
  };

  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <StyledMenuBar>
      <ContainerLogo>
        <div className="logo-button" onClick={goHome}>
          <img
            style={{ height: "55px", width: "55px" }}
            className="logo"
            src={imageLogo}
            alt="logo"
          />
          <h1 className="titleMenu">Yumi</h1>
          <h1 className="titleMenu-2">Store</h1>
        </div>
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
          <li key="1">
            <Link to="/">
              <VscSearch style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
          <li key="2" onClick={() => ActivateButtonMenu()}>
            <Link to={{}}>
              <BsPersonFill style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
          <li key="3">
            <Link to={{}}>
              <VscHeart style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
          <li key="4">
            <Link to={{}}>
              <HiShoppingCart style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
        </div>
      </StyledRightNav>
    </StyledMenuBar>
  );
};
