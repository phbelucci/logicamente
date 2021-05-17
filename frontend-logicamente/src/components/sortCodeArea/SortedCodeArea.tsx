import React from 'react';
import { useDrag } from 'react-dnd';

import { Container } from './styles';

const SortedCodeArea: React.FC = () => {


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
      <h4>Sugestoes</h4>
      <ul className="dropzone">
        {
          sugestionCodes.map(sugestion => {
            return <li key={sugestion} className='sugestion' draggable>{sugestion}</li>
          })
        }
      </ul>
      
    </Container>
  );
}

export default SortedCodeArea;