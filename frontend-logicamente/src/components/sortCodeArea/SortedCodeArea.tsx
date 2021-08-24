import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Container } from './styles';

const SortedCodeArea: React.FC = () => {

  const [scrambledCode, setScrambledCode] = useState([])

  var myParam = window.location.search.slice(1).parseQueryString();


  useEffect(() => {
    axios.get('http://localhost:8085/game/scrambled-code?stage=1')
      .then((response) => setScrambledCode(response.data))
  }, []);

  return (
    <Container>
      <h4>Sugestoes</h4>
      <ul className="dropzone">
        {
          scrambledCode.map((sugestion, index) => {
            return <li key={index} className='sugestion' draggable>{sugestion}</li>
          })
        }
      </ul>

    </Container>
  );
}

export default SortedCodeArea;