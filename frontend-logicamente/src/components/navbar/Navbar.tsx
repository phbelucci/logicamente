import React from 'react';

import { Container } from './styles';
import BrandAndMenu from "./nav-components/brand-and-menu/BrandAndMenu";

const NavegationBar: React.FC = () => {
  return (
    <Container>
      <BrandAndMenu/>

    </Container>
  )
}

export default NavegationBar;