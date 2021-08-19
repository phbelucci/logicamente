import React from 'react';
import { Container } from './styles';
import Button from 'react-bootstrap/Button';

const ActionsGameArea: React.FC = () => {

  const buttonsText : string[] = [
    'Limpar',
    'Voltar',
    'Desfazer',
    'Executar',
  ] 

  return (
    <Container>
      {buttonsText.map(buttonText => {
        if(buttonText === "Executar") return <Button variant="success">{buttonText}</Button>
        if(buttonText === 'Limpar') return <Button variant="danger">{buttonText}</Button>
        return <Button variant="info">{buttonText}</Button>
      })}
    </Container>
  );
}

export default ActionsGameArea;