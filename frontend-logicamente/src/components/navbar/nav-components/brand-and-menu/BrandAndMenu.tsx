import React from 'react';
import {
  Link
} from "react-router-dom";

import { Container } from './styles';

const BrandAndMenu: React.FC = () => {
  const menuOptions = [
    'Home',
    'Fases',
    'Ranking'
  ]
  return (
    <Container>
      <h4>Logicamente</h4>
      <div>
        {
          menuOptions.map(option => {
            const optionLower = `/${option.toLowerCase()}`
            return <Link to={optionLower}>{option}</Link>
          })
        }
      </div>
    </Container>
  )
}

export default BrandAndMenu;