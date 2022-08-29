import React from "react";
import { Link } from "react-router-dom";

import {
  NavContainer,
  LinkStyled,
  LeftNavContainer,
  RightNavContainer,
} from "./Nav.styled";

const Nav = () => {
  return (
    <NavContainer>
      {" "}
      <RightNavContainer>
        {" "}
        {/* work shop navling */}
        <LinkStyled to="/workshop">
          <span>שולחן כתיבה</span>
        </LinkStyled>
        {/* jurnal screen navlink */}
        <LinkStyled to="/jurnal-screen">
          <span>יומן</span>
        </LinkStyled>
        {/* home page navlink */}
        <LinkStyled to="/">
          <span>דף הבית</span>
        </LinkStyled>
      </RightNavContainer>
      <LeftNavContainer>
        <LinkStyled fontWeight="300" to="/">
          התחברות
        </LinkStyled>
        <LinkStyled fontWeight="300" to="/">
          הרשמה
        </LinkStyled>
      </LeftNavContainer>
    </NavContainer>
  );
};

export default Nav;
