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
      {buttonsText.map((buttonText, index) => {
        if(buttonText === "Executar") return <Button key={index} variant="success">{buttonText}</Button>
        if(buttonText === 'Limpar') return <Button key={index} variant="danger">{buttonText}</Button>
        return <Button key={index} variant="info">{buttonText}</Button>
      })}
    </Container>
  );
}

export default ActionsGameArea;