import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import imageLogo from "../../assets/dogImage.png";
import { VscHeart } from "react-icons/vsc";
import { IoIosHome } from "react-icons/io";
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
        <ProfileMenu
          profileButtonClicked={profileButtonClicked}
          setProfileButtonClicked={setProfileButtonClicked}
        />
      )}
      <StyledRightNav open={open}>
        <div>
          <li key="1" onClick={() => goHome()}>
            <Link to={{}}>
              <IoIosHome style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
          <li
            key="2"
            onMouseLeave={() => setProfileButtonClicked(false)}
            onMouseEnter={() => setProfileButtonClicked(true)}
          >
            <Link to={{}}>
              <BsPersonFill style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
          <li key="3">
            <Link to={"/favorite"}>
              <VscHeart style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
          <li key="4">
            <Link to={"/cart"}>
              <HiShoppingCart style={{ height: "30px", width: "30px" }} />
            </Link>
          </li>
        </div>
      </StyledRightNav>
    </StyledMenuBar>
  );
};
