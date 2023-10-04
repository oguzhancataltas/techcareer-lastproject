import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ABOUT_US,
  ABOUT_US_USER,
  HOME,
  HOME_USER,
  MOVIES,
  MOVIES_USER,
  USER,
  NOT_FOUND,
} from "../constants/routes";
import { navItemData } from "../components/nav-bar.js";
import Cookie from "js-cookie";

const AuthLayout = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== HOME && pathname !== ABOUT_US && pathname !== MOVIES) {
      if (pathname === USER && Cookie.get("token")) {
        navigate(HOME_USER);
      } else if (
        pathname !== USER &&
        pathname.indexOf("users") > -1 &&
        !Cookie.get("token")
      ) {
        navigate(USER);
      }
    } else {
      if (Cookie.get("token")) {
        switch (pathname) {
          case ABOUT_US:
            navigate(ABOUT_US_USER);
            break;
          case MOVIES:
            navigate(MOVIES_USER);
            break;
          case HOME:
          default:
            navigate(HOME_USER);
            break;
        }
      }
    }

    let routeList = [HOME_USER];
    for (let i = 0; i < Object.keys(navItemData).length; i++) {
      for (let j = 0; j < Object.values(navItemData)[i].length; j++) {
        const navItemValueElement = Object.values(navItemData)[i][j];
        routeList.push(navItemValueElement.redirectTo);
      }
    }

    console.log(routeList);

    if (routeList.indexOf(pathname) === -1) {
      navigate(NOT_FOUND);
    }
  }, [pathname, navigate]);

  return <div>{children}</div>;
};

export default AuthLayout;
