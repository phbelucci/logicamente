import React from 'react';

import { Container } from './styles';

const login: React.FC = () => {
  return (
    <Container>
      <main>
        <form action="google.com">
          <label>Nome</label>
          <input placeholder="Insira o nome aqui..."/>
        </form>
        
        <button>Login</button>

        <button>Jogar sem Logar</button>

        <button>Cadastre-se</button>
      </main>
    </Container>
    );
}

export default login;