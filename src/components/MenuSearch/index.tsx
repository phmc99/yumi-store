import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import imageLogo from "../../assets/dogImage.png";
import { VscSearch, VscHeart } from "react-icons/vsc";
import { BsPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import ProfileMenu from "../ProfileButtonMenu";
import {
  StyledMenuBar,
  ContainerLogo,
  StyledRightNav,
  StyledBurger,
  Search,
  BottomMenu,
} from "./style";
import { Menu, Dropdown, Button } from "antd";

export const MenuSearch = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [profileButtonClicked, setProfileButtonClicked] =
    useState<boolean>(false);

  const ActivateButtonMenu = () => {
    setOpen(false);
    setProfileButtonClicked(true);
  };

  const history = useHistory();
  const changePage = (route: string) => {
    history.push(`/${route}`);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Novidades
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Rações
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Petiscos
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Higiene
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Roupas
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Brinquedos
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Viagens
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Camas
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Coleiras e Guias
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <StyledMenuBar>
        <ContainerLogo>
          <div className="logo-button" onClick={() => changePage("")}>
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
          <ProfileMenu setProfileButtonClicked={setProfileButtonClicked} />
        )}
        <StyledRightNav open={open}>
          <div className="right-nav">
            {open && (
              <li key="1" onClick={() => setOpen(false)}>
                <Link to={{}}>
                  <VscSearch style={{ height: "30px", width: "30px" }} />
                </Link>
              </li>
            )}
            <li key="2" onClick={() => ActivateButtonMenu()}>
              <BsPersonFill style={{ height: "30px", width: "30px" }} />
            </li>
            <li key="3" onClick={() => changePage("favorite")}>
              <VscHeart style={{ height: "30px", width: "30px" }} />
            </li>
            <li key="4" onClick={() => changePage("cart")}>
              <HiShoppingCart style={{ height: "30px", width: "30px" }} />
            </li>
          </div>
        </StyledRightNav>
      </StyledMenuBar>

      <BottomMenu open={open}>
        <div style={{ width: "100%" }}>
          <Dropdown
            className="item"
            overlay={menu}
            placement="bottomCenter"
            arrow
            key="1"
          >
            <Button>Cachorros</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menu}
            placement="bottomCenter"
            arrow
          >
            <Button>Gatos</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menu}
            placement="bottomCenter"
            arrow
            key="2"
          >
            <Button>Outros Pets</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menu}
            placement="bottomCenter"
            arrow
            key="3"
          >
            <Button>Saúde</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menu}
            placement="bottomCenter"
            arrow
            key="4"
          >
            <Button>Outlet</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menu}
            placement="bottomCenter"
            arrow
            key="5"
          >
            <Button>Adote</Button>
          </Dropdown>
        </div>
      </BottomMenu>
    </div>
  );
};
