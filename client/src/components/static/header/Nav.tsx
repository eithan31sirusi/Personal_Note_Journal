import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../../setup/context/authContext";

import {
  NavContainer,
  LinkStyled,
  LeftNavContainer,
  RightNavContainer,
} from "./Nav.styled";

const Nav = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <NavContainer>
      <RightNavContainer>
        {/* home page navlink */}
        <LinkStyled to="/">
          <span>דף הבית</span>
        </LinkStyled>{" "}
        {/* work shop navling */}
        <LinkStyled to="/workshop">
          <span>שולחן כתיבה</span>
        </LinkStyled>{" "}
        {/* jurnal screen navlink */}
        {isLoggedIn && (
          <LinkStyled to="/:uid/pages">
            <span>יומן</span>
          </LinkStyled>
        )}
      </RightNavContainer>
      <LeftNavContainer>
        {!isLoggedIn ? (
          <>
            {" "}
            <LinkStyled onClick={login} fontWeight="300" to="/workshop">
              התחברות
            </LinkStyled>
            <LinkStyled fontWeight="300" to="/auth">
              הרשמה
            </LinkStyled>
          </>
        ) : (
          <LinkStyled onClick={logout} fontWeight="300" to="/">
            התנתק
          </LinkStyled>
        )}
      </LeftNavContainer>
    </NavContainer>
  );
};

export default Nav;
