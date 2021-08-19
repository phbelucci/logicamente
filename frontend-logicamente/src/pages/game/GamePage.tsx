import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import GameArea from '../../components/gameArea/GameArea';
import CodeArea from '../../components/codeArea/CodeArea';

import { Container } from './styles'

const GamePage: React.FC = () => {
  return (
    <Container>
      <Navbar/>
      <main>
        <CodeArea/>
        <GameArea/>
      </main>
    </Container>
    )
}

export default GamePage;