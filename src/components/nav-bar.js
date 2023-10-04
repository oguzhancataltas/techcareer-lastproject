import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import { ABOUT_US, ABOUT_US_USER, HOME, HOME_USER, MOVIES, MOVIES_USER, USER, WATCH_MOVİES } from "../constants/routes";
import { BiUserCircle } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import Cookie from "js-cookie";
import { useLocation } from "react-router-dom";

 export const navItemData = {
  users: [
    {
      name: "Filmler",
      redirectTo: MOVIES_USER,
    },
    {
      name: "İzlediklerim",
      redirectTo: WATCH_MOVİES,
    },
    {
      name: "Hakkımızda",
      redirectTo: ABOUT_US_USER,
    },
    {
      name: <FaSignOutAlt onClick={() => Cookie.remove('token')} />,
      redirectTo: HOME,
    },
  ],
  global: [
    {
      name: "Filmler",
      redirectTo: MOVIES,
    },
    {
      name: "Hakkımızda",
      redirectTo: ABOUT_US,
    },
    {
      name: <BiUserCircle style={{height:'30px', width: '30px'}} />,
      redirectTo: USER,
    },
  ],
};

const NavBar = () => {
  const { pathname } = useLocation();
  const [list, setList] = useState([]);

  const hasUserPage = pathname === "/users" && true;
  const hasUserPages = pathname.indexOf("users/") > -1 && true;

  useEffect(() => {
    if (hasUserPage) {
      setList([]);
    } else {
      if (hasUserPages) {
        setList(navItemData.users);
      } else {
        setList(navItemData.global);
      }
    }
  }, [hasUserPage, hasUserPages]);

  return (
    <div className="bg-dark">
      <Container>
        <Navbar expand="md">
          { pathname.indexOf('users/') > -1 ?
            <NavbarBrand className="fs-2 text-light" href={HOME_USER}>
            DC MOVIE
          </NavbarBrand> :
            <NavbarBrand className="fs-2 text-light" href={HOME}>
            DC MOVIE
          </NavbarBrand>
          }
          <Nav className="ml-auto" navbar>
            {list && list.length > 0 && list.map((item, index) => {
                return (
                  <NavItem key={`nav-item-${index}`}>
                    <NavLink className="fs-3 text-light" href={item.redirectTo}>
                      {item.name}
                    </NavLink>
                  </NavItem>
                );
              })}
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
