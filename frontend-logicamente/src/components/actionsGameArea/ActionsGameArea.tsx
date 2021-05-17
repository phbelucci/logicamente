import React from 'react';
import { Container } from './styles';
import Button from 'react-bootstrap/Button';


const ActionsGameArea: React.FC = () => {

  const buttonsText : string[] = [
  
    'Limpar',
    'Voltar',
    'Desfazer',
  ] 

  return (
    <Container>
      {buttonsText.map(buttonText => {
        if(buttonText === "Enviar"){
          return <Button variant="success">{buttonText}</Button>
        }
        return <Button variant="info">{buttonText}</Button>
      })}
    </Container>
  );
}

export default ActionsGameArea;