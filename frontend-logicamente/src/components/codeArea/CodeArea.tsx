import React from 'react';
import SortedCodeArea from '../sortCodeArea/SortedCodeArea';
import ActionsGameArea from '../actionsGameArea/ActionsGameArea';

import { Container } from './styles';


const CodeArea: React.FC = () => {


  return (
    <Container>
      <ActionsGameArea>ActionsGameArea</ActionsGameArea>
      <SortedCodeArea>SortedCodeArea</SortedCodeArea>        
    </Container>
  );
}

export default CodeArea;