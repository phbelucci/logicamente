import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import GameArea from '../../components/gameArea/GameArea';
import CodeArea from '../../components/codeArea/CodeArea';
import InputCodeArea from '../../components/inputCodeArea/InputCodeArea';

import { Container } from './styles'

const GamePage: React.FC = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <main>
        <div>
          <CodeArea></CodeArea>
          <GameArea></GameArea>
        </div>
          <InputCodeArea></InputCodeArea>
      </main>
    </Container>
    )
}

export default GamePage;