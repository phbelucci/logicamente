import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from './styles';


const InputCodeArea: React.FC = () => {

  const sugestionCodes : string[] = [
    'Programa {',
    'inicio {',
    'repetir(5)',
    'Programa {',
    'inicio {',
    'inicio {',
  ]

  return (
    <Container>
      <h4>Input</h4>
      <ul className="dropzone">
        {
          sugestionCodes.map((sugestion, index) => {
            return <li key={index} className='sugestion' draggable>{sugestion}</li>
          })
        }
      </ul>
    </Container>
  );
}

export default InputCodeArea;