import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo_header.png";
import { HeaderContainer, Image, ImageContainer } from "./styles.js";

function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Link to="/">
          <Image src={Logo} alt="Logo" />
        </Link>
      </ImageContainer>
    </HeaderContainer>
  );
}

export default Header;
