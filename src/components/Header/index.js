import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_header.png';
// eslint-disable-next-line import/extensions
import { HeaderContainer, Image, ImageContainer, MenuContainer, MenuItem } from './styles.js';

function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Link to="/">
          <Image src={Logo} alt="Logo" />
        </Link>
      </ImageContainer>
      <MenuContainer>
        <MenuItem><a href="/">Campanhas</a></MenuItem>
        <MenuItem><a href="/">Produtos</a></MenuItem>
        <MenuItem><a href="/">Clientes</a></MenuItem>
        <MenuItem><a href="/">Sair</a></MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;
