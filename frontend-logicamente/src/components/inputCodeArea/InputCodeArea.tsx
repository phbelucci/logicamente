import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from './styles';


const InputCodeArea: React.FC = () => {

  const sugestionCodes : string[] = []

  return (
    <Container>
      <h4>Input</h4>
      <div className="dropzone"></div>
      <Button variant="success">Enviar</Button>
    </Container>
  );
}

export default InputCodeArea;